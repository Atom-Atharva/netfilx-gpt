export const checkValidData = (email, password, name) => {
    // Regex for Email and Password Validation
    const isEmailValid =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );

    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            password
        );
    const isNameValid = name && /^[A-Za-z\\s]+$/.test(name);

    if (!isNameValid) return "Name is Not Valid";
    if (!isEmailValid) return "Email ID is Not Valid";
    if (!isPasswordValid) return "Password is Not Valid";

    return null;
};
