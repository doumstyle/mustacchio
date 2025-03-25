// Check that url and href values match to style the link of the current page
document.querySelectorAll(".nav-link").forEach((link) => {
  if (
    link.getAttribute("href") === window.location.pathname ||
    (window.location.pathname === "/" &&
      link.getAttribute("href") === "/index.html")
  ) {
    link.classList.add("active");
  }
});

// Form validation
const labels = document.querySelectorAll(".form-label");
labels.forEach((label) => {
  label.classList.add("hidden");
});

msgContainer = document.querySelector("#messageContainer");

// Create and style the name field error message
nameErr = document.createElement("div");
nameErr.classList.add("alert");
nameErr.classList.add("alert-danger");
nameErr.classList.add("p-3");
nameErr.classList.add("text-center");
nameErr.classList.add("mt-3");
nameErr.classList.add("mb-3");
nameErr.classList.add("w-50");
nameErr.classList.add("mx-auto");
nameErr.textContent = "Name must be at least 3 characters long";

// Create and style the email field error message
emailErr = document.createElement("div");
emailErr.classList.add("alert");
emailErr.classList.add("alert-danger");
emailErr.classList.add("p-3");
emailErr.classList.add("text-center");
emailErr.classList.add("mt-3");
emailErr.classList.add("mb-3");
emailErr.classList.add("w-50");
emailErr.classList.add("mx-auto");
emailErr.textContent = "Please enter a valid email address";

// Create and style the phone field error message
phoneErr = document.createElement("div");
phoneErr.classList.add("alert");
phoneErr.classList.add("alert-danger");
phoneErr.classList.add("p-3");
phoneErr.classList.add("text-center");
phoneErr.classList.add("mt-3");
phoneErr.classList.add("mb-3");
phoneErr.classList.add("w-50");
phoneErr.classList.add("mx-auto");
phoneErr.textContent = "Please enter a valid phone number";

// Create and style the message field error message
messageErr = document.createElement("div");
messageErr.classList.add("alert");
messageErr.classList.add("alert-danger");
messageErr.classList.add("p-3");
messageErr.classList.add("text-center");
messageErr.classList.add("mt-3");
messageErr.classList.add("mb-3");
messageErr.classList.add("w-50");
messageErr.classList.add("mx-auto");
messageErr.textContent =
  "Message must be at least 20 characters long and not contain only numbers";

let regexEmail;
let regexPhone;

// list all labels
const nameLabel = document.querySelector("#name-label");
const addressLabel = document.querySelector("#address-label");
const emailLabel = document.querySelector("#email-label");
const phoneLabel = document.querySelector("#phone-label");
const messageLabel = document.querySelector("#message-label");

// list all form fields
const nameInput = document.querySelector("#name");
const addressInput = document.querySelector("#address");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const textareaField = document.querySelector("#message");
const submitButton = document.querySelector("#submitBtn");

let errorMsg;
let successMsg;

// Check that the form is valid
function isFormValid() {
  return (
    nameInput.value.length >= 3 &&
    regexEmail.test(emailInput.value) &&
    regexPhone.test(phoneInput.value) &&
    textareaField.value.length >= 20 &&
    !/^\d+$/.test(textareaField.value)
  );
}

// Check that all fields are empty on submit
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Remove any existing error messages
  while (msgContainer.firstChild) {
    msgContainer.removeChild(msgContainer.firstChild);
  }

  // Validate the form and display a success message or an error message otherwise
  if (
    nameInput.value === "" ||
    addressInput.value === "" ||
    emailInput.value === "" ||
    phoneInput.value === "" ||
    textareaField.value === ""
  ) {
    errorMsg = document.createElement("div");
    errorMsg.classList.add("alert");
    errorMsg.classList.add("alert-danger");
    errorMsg.classList.add("p-3");
    errorMsg.classList.add("text-center");
    errorMsg.classList.add("mt-3");
    errorMsg.classList.add("mb-3");
    errorMsg.classList.add("w-50");
    errorMsg.classList.add("mx-auto");
    errorMsg.textContent = "Please fill in all fields";
    msgContainer.appendChild(errorMsg);
  } else if (isFormValid()) {
    labels.forEach((label) => {
      label.classList.remove("hidden");
      label.style.color = "rgba(11, 163, 156, 0.9)";
      label.style.fontWeight = "bold";
    });
    successMsg = document.createElement("div");
    successMsg.classList.add("alert");
    successMsg.classList.add("alert-success");
    successMsg.classList.add("p-3");
    successMsg.classList.add("text-center");
    successMsg.classList.add("mt-3");
    successMsg.classList.add("mb-3");
    successMsg.classList.add("w-50");
    successMsg.classList.add("mx-auto");
    successMsg.textContent = "Form submitted successfully";
    msgContainer.appendChild(successMsg);
  }
});

// Validate name field or display error message
nameInput.addEventListener("input", () => {
  if (nameInput.value.length < 3) {
    nameInput.classList.add("is-invalid");
    nameLabel.classList.remove("hidden");
    addressLabel.classList.remove("hidden");
    msgContainer.appendChild(nameErr);
  } else {
    nameInput.classList.remove("is-invalid");
    nameLabel.classList.add("hidden");
    addressLabel.classList.add("hidden");
    nameErr.remove();
  }
});

// Validate Email field or display error message
emailInput.addEventListener("input", () => {
  regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmail.test(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    emailLabel.classList.remove("hidden");
    addressLabel.classList.remove("hidden");
    msgContainer.appendChild(emailErr);
  } else {
    emailInput.classList.remove("is-invalid");
    emailLabel.classList.add("hidden");
    addressLabel.classList.add("hidden");
    emailErr.remove();
  }
});

// Validate Phone Number or display error message
phoneInput.addEventListener("input", () => {
  regexPhone = /^\d{10}$/;
  if (!regexPhone.test(phoneInput.value)) {
    phoneInput.classList.add("is-invalid");
    phoneLabel.classList.remove("hidden");
    addressLabel.classList.remove("hidden");
    msgContainer.appendChild(phoneErr);
  } else {
    phoneInput.classList.remove("is-invalid");
    phoneLabel.classList.add("hidden");
    addressLabel.classList.add("hidden");
    phoneErr.remove();
  }
});

// Validate Message field or display error message
textareaField.addEventListener("input", () => {
  // Check if the message contains only numbers
  const onlyNumbers = /^\d+$/.test(textareaField.value);
  if (textareaField.value.length < 20 || onlyNumbers) {
    textareaField.classList.add("is-invalid");
    addressLabel.classList.remove("hidden");
    messageLabel.classList.remove("hidden");
    msgContainer.appendChild(messageErr);
  } else {
    textareaField.classList.remove("is-invalid");
    addressLabel.classList.add("hidden");
    messageLabel.classList.add("hidden");
    messageErr.remove();
  }
});
