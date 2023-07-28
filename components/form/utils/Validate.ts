export const Validate = ({
    name,
    email,
    phone,
    message,
}: {
    name: string;
    email: string;
    phone: string;
    message: string;
}) => {
    const errors: { name?: string; email?: string; phone?: string; message?: string } = {};
    if (!name || name.trim() === "") {
        errors.name = "Dein Name ist erforderlich";
    }
    if (!email || email.trim() === "") {
        errors.email = "Eine Email ist erforderlich";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "Invalide Email Addresse";
    }
    if (!phone || phone.trim() === "") {
        errors.phone = "Eine Telefonnummer ist erforderlich";
    } else if (!/^(?:\+[\d-]+|0[\d-]+|\d{6,18})$/i.test(phone)) {
        errors.phone = "Die Telefonnummer ist zu kurz oder leer";
    }
    if (!message || message.trim() === "") {
        errors.message = "Eine Nachricht ist erforderlich";
    }
    return errors;
};