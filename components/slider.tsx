import Image from 'next/image';

export const Slider = () => {
  const before =
    "before:content-[''] before:absolute before:w-[200px] before:h-[100px] before:z-[2] before:left-0 before:top-0 before:bg-gradient-slider";
  const after =
    "after:content-[''] after:absolute after:w-[200px] after:h-[100px] after:z-[2] after:right-0 after:top-0 after:transform after:rotate-180 after:bg-gradient-slider";
  return (
    <div
      className={`bg-white shadow-[0 10px 20px -5px rgba(0, 0, 0, 0.125)] h-[100px] m-auto overflow-hidden relative w-full ${before} ${after}`}
    >
      <div className='flex w-full animate-slide-scroll'>
        <div className='h-[100px] w-[250px]'>
          <Image src='/1.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/2.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/3.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/4.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/5.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/6.png' className='max-w-none' height='100' width='250' alt='' />
        </div>

        <div className='h-[100px] w-[250px]'>
          <Image src='/1.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/2.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/3.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/4.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/5.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
        <div className='h-[100px] w-[250px]'>
          <Image src='/6.png' className='max-w-none' height='100' width='250' alt='' />
        </div>
      </div>
    </div>
  );
};
