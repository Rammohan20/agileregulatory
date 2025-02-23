// form validation
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  // nav
  document.querySelectorAll('.nav-pills .nav-link').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent dropdown from closing
    });
});
// end

 //tab-hover-show
 document.addEventListener("DOMContentLoaded", function () {
  var tabTriggers = document.querySelectorAll('[data-bs-toggle="pill"]');

  tabTriggers.forEach(function (trigger) {
      // Activate tab content on hover
      trigger.addEventListener("mouseenter", function () {
          var tabTrigger = new bootstrap.Tab(trigger);
          tabTrigger.show();
      });

      // Ensure clicking on tab navigates to its href link
      trigger.addEventListener("click", function (event) {
          var link = trigger.getAttribute("href");
          if (link && link !== "#") {
              window.location.href = link; // Navigate to the URL
          }
      });
  });
});
// end
