import * as React from 'react';

type Dispatch = ({ position }: Omit<State, 'prevPosition'>) => void;
type State = { position: number; prevPosition: number };
type CountProviderProps = { children: React.ReactNode };

const ProjectContext = React.createContext<{ state: State; changeConfig: Dispatch } | undefined>(undefined);

function ProjectProvider({ children }: CountProviderProps) {
  const [config, setConfig] = React.useState<State>({ position: 0, prevPosition: 0 });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context

  const changeConfig = ({ position }: Omit<State, 'prevPosition'>) => {
    setConfig({ position, prevPosition: config.position });
  };

  const value = { state: config, changeConfig };
  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

function useProject() {
  const context = React.useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}

export { ProjectProvider, useProject };
