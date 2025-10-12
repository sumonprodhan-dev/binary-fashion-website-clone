// =======================================================================
// header fetch
fetch('header.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('.header').innerHTML = data;
    });
// =======================================================================


// =======================================================================
// footer fetch
fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.querySelector('.footer').innerHTML = data;
    });
// =======================================================================


// =======================================================================
// navbar fixed
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});
// =======================================================================


// =======================================================================
// scroll to top
const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// =======================================================================


// =======================================================================
// wow js
wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    }
)
wow.init();
// =======================================================================


// =======================================================================
// about page our achievements section counter
const counters = document.querySelectorAll('.achievements-card h1');
let counted = false;

const updateCounter = (counter, target, isK) => {
    let count = 0;
    const speed = 10;
    const increment = () => {
        if (count < target) {
            count += Math.ceil(target / 200);
            if (count > target) count = target;

            counter.textContent = isK ? count + "K+" : count + "+";

            setTimeout(increment, speed);
        }
    }
    increment();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
            counters.forEach(counter => {
                let text = counter.textContent.trim();
                let isK = text.includes("K");
                let target = parseInt(text.replace(/\D/g, ''));

                updateCounter(counter, target, isK);
            });
            counted = true;
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
// =======================================================================