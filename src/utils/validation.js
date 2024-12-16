export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 8; // Minimum password length
  };
  
  export const validateRequired = (value) => {
    return value.trim() !== "";
  };
  
  export const validateMatch = (value1, value2) => {
    return value1 === value2; // For confirm password validation
  };
  