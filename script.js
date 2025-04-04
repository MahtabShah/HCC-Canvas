
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in"); // Select all elements with fade-in, move-right, and move-left

    function handleScroll() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible"); // Add visible class to start the animations
            }
        });
    }


    handleScroll(); // Initial check for elements already in view
});



window.addEventListener("scroll", function () {
    // Get the current scroll position

    // console.log(scrollPosition);

    let Dif = -40 + 0.2381 * document.documentElement.scrollTop;
    // const maxScroll = 1800; 
    const maxTop = 180;

    // Limit the scroll position to the range 0 - 700px
    const limitedScroll = Math.min(maxTop, Dif)
    // Calculate the new top position as a ratio of the scroll distance
    const newTop = (limitedScroll);

    // Apply the calculated top position to the element
    document.getElementById("container2").style.top = `${newTop}px`;
    document.getElementById("container3").style.top = `${300 - newTop}px`;
    document.getElementsByClassName("mobile-container")[0].style.marginTop = `${-12 + Math.min(10, document.documentElement.scrollTop * 0.0081)}%`;
});


document.getElementById('getStarted').addEventListener('click', () => {
    // document.getElementsByClassName('baapContainer')[0].style.display = 'none';
    // document.getElementById('afterGet').style.display = 'flex'

    window.location.href = "codeCanavaTry.html";

})