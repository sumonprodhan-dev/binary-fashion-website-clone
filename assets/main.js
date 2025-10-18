/*
 * ┌─────────────────────────────────────────────┐
 * │  Author : Sumon Prodhan                     │
 * │  Role   : Full Stack Developer              │
 * │  Email  : sumonpro.dev@gmail.com            │
 * │  Page   : Page Loader code                  │
 * └─────────────────────────────────────────────┘
 */
window.addEventListener("load", function () {
      const loader = document.getElementById("loader");
      loader.classList.add("hidden");
    });
// =======================================================================


/*
 * ┌─────────────────────────────────────────────┐
 * │  Author : Sumon Prodhan                     │
 * │  Role   : Full Stack Developer              │
 * │  Email  : sumonpro.dev@gmail.com            │
 * │  Page   : Header Page code                  │
 * └─────────────────────────────────────────────┘
 */
// header fetch
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    const header = document.querySelector('.header');
    if (header) header.innerHTML = data;
  });
// =======================================================================


/*
 * ┌─────────────────────────────────────────────┐
 * │  Author : Sumon Prodhan                     │
 * │  Role   : Full Stack Developer              │
 * │  Email  : sumonpro.dev@gmail.com            │
 * │  Page   : Footer Page code                  │
 * └─────────────────────────────────────────────┘
 */
// footer fetch
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    const footer = document.querySelector('.footer');
    if (footer) footer.innerHTML = data;
    AOS.refreshHard();
  });
// =======================================================================


/*
 * ┌─────────────────────────────────────────────┐
 * │  Author : Sumon Prodhan                     │
 * │  Role   : Full Stack Developer              │
 * │  Email  : sumonpro.dev@gmail.com            │
 * │  Page   : Navbar code                       │
 * └─────────────────────────────────────────────┘
 */
// navbar fixed
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  });
}
// =======================================================================


/*
 * ┌─────────────────────────────────────────────┐
 * │  Author : Sumon Prodhan                     │
 * │  Role   : Full Stack Developer              │
 * │  Email  : sumonpro.dev@gmail.com            │
 * │  Page   : Scroll to top button code         │
 * └─────────────────────────────────────────────┘
 */
// scroll to top
const scrollBtn = document.getElementById("scroll-top");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
// =======================================================================


/*
 * ┌─────────────────────────────────────────────┐
 * │  Author : Sumon Prodhan                     │
 * │  Role   : Full Stack Developer              │
 * │  Email  : sumonpro.dev@gmail.com            │
 * │  Page   : About page counter code           │
 * └─────────────────────────────────────────────┘
 */
// about page achievements counter
const counters = document.querySelectorAll('.achievements-card h1');
if (counters.length > 0) {
  let counted = false;
  const updateCounter = (counter, target, isK) => {
    let count = 0;
    const speed = target / 200;
    const increment = () => {
      if (count < target) {
        count += Math.ceil(target / 100);
        if (count > target) count = target;
        counter.textContent = isK ? count + "K+" : count + "+";
        setTimeout(increment, speed);
      }
    };
    increment();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counters.forEach(counter => {
          let text = counter.textContent.trim();
          let isK = text.includes("K");
          let target = parseInt(text.replace(/\D/g, ""));
          updateCounter(counter, target, isK);
        });
        counted = true;
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}
// =======================================================================


/*
 * ┌─────────────────────────────────────────────┐
 * │  Author : Sumon Prodhan                     │
 * │  Role   : Full Stack Developer              │
 * │  Email  : sumonpro.dev@gmail.com            │
 * │  Page   : aos js animation code             │
 * └─────────────────────────────────────────────┘
 */
// aos js
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true
  });
}
// =======================================================================
