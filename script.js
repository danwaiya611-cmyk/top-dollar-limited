/* =========================
   TOP DOLLAR LIMITED
   JAVASCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   FAQ ACCORDION
========================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        const icon =
            question.querySelector("span");


        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

            icon.textContent = "+";

        } else {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            icon.textContent = "−";

        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const request =
        document.getElementById("request").value;

    const message =
        document.getElementById("message").value;


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please complete the required fields.";

        return;

    }


    formMessage.textContent =
        "Thank you! Your request has been received.";


    /*
       This is currently a front-end form.

       Later we can connect it to:
       - Email
       - WhatsApp
       - Formspree
       - Firebase
       - A custom backend
    */


    console.log({

        name,
        email,
        request,
        message

    });


    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   SIMPLE SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.1
        }

    );


document.querySelectorAll(
    ".skill-card, .service, .portfolio-item, .mini-card"
).forEach(element => {

    observer.observe(element);

});