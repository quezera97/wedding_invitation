       /**
   * Get footer container
  */
       fetch('/dashboard/widget/header.html')
       .then(response => response.text())
       .then(content => {
           document.getElementById('header-container').innerHTML = content;
       });
   
     /**
      * Get navbar container
      */
     fetch('/dashboard/widget/navbar.html')
       .then(response => response.text())
       .then(content => {
           document.getElementById('navbar-container').innerHTML = content;
       });
   
     /**
      * Get header for social links container
     */
     fetch('/dashboard/widget/header-social-links.html')
       .then(response => response.text())
       .then(content => {
           document.getElementById('header-social-links-container').innerHTML = content;
       });
     /**
      * Get footer container
     */
     fetch('/dashboard/widget/footer.html')
       .then(response => response.text())
       .then(content => {
           document.getElementById('footer-container').innerHTML = content;
       });