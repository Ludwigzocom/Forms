const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const errorText = document.querySelector("#error");

const submissions = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (nameInput.value === "") {
    errorText.textContent = "Please enter a name";
    return;
  }

  if (nameInput.value.length < 3) {
    errorText.textContent = "Name must be atleast 3 characters long";
    return;
  }

  if (emailInput.value === "") {
    errorText.textContent = "Please enter your email";
    return;
  }

  if (!emailInput.value.includes("@")) {
    errorText.textContent = "Email must contain @";
    return;
  }

  if (messageInput.value === "") {
    errorText.textContent = "Please enter a message";
    return;
  }

  const newSubmission = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  submissions.push(newSubmission);
  console.log(submissions);

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  errorText.textContent = "";
});
