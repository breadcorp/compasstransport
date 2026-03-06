/*
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const sidebar = document.getElementById("sidebar");

    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    images.forEach((image, index) => {
        image.addEventListener("dragstart", (e) => e.preventDefault()); // Prevent dragging images
    });

    function nextSlide() {
        const slideWidth = images[0].offsetWidth;

        if (currentTranslate <= -slideWidth * (images.length - 1)) {
            currentTranslate = 0;
            prevTranslate = 0;
        } else {
            prevTranslate = currentTranslate;
            currentTranslate -= slideWidth;
        }

        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }

    setInterval(nextSlide, 3000);
*/
    // Hamburger menu functionality
    function openBurger() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    
    function openSidebar() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    };
    