document.addEventListener("scroll", () => {
    const container = document.querySelector(".mdiv2");
    const rightBox = document.querySelector(".md2");
    const leftBox = document.querySelector(".md1");
    // Check if the container is in the viewport
    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerTop < windowHeight - 120) { 
        rightBox.classList.add("active");
    leftBox.classList.add("active");

    }else{
        rightBox.classList.remove("active");
        leftBox.classList.remove("active");
    
    }
});

