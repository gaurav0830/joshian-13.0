ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.hero h1,.heading,.card-item',{origin:'top'});
ScrollReveal().reveal('.home-img,.myskill-container,.portfolio-box,.contact form, .team-card-item',{origin:'bottom'});
ScrollReveal().reveal(' .about ,.about-img,.box2 .card',{origin:'left'});
ScrollReveal().reveal('.logo h1,.about p,.about-content h2,.about-content h3,.about-content p,.title',{origin:'right'});

const tl = gsap.timeline({ paused: true });

tl.to(".panels .panel:first-child, .panels .panel:last-child", {
    scaleY: 1,
    duration: 1,
})
    .to(
        ".panels .panel:not(:first-child):not(:last-child)",
        { scaleY: 1 },
        "-=0.5"
    )
    .to(".panels .panel", {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05,
    })
    .to(".panels", {
        clipPath: "circle(0%)",
        skewX: 0,
        duration: 1,
    })
    .to(
        ".page-main",
        {
            clipPath: "circle(100%)",
            duration: 1,
        },
        "-=0.3"
    );

//console.log(tl.duration());

window.addEventListener("load", function () {
    tl.play();
});


var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
  // This can be changed - experiment
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.15) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)


