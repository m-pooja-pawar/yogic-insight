export function validateMobileNumber(mobileNumber: string): boolean {
  if (mobileNumber === null) {
    return false;
  }
  const mobileNumberRegex = /^\d{10}$/; // Assuming a 10-digit Mobile number
  return mobileNumberRegex.test(mobileNumber);
}

export function validateEmail(email: string): boolean {
  if (email === null) {
    return false;
  }
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  return emailRegex.test(email);
}

export function validateOtp(otp: string): boolean {
  if (otp === null) {
    return false;
  }
  const otpRegex = /^\d{6}$/; // Assuming a 6-digit otp
  return otpRegex.test(otp);
}

export function validatePinCode(pinCode: string): boolean {
  if (pinCode === null) {
    return false;
  }
  const otpRegex = /^\d{6}$/; // Assuming a 6-digit pin code
  return otpRegex.test(pinCode);
}
