// Initialize AOS
AOS.init({
  duration: 1200,
  once: true, // Animation will only happen once
});

// Toggle visibility on section click
function toggleVisibility(id) {
  const element = document.getElementById(id);
  element.classList.toggle('visible-section');
}

// Function to hide the contact info after 12 seconds
function autoHideContactInfo(contactElement) {
  setTimeout(function() {
    contactElement.style.visibility = "hidden";
    contactElement.style.opacity = "0";
  }, 12000); // 12 seconds
}

// Toggle phone number visibility on icon click for mobile users
document.getElementById("phone-icon").addEventListener("click", function() {
  const phoneNumber = document.getElementById("phone-number");
  phoneNumber.style.visibility = (phoneNumber.style.visibility === "visible") ? "hidden" : "visible";
  phoneNumber.style.opacity = (phoneNumber.style.opacity === "1") ? "0" : "1";
  
  if (phoneNumber.style.visibility === "visible") {
    autoHideContactInfo(phoneNumber); // Automatically hide after 12 seconds
  }
});

// Toggle email address visibility on icon click for mobile users
document.getElementById("email-icon").addEventListener("click", function() {
  const emailAddress = document.getElementById("email-address");
  emailAddress.style.visibility = (emailAddress.style.visibility === "visible") ? "hidden" : "visible";
  emailAddress.style.opacity = (emailAddress.style.opacity === "1") ? "0" : "1";
  
  if (emailAddress.style.visibility === "visible") {
    autoHideContactInfo(emailAddress); // Automatically hide after 12 seconds
  }
});
