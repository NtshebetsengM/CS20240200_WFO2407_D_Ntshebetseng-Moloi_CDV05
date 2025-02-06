// Form submission logic
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("formBtn");
const confirmMessage = document.getElementById("confirmMessage");

form.addEventListener("submit", async(event) => {
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);

  // Validate form fields
  if (
    !formData.get("firstname").trim() ||
    !formData.get("surname").trim() ||
    !formData.get("email").trim()
  ) {
    confirmMessage.innerText = "Please fill in all fields.";
    confirmMessage.style.color = "red";
    return;
  }

  // Show loading state
  submitBtn.innerText = "Submitting...";
  submitBtn.style.backgroundColor = "#FFA500";
  submitBtn.style.color = "#FFFFFF";
  submitBtn.style.cursor = "wait";
  submitBtn.disabled = true;
  // Send form data to FormSubmit
  try {
    let response = await fetch("https://formsubmit.co/ntshebetsengmoloi@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      confirmMessage.innerText = "Thank you, I’ll be in touch.";
      confirmMessage.style.color = "green";

      // Reset form
      form.reset();

      // Update button state
      submitBtn.innerText = "SENT";
      submitBtn.style.backgroundColor = "#008050";
      submitBtn.style.color = "#FFFFFF";
      submitBtn.style.cursor = "not-allowed";
      submitBtn.disabled = true;
    } else {
      throw new Error("Form submission failed.");
    }
  } catch (error) {
    confirmMessage.innerText = "Something went wrong. Please try again.";
    confirmMessage.style.color = "red";

    // Reset button to allow retry
    submitBtn.innerText = "Submit";
    submitBtn.style.backgroundColor = "";
    submitBtn.style.cursor = "pointer";
    submitBtn.disabled = false;
  }
});