/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = menu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* =====================================================
   FECHAR MENU AO CLICAR
===================================================== */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (menu) {
            menu.classList.remove("open");
        }

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});


/* =====================================================
   FAQ
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");


        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const answer =
                otherItem.querySelector(".faq-answer");

            if (answer) {
                answer.style.maxHeight = null;
            }

        });


        if (!isActive) {

            item.classList.add("active");

            const answer =
                item.querySelector(".faq-answer");

            if (answer) {

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        }

    });

});


/* =====================================================
   ANIMAÇÕES
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".service-card, " +
        ".process-item, " +
        ".project, " +
        ".delivery-item"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach(element => {

        element.classList.add(
            "animate-on-scroll"
        );

        observer.observe(element);

    });

} else {

    animatedElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =====================================================
   ANO DO FOOTER
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}