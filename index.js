document.addEventListener('DOMContentLoaded', function() {
    const clientsContainer = document.querySelector('.clients');
    const clientboxes = document.querySelectorAll('.clientbox');
    const circleContainer = document.getElementById('circle-container');

    // Show only one clientbox at a time when screen width is 950px or less
    if (window.innerWidth <= 950) {
      clientboxes.forEach(function(box, index) {
        box.style.display = 'block';

        // Create a circle for each clientbox
        const circle = document.createElement('div');
        circle.classList.add('circle');
        if (index === 0) {
          circle.classList.add('active');
        }
        circle.addEventListener('click', function() {
          clientsContainer.scrollTo({
            left: index * box.offsetWidth,
            behavior: 'smooth'
          });
        });
        circleContainer.appendChild(circle);
      });

      // Add scroll event listener to update the active circle
      clientsContainer.addEventListener('scroll', function() {
        const scrollPosition = clientsContainer.scrollLeft;
        const activeIndex = Math.floor(scrollPosition / clientboxes[0].offsetWidth);

        const circles = document.querySelectorAll('.circle');
        circles.forEach(function(circle, index) {
          if (index === activeIndex) {
            circle.classList.add('active');
          } else {
            circle.classList.remove('active');
          }
        });
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    const menuIcon = document.querySelector('.menu');
    const navMenu = document.querySelector('ul');

    // Toggle the visibility of the ul when the menu icon is clicked
    menuIcon.addEventListener('click', function () {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
            menuIcon.src = 'images/icon-hamburger.svg'; // Change to hamburger icon
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column'; // Set flex direction to column
            menuIcon.src = 'images/icon-close.svg'; // Change to close icon
        }
    });
});
