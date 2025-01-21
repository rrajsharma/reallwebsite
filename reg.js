function validateForm() {
  
  const samagraId = document.getElementById("samagra-id").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("error-message");
  const samagraRegex = /^[0-9]{9}$/;

  // Validate Samagra ID
  if (!samagraRegex.test(samagraId)) {
    errorMessage.textContent = "Samagra ID must be exactly 9 digits.";
    errorMessage.style.display = "block";
    return false;  
  }

  // Validate password match
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";
    errorMessage.style.display = "block";
    return false;
  }

 
  errorMessage.style.display = "none";
  return true;  
}
