document.addEventListener("scroll", () => {
    const container = document.querySelector(".mdiv2");
    const baapcont = document.querySelector(".baapContainer");
    const rightBox = document.querySelector(".md2");
    const leftBox = document.querySelector(".md1");
    const Points = document.querySelector(".imp-points");
    // Check if the container is in the viewport baapContainer
    const containerTop = container.getBoundingClientRect().top;
    const bapcontTop = baapcont.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerTop < windowHeight - 150) {
        rightBox.classList.add("active");
        leftBox.classList.add("active");

    } else {
        rightBox.classList.remove("active");
        leftBox.classList.remove("active");


    }

    if (bapcontTop < windowHeight - 100) {
        Points.classList.add("activee");

    } else {
        Points.classList.remove("activee");

    }



});



function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    // const mydiv3 = document.querySelector('.mdiv3');
    sections.forEach(section => {
        section.classList.remove('activ'); // Corrected 'activ' to 'active'
    });

    // Show the clicked section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('activ'); // Corrected 'activ' to 'active'

    // Scroll to the section smoothly
    const height = selectedSection.getBoundingClientRect().top + window.scrollY; // Calculate position
    window.scrollTo({ top: height - 140, behavior: 'smooth' }); // Scroll to the position





}


let buttons = document.querySelectorAll('.nav-links > a');
let activebtn = buttons[0];

buttons.forEach(button => {


    button.addEventListener('click', () => {
        if (activebtn) {
            activebtn.classList.remove('redish');
            activebtn = button;
            button.classList.add('redish');

        }

    })
});