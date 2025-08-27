"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
};

addEventOnElem(window, "scroll", activeElem);

/**
 * contact form validation
 */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm
            .querySelector('input[name="name"]')
            .value.trim();
        const email = contactForm
            .querySelector('input[name="email"]')
            .value.trim();
        const childAge = contactForm
            .querySelector('input[name="child_age"]')
            .value.trim();
        const courseInterest = contactForm.querySelector(
            'select[name="course_interest"]'
        ).value;

        // Basic validation
        if (!name) {
            alert("Please enter your name");
            return;
        }

        if (!email || !isValidEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (!childAge || childAge < 6 || childAge > 18) {
            alert("Please enter a valid age between 6-18");
            return;
        }

        if (!courseInterest) {
            alert("Please select a course you're interested in");
            return;
        }

        // If validation passes, show success message
        alert(
            "Thank you! We'll contact you soon to schedule your free trial class."
        );
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Google Analytics initialization
 */
function initGoogleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "GA_MEASUREMENT_ID");
}

/**
 * EmailJS contact form functionality
 */
function initEmailJS() {
    // Initialize EmailJS
    emailjs.init("ykE6MPiOGmJw2EFzy"); // Your actual EmailJS public key

    // Override any default alert functions to prevent browser alerts
    window.alert = function () {};

    // Form submission handler
    const emailForm = document.getElementById("contact-form");
    if (emailForm) {
        emailForm.addEventListener("submit", function (event) {
            // Prevent default form submission completely
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            // Validate phone number
            const phoneInput = document.querySelector('input[name="phone"]');
            const phoneValue = phoneInput.value.replace(/[^0-9]/g, "");

            if (phoneValue.length !== 10) {
                showAlert(
                    "Please enter a valid 10-digit phone number.",
                    "error"
                );
                return false;
            }

            const submitBtn = document.getElementById("submit-btn");
            const originalText = submitBtn.querySelector(".span").textContent;

            // Show loading state
            submitBtn.querySelector(".span").textContent = "Sending...";
            submitBtn.disabled = true;

            // Get form data
            const formData = new FormData(this);
            const templateParams = {
                name: formData.get("name"),
                Email: formData.get("email"),
                Phone: formData.get("phone"),
                child_age: formData.get("child_age"),
                course: formData.get("course_interest"),
                message: formData.get("message"),
                to_email: "codingbuds7@gmail.com",
            };

            // Send email using EmailJS
            emailjs
                .send("service_xfs65vr", "template_r7wsth7", templateParams)
                .then(
                    function (response) {
                        // Success
                        console.log("SUCCESS!", response.status, response.text);

                        // Show success alert
                        showAlert(
                            "Thank you! Your query has been received. We will contact you shortly.",
                            "success"
                        );

                        // Reset form
                        document.getElementById("contact-form").reset();
                    },
                    function (error) {
                        // Error
                        console.log("FAILED...", error);
                        showAlert(
                            "Sorry, there was an error sending your message. Please try again or contact us directly.",
                            "error"
                        );
                    }
                )
                .finally(function () {
                    // Reset button state
                    submitBtn.querySelector(".span").textContent = originalText;
                    submitBtn.disabled = false;
                });

            // Return false to ensure no default submission
            return false;
        });
    }
}

/**
 * Custom alert function
 */
function showAlert(message, type) {
    // Create alert element
    const alert = document.createElement("div");
    alert.className = `custom-alert custom-alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <span class="alert-message">${message}</span>
            <button class="alert-close">&times;</button>
        </div>
    `;

    // Add to page
    document.body.appendChild(alert);

    // Show alert
    setTimeout(() => alert.classList.add("show"), 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        alert.classList.remove("show");
        setTimeout(() => alert.remove(), 300);
    }, 5000);

    // Close button functionality
    alert.querySelector(".alert-close").addEventListener("click", () => {
        alert.classList.remove("show");
        setTimeout(() => alert.remove(), 300);
    });
}

/**
 * Newsletter form validation
 */
function initNewsletterForm() {
    const newsletterForm = document.querySelector(".newsletter-form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const emailInput = newsletterForm.querySelector(
                'input[name="email_address"]'
            );
            const emailValue = emailInput.value.trim();

            // Validate email
            if (!emailValue) {
                showAlert("Please enter your email address", "error");
                return;
            }

            if (!isValidEmail(emailValue)) {
                showAlert("Please enter a valid email address", "error");
                return;
            }

            // Show success message
            showAlert(
                "Thank you for subscribing! We'll keep you updated with coding tips and new courses.",
                "success"
            );

            // Reset form
            newsletterForm.reset();
        });
    }
}

/**
 * Stats counter animation
 */
function initStatsCounter() {
    const statsCards = document.querySelectorAll(".stats-card");
    let hasAnimated = false;

    // Function to animate counting
    function animateCount(element, start, end, duration) {
        let startTimestamp = null;

        // Add counting class for visual effects
        element.classList.add("counting");

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
            );

            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOutCubic);

            element.textContent = current + (end === 100 ? "%" : "+");

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end + (end === 100 ? "%" : "+");
                // Remove counting class when animation is complete
                element.classList.remove("counting");
            }
        };
        window.requestAnimationFrame(step);
    }

    // Function to extract number from text
    function extractNumber(text) {
        return parseInt(text.replace(/[^0-9]/g, ""));
    }

    // Intersection Observer to trigger animation when section is visible
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;

                    statsCards.forEach((card, index) => {
                        const titleElement = card.querySelector(".card-title");
                        const targetNumber = extractNumber(
                            titleElement.textContent
                        );

                        // Start animation with a slight delay for each card
                        setTimeout(() => {
                            animateCount(titleElement, 1, targetNumber, 2000);
                        }, index * 200);
                    });
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the section is visible
            rootMargin: "0px 0px -100px 0px", // Start animation a bit before the section is fully visible
        }
    );

    // Observe the stats section
    const statsSection = document.querySelector(".stats");
    if (statsSection) {
        observer.observe(statsSection);
    }
}

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
    // Remove .no-js from <html> if JS is enabled
    document.documentElement.classList.remove("no-js");
    // Initialize Google Analytics if the script is loaded
    if (window.gtag) {
        initGoogleAnalytics();
    }

    // Initialize EmailJS functionality if EmailJS is loaded
    if (window.emailjs) {
        initEmailJS();
    }

    // Initialize newsletter form validation
    initNewsletterForm();

    // Initialize FAQ functionality
    initFAQ();

    // Initialize stats counter animation
    initStatsCounter();

    // Initialize smooth scroll and section fade-in animations
    initSmoothScrollAndSectionAnimations();
});

/**
 * FAQ accordion functionality
 */
function initFAQ() {
    const faqCards = document.querySelectorAll("[data-faq]");

    faqCards.forEach((card) => {
        const btn = card.querySelector("[data-faq-btn]");
        const content = card.querySelector("[data-faq-content]");

        btn.addEventListener("click", function () {
            // Close all other FAQ cards
            faqCards.forEach((otherCard) => {
                if (
                    otherCard !== card &&
                    otherCard.classList.contains("active")
                ) {
                    otherCard.classList.remove("active");
                }
            });

            // Toggle current card
            card.classList.toggle("active");
        });
    });
}

/**
 * Smooth scroll and section fade-in/slide-in animation
 */
function initSmoothScrollAndSectionAnimations() {
    // Add .fade-in-section to all .section elements for animation
    document.querySelectorAll(".section").forEach((section) => {
        section.classList.add("fade-in-section");
    });

    // Intersection Observer for fade-in/slide-in
    const observer = new window.IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    // Only add fade-in-up to grid-list children that are visible elements (not script, style, etc.)
    document
        .querySelectorAll(".grid-list > li, .grid-list > div")
        .forEach((item) => {
            item.classList.add("fade-in-up");
            observer.observe(item);
        });

    // Also observe fade-in-section elements
    document.querySelectorAll(".fade-in-section").forEach((el) => {
        observer.observe(el);
    });

    // Enhance anchor link smooth scroll for browsers that need JS
    document.documentElement.classList.add("smooth-scroll");
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").slice(1);
            if (targetId && document.getElementById(targetId)) {
                e.preventDefault();
                const target = document.getElementById(targetId);
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                // Optionally update URL hash
                history.pushState(null, "", "#" + targetId);
            }
        });
    });
}
