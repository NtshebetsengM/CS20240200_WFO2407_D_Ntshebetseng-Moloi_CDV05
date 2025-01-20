import { addFormData } from "./firebase.js";

// Form submission logic
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("formBtn");

form.addEventListener('submit', async(event) => {
  event.preventDefault();

  // Get form data
  const firstname = document.getElementById('firstname').value.trim();
  const email = document.getElementById('email').value.trim();
  const surname = document.getElementById('surname').value.trim();

  // Validate form fields
  if (!firstname || !email || !surname) {
    document.getElementById('confirmMessage').innerText = 'Please fill in all fields.';
    document.getElementById('confirmMessage').style.color = 'red';
    return;
  }

  // Add form data to Firestore
  try {
    await addFormData(firstname, email, surname);

    document.getElementById('confirmMessage').innerText = 'Thank you, I’ll be in touch.';
    document.getElementById('confirmMessage').style.color = 'green';
    form.reset();
    
    // Update button to indicate submission success
    submitBtn.innerText = "Submitted";
    submitBtn.style.backgroundColor = "#bcbcbc";
    submitBtn.style.cursor = "not-allowed";
    submitBtn.disabled = true;
  } catch (error) {
    console.error("Error submitting form data: ", error);
  }
});
