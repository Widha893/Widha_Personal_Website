document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    // 🔲 Modal open/close functions
  window.openModal = function(id) {
    document.getElementById(id).style.display = "block";
  };

  window.closeModal = function(id) {
    document.getElementById(id).style.display = "none";
  };

  // 🕶️ Optional: close modal when clicking outside the modal content
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };
  });

  