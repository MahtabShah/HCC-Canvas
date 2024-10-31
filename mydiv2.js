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

    if (containerTop < windowHeight - 100) {
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

    
let impp = document.getElementsByClassName('imp-points')[0];
let c = document.getElementsByClassName('container')[0];
const ImpTop = impp.getBoundingClientRect().top;

if(ImpTop < windowHeight-30){
    impp.classList.add("active-baap");
    c.classList.add("active-baap");
    
}else{
    impp.classList.remove("active-baap");
    c.classList.remove("active-baap");

}


});








let menutn = document.querySelector('.menuBtn');
let menuAtag = document.querySelectorAll('.menuBtn a');
let menuBar = document.querySelector('.fa-bars');

let buttons = document.querySelectorAll('.nav-links > a');
let activebtn = buttons[0];
let cnt = 0;

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

    menutn.style.display = 'none';
    console.log("return");
    menuAtag.forEach(a=>{
        a.classList.remove("activbar");
    })

    cnt++;



}



let next = document.querySelector('.signLoginface');

// window.addEventListener('load', () => {

let butns = document.getElementsByClassName('login');

butns.forEach(BTN => {

    BTN.addEventListener('click', () => {
        document.getElementsByClassName('signIn')[0].style.display = 'flex';
        document.getElementsByClassName('name')[0].style.display = 'none';
        console.log("login");

        next.style.display = 'flex';
     
})

    })

let sButn = document.getElementsByClassName('signup');
sBTN.forEach(Btnn =>{
    
    Btnn.addEventListener('click', () => {
        document.getElementsByClassName('signIn')[0].style.display = 'flex';
        document.getElementsByClassName('name')[0].style.display = 'flex';
        console.log("signup");

        next.style.display = 'flex';

    })
})
// })


document.querySelector('.canceled').addEventListener('click' , ()=>{
        next.style.display = 'none';
        document.querySelector('.canceled').display = 'none';
            
})





menuBar.addEventListener('click' , ()=>{
    cnt++;

    if (cnt%2 == 0) {
    menutn.style.display = 'none';
    console.log("return");
    menuAtag.forEach(a=>{
        a.classList.remove("activbar");
    })

    return ;
        
    }
    
    menutn.style.display = 'flex';
    console.log("static");

    menuAtag.forEach(a=>{
        a.classList.add("activbar");
    })

    
})




buttons.forEach(button => {


    button.addEventListener('click', () => {
        if (activebtn) {
            activebtn.classList.remove('redish');
            activebtn = button;
            button.classList.add('redish');

        }
    })
});


function show(msg){
    alert("We are working on " + msg);
}




