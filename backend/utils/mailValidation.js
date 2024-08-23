export function validateEmailFormat(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailRegex.test(email)) {
    return { valid: true, message: "Email is valid." };
  } else {
    return { valid: false, message: "Invalid email format." };
  }
}
