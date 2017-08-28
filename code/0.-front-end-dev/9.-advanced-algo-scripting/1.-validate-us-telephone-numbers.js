function telephoneCheck(phoneNumber) {
  if (phoneNumber == phoneNumber.match(/1? ?\d{10}/)) {
    return true; // for 5555555555
  } else if (phoneNumber == phoneNumber.match(/1? ?\d{3}\s\d{3}\s\d{4}/)) {
    return true; // for 555 555 5555
  } else if (phoneNumber == phoneNumber.match(/1? ?\(\d{3}\)\s\d{3}\-\d{4}/)) {
    return true; // for (555) 555-5555
  } else if (phoneNumber == phoneNumber.match(/1? ?\(\d{3}\)\d{3}\-\d{4}/)) {
    return true; // for (555)555-5555
  } else if (phoneNumber == phoneNumber.match(/1? ?\d{3}-\d{3}-\d{4}/)) {
    return true; // for 555-555-5555
  }
  return false; // reject all other number formats
}