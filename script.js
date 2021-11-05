const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function () {
        if (this.childNodes[1].classList.contains("uil-plus")) {
            this.childNodes[1].classList.remove("uil-plus");
            this.childNodes[1].classList.add("uil-times");
        } else {
            this.childNodes[1].classList.remove("uil-times");
            this.childNodes[1].classList.add("uil-plus");
        }

        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

