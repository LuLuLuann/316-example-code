const form = document.getElementById("form");
const name = form.elements["name"];
const email = form.elements["email"];
const zip = form.elements["zip"];
const country = form.elements["country"];
const password = form.elements["password"];

form.addEventListener("submit", validate);

// The big validation function.
// While this may seem like a lot of functions we
// need to build, most will be very simple!
function validate(evt) {
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }

  const zipVal = validateZip();
  if (zipVal === false) {
    evt.returnValue = false;
    return false;
  }

  const countryVal = validateCountry();
  if (countryVal === false) {
    evt.returnValue = false;
    return false;
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    evt.returnValue = false;
    return false;
  }

  alert(`Name: ${nameVal}
Email: ${emailVal}
Country: ${countryVal}
Zip Code: ${zipVal}
Password: ...that's a secret.`);

  return true;
}

// Simple email validation.
function validateEmail() {
  let emailVal = email.value;

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol, which must not be at the beginning of the email."
    );
    email.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    return false;
  }

  return emailVal;
}
