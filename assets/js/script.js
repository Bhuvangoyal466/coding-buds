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
 * contact form validation - REMOVED to prevent conflicts with EmailJS handler
 * The EmailJS handler in initEmailJS() now handles all form validation and submission
 */

// Old contact form handler removed to prevent conflicts

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
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            console.log("Form submission started");

            // All your phone validation logic remains untouched
            // ...
            // (keeping your phone validation code as is)

            // Validate hCaptcha
            const hcaptchaResponse = document.querySelector(
                "[name=h-captcha-response]"
            )?.value;
            if (!hcaptchaResponse) {
                showAlert("Please complete the captcha verification.", "error");
                return false;
            }

            const submitBtn = document.getElementById("submit-btn");
            const originalText = submitBtn.querySelector(".span").textContent;

            // Show loading state
            submitBtn.querySelector(".span").textContent = "Sending...";
            submitBtn.disabled = true;

            const formData = new FormData(this);
            const emailCountryCode = selectedCountry
                ? selectedCountry.code
                : "+91";
            const phoneRaw = formData.get("phone") || "";
            const fullPhone = emailCountryCode + " " + phoneRaw;

            const templateParams = {
                name: formData.get("name"),
                Email: formData.get("email"),
                Phone: fullPhone,
                country_code: emailCountryCode,
                child_age: formData.get("child_age"),
                course: formData.get("course_interest"),
                message: formData.get("message"),
                to_email: "codingbuds7@gmail.com",
            };

            // Step 1: Verify captcha with backend
            fetch("/api/verify-captcha", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ hcaptcha_token: hcaptchaResponse }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        console.log(
                            "✅ Captcha verified, now sending email..."
                        );

                        // Step 2: Send email with EmailJS (frontend)
                        emailjs
                            .send(
                                "YOUR_SERVICE_ID", // replace with EmailJS service ID
                                "YOUR_TEMPLATE_ID", // replace with EmailJS template ID
                                templateParams,
                                "YOUR_PUBLIC_KEY" // replace with EmailJS Public Key
                            )
                            .then(() => {
                                showAlert(
                                    "Thank you! Your query has been received. We will contact you shortly.",
                                    "success"
                                );
                                document.getElementById("contact-form").reset();
                                if (typeof hcaptcha !== "undefined") {
                                    hcaptcha.reset();
                                }
                            })
                            .catch((err) => {
                                console.error("EmailJS error:", err);
                                showAlert(
                                    "Email sending failed. Please try again later.",
                                    "error"
                                );
                            });
                    } else {
                        showAlert(
                            "Captcha verification failed. Please try again.",
                            "error"
                        );
                    }
                })
                .catch((err) => {
                    console.error("Captcha check error:", err);
                    showAlert(
                        "Something went wrong. Please try again later.",
                        "error"
                    );
                })
                .finally(() => {
                    submitBtn.querySelector(".span").textContent = originalText;
                    submitBtn.disabled = false;
                });

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

/**
 * Country Code Dropdown Functionality
 */

// Country data with names, codes, and ISO codes for flags
const countries = [
    { name: "Afghanistan", code: "+93", iso: "af" },
    { name: "Albania", code: "+355", iso: "al" },
    { name: "Algeria", code: "+213", iso: "dz" },
    { name: "American Samoa", code: "+1-684", iso: "as" },
    { name: "Andorra", code: "+376", iso: "ad" },
    { name: "Angola", code: "+244", iso: "ao" },
    { name: "Anguilla", code: "+1-264", iso: "ai" },
    { name: "Antarctica", code: "+672", iso: "aq" },
    { name: "Antigua and Barbuda", code: "+1-268", iso: "ag" },
    { name: "Argentina", code: "+54", iso: "ar" },
    { name: "Armenia", code: "+374", iso: "am" },
    { name: "Aruba", code: "+297", iso: "aw" },
    { name: "Australia", code: "+61", iso: "au" },
    { name: "Austria", code: "+43", iso: "at" },
    { name: "Azerbaijan", code: "+994", iso: "az" },
    { name: "Bahamas", code: "+1-242", iso: "bs" },
    { name: "Bahrain", code: "+973", iso: "bh" },
    { name: "Bangladesh", code: "+880", iso: "bd" },
    { name: "Barbados", code: "+1-246", iso: "bb" },
    { name: "Belarus", code: "+375", iso: "by" },
    { name: "Belgium", code: "+32", iso: "be" },
    { name: "Belize", code: "+501", iso: "bz" },
    { name: "Benin", code: "+229", iso: "bj" },
    { name: "Bermuda", code: "+1-441", iso: "bm" },
    { name: "Bhutan", code: "+975", iso: "bt" },
    { name: "Bolivia", code: "+591", iso: "bo" },
    { name: "Bosnia and Herzegovina", code: "+387", iso: "ba" },
    { name: "Botswana", code: "+267", iso: "bw" },
    { name: "Brazil", code: "+55", iso: "br" },
    { name: "British Virgin Islands", code: "+1-284", iso: "vg" },
    { name: "Brunei", code: "+673", iso: "bn" },
    { name: "Bulgaria", code: "+359", iso: "bg" },
    { name: "Burkina Faso", code: "+226", iso: "bf" },
    { name: "Burundi", code: "+257", iso: "bi" },
    { name: "Cambodia", code: "+855", iso: "kh" },
    { name: "Cameroon", code: "+237", iso: "cm" },
    { name: "Canada", code: "+1", iso: "ca" },
    { name: "Cape Verde", code: "+238", iso: "cv" },
    { name: "Cayman Islands", code: "+1-345", iso: "ky" },
    { name: "Central African Republic", code: "+236", iso: "cf" },
    { name: "Chad", code: "+235", iso: "td" },
    { name: "Chile", code: "+56", iso: "cl" },
    { name: "China", code: "+86", iso: "cn" },
    { name: "Christmas Island", code: "+61", iso: "cx" },
    { name: "Cocos Islands", code: "+61", iso: "cc" },
    { name: "Colombia", code: "+57", iso: "co" },
    { name: "Comoros", code: "+269", iso: "km" },
    { name: "Cook Islands", code: "+682", iso: "ck" },
    { name: "Costa Rica", code: "+506", iso: "cr" },
    { name: "Croatia", code: "+385", iso: "hr" },
    { name: "Cuba", code: "+53", iso: "cu" },
    { name: "Curacao", code: "+599", iso: "cw" },
    { name: "Cyprus", code: "+357", iso: "cy" },
    { name: "Czech Republic", code: "+420", iso: "cz" },
    { name: "Democratic Republic of the Congo", code: "+243", iso: "cd" },
    { name: "Denmark", code: "+45", iso: "dk" },
    { name: "Djibouti", code: "+253", iso: "dj" },
    { name: "Dominica", code: "+1-767", iso: "dm" },
    { name: "Dominican Republic", code: "+1-809", iso: "do" },
    { name: "East Timor", code: "+670", iso: "tl" },
    { name: "Ecuador", code: "+593", iso: "ec" },
    { name: "Egypt", code: "+20", iso: "eg" },
    { name: "El Salvador", code: "+503", iso: "sv" },
    { name: "Equatorial Guinea", code: "+240", iso: "gq" },
    { name: "Eritrea", code: "+291", iso: "er" },
    { name: "Estonia", code: "+372", iso: "ee" },
    { name: "Ethiopia", code: "+251", iso: "et" },
    { name: "Falkland Islands", code: "+500", iso: "fk" },
    { name: "Faroe Islands", code: "+298", iso: "fo" },
    { name: "Fiji", code: "+679", iso: "fj" },
    { name: "Finland", code: "+358", iso: "fi" },
    { name: "France", code: "+33", iso: "fr" },
    { name: "French Polynesia", code: "+689", iso: "pf" },
    { name: "Gabon", code: "+241", iso: "ga" },
    { name: "Gambia", code: "+220", iso: "gm" },
    { name: "Georgia", code: "+995", iso: "ge" },
    { name: "Germany", code: "+49", iso: "de" },
    { name: "Ghana", code: "+233", iso: "gh" },
    { name: "Gibraltar", code: "+350", iso: "gi" },
    { name: "Greece", code: "+30", iso: "gr" },
    { name: "Greenland", code: "+299", iso: "gl" },
    { name: "Grenada", code: "+1-473", iso: "gd" },
    { name: "Guam", code: "+1-671", iso: "gu" },
    { name: "Guatemala", code: "+502", iso: "gt" },
    { name: "Guernsey", code: "+44-1481", iso: "gg" },
    { name: "Guinea", code: "+224", iso: "gn" },
    { name: "Guinea-Bissau", code: "+245", iso: "gw" },
    { name: "Guyana", code: "+592", iso: "gy" },
    { name: "Haiti", code: "+509", iso: "ht" },
    { name: "Honduras", code: "+504", iso: "hn" },
    { name: "Hong Kong", code: "+852", iso: "hk" },
    { name: "Hungary", code: "+36", iso: "hu" },
    { name: "Iceland", code: "+354", iso: "is" },
    { name: "India", code: "+91", iso: "in" },
    { name: "Indonesia", code: "+62", iso: "id" },
    { name: "Iran", code: "+98", iso: "ir" },
    { name: "Iraq", code: "+964", iso: "iq" },
    { name: "Ireland", code: "+353", iso: "ie" },
    { name: "Isle of Man", code: "+44-1624", iso: "im" },
    { name: "Israel", code: "+972", iso: "il" },
    { name: "Italy", code: "+39", iso: "it" },
    { name: "Ivory Coast", code: "+225", iso: "ci" },
    { name: "Jamaica", code: "+1-876", iso: "jm" },
    { name: "Japan", code: "+81", iso: "jp" },
    { name: "Jersey", code: "+44-1534", iso: "je" },
    { name: "Jordan", code: "+962", iso: "jo" },
    { name: "Kazakhstan", code: "+7", iso: "kz" },
    { name: "Kenya", code: "+254", iso: "ke" },
    { name: "Kiribati", code: "+686", iso: "ki" },
    { name: "Kosovo", code: "+383", iso: "xk" },
    { name: "Kuwait", code: "+965", iso: "kw" },
    { name: "Kyrgyzstan", code: "+996", iso: "kg" },
    { name: "Laos", code: "+856", iso: "la" },
    { name: "Latvia", code: "+371", iso: "lv" },
    { name: "Lebanon", code: "+961", iso: "lb" },
    { name: "Lesotho", code: "+266", iso: "ls" },
    { name: "Liberia", code: "+231", iso: "lr" },
    { name: "Libya", code: "+218", iso: "ly" },
    { name: "Liechtenstein", code: "+423", iso: "li" },
    { name: "Lithuania", code: "+370", iso: "lt" },
    { name: "Luxembourg", code: "+352", iso: "lu" },
    { name: "Macau", code: "+853", iso: "mo" },
    { name: "Macedonia", code: "+389", iso: "mk" },
    { name: "Madagascar", code: "+261", iso: "mg" },
    { name: "Malawi", code: "+265", iso: "mw" },
    { name: "Malaysia", code: "+60", iso: "my" },
    { name: "Maldives", code: "+960", iso: "mv" },
    { name: "Mali", code: "+223", iso: "ml" },
    { name: "Malta", code: "+356", iso: "mt" },
    { name: "Marshall Islands", code: "+692", iso: "mh" },
    { name: "Mauritania", code: "+222", iso: "mr" },
    { name: "Mauritius", code: "+230", iso: "mu" },
    { name: "Mayotte", code: "+262", iso: "yt" },
    { name: "Mexico", code: "+52", iso: "mx" },
    { name: "Micronesia", code: "+691", iso: "fm" },
    { name: "Moldova", code: "+373", iso: "md" },
    { name: "Monaco", code: "+377", iso: "mc" },
    { name: "Mongolia", code: "+976", iso: "mn" },
    { name: "Montenegro", code: "+382", iso: "me" },
    { name: "Montserrat", code: "+1-664", iso: "ms" },
    { name: "Morocco", code: "+212", iso: "ma" },
    { name: "Mozambique", code: "+258", iso: "mz" },
    { name: "Myanmar", code: "+95", iso: "mm" },
    { name: "Namibia", code: "+264", iso: "na" },
    { name: "Nauru", code: "+674", iso: "nr" },
    { name: "Nepal", code: "+977", iso: "np" },
    { name: "Netherlands", code: "+31", iso: "nl" },
    { name: "Netherlands Antilles", code: "+599", iso: "an" },
    { name: "New Caledonia", code: "+687", iso: "nc" },
    { name: "New Zealand", code: "+64", iso: "nz" },
    { name: "Nicaragua", code: "+505", iso: "ni" },
    { name: "Niger", code: "+227", iso: "ne" },
    { name: "Nigeria", code: "+234", iso: "ng" },
    { name: "Niue", code: "+683", iso: "nu" },
    { name: "North Korea", code: "+850", iso: "kp" },
    { name: "Northern Mariana Islands", code: "+1-670", iso: "mp" },
    { name: "Norway", code: "+47", iso: "no" },
    { name: "Oman", code: "+968", iso: "om" },
    { name: "Pakistan", code: "+92", iso: "pk" },
    { name: "Palau", code: "+680", iso: "pw" },
    { name: "Palestine", code: "+970", iso: "ps" },
    { name: "Panama", code: "+507", iso: "pa" },
    { name: "Papua New Guinea", code: "+675", iso: "pg" },
    { name: "Paraguay", code: "+595", iso: "py" },
    { name: "Peru", code: "+51", iso: "pe" },
    { name: "Philippines", code: "+63", iso: "ph" },
    { name: "Pitcairn", code: "+64", iso: "pn" },
    { name: "Poland", code: "+48", iso: "pl" },
    { name: "Portugal", code: "+351", iso: "pt" },
    { name: "Puerto Rico", code: "+1-787", iso: "pr" },
    { name: "Qatar", code: "+974", iso: "qa" },
    { name: "Republic of the Congo", code: "+242", iso: "cg" },
    { name: "Reunion", code: "+262", iso: "re" },
    { name: "Romania", code: "+40", iso: "ro" },
    { name: "Russia", code: "+7", iso: "ru" },
    { name: "Rwanda", code: "+250", iso: "rw" },
    { name: "Saint Barthelemy", code: "+590", iso: "bl" },
    { name: "Saint Helena", code: "+290", iso: "sh" },
    { name: "Saint Kitts and Nevis", code: "+1-869", iso: "kn" },
    { name: "Saint Lucia", code: "+1-758", iso: "lc" },
    { name: "Saint Martin", code: "+590", iso: "mf" },
    { name: "Saint Pierre and Miquelon", code: "+508", iso: "pm" },
    { name: "Saint Vincent and the Grenadines", code: "+1-784", iso: "vc" },
    { name: "Samoa", code: "+685", iso: "ws" },
    { name: "San Marino", code: "+378", iso: "sm" },
    { name: "Sao Tome and Principe", code: "+239", iso: "st" },
    { name: "Saudi Arabia", code: "+966", iso: "sa" },
    { name: "Senegal", code: "+221", iso: "sn" },
    { name: "Serbia", code: "+381", iso: "rs" },
    { name: "Seychelles", code: "+248", iso: "sc" },
    { name: "Sierra Leone", code: "+232", iso: "sl" },
    { name: "Singapore", code: "+65", iso: "sg" },
    { name: "Sint Maarten", code: "+1-721", iso: "sx" },
    { name: "Slovakia", code: "+421", iso: "sk" },
    { name: "Slovenia", code: "+386", iso: "si" },
    { name: "Solomon Islands", code: "+677", iso: "sb" },
    { name: "Somalia", code: "+252", iso: "so" },
    { name: "South Africa", code: "+27", iso: "za" },
    { name: "South Korea", code: "+82", iso: "kr" },
    { name: "South Sudan", code: "+211", iso: "ss" },
    { name: "Spain", code: "+34", iso: "es" },
    { name: "Sri Lanka", code: "+94", iso: "lk" },
    { name: "Sudan", code: "+249", iso: "sd" },
    { name: "Suriname", code: "+597", iso: "sr" },
    { name: "Svalbard and Jan Mayen", code: "+47", iso: "sj" },
    { name: "Swaziland", code: "+268", iso: "sz" },
    { name: "Sweden", code: "+46", iso: "se" },
    { name: "Switzerland", code: "+41", iso: "ch" },
    { name: "Syria", code: "+963", iso: "sy" },
    { name: "Taiwan", code: "+886", iso: "tw" },
    { name: "Tajikistan", code: "+992", iso: "tj" },
    { name: "Tanzania", code: "+255", iso: "tz" },
    { name: "Thailand", code: "+66", iso: "th" },
    { name: "Togo", code: "+228", iso: "tg" },
    { name: "Tokelau", code: "+690", iso: "tk" },
    { name: "Tonga", code: "+676", iso: "to" },
    { name: "Trinidad and Tobago", code: "+1-868", iso: "tt" },
    { name: "Tunisia", code: "+216", iso: "tn" },
    { name: "Turkey", code: "+90", iso: "tr" },
    { name: "Turkmenistan", code: "+993", iso: "tm" },
    { name: "Turks and Caicos Islands", code: "+1-649", iso: "tc" },
    { name: "Tuvalu", code: "+688", iso: "tv" },
    { name: "Uganda", code: "+256", iso: "ug" },
    { name: "Ukraine", code: "+380", iso: "ua" },
    { name: "United Arab Emirates", code: "+971", iso: "ae" },
    { name: "United Kingdom", code: "+44", iso: "gb" },
    { name: "United States", code: "+1", iso: "us" },
    { name: "Uruguay", code: "+598", iso: "uy" },
    { name: "US Virgin Islands", code: "+1-340", iso: "vi" },
    { name: "Uzbekistan", code: "+998", iso: "uz" },
    { name: "Vanuatu", code: "+678", iso: "vu" },
    { name: "Vatican", code: "+379", iso: "va" },
    { name: "Venezuela", code: "+58", iso: "ve" },
    { name: "Vietnam", code: "+84", iso: "vn" },
    { name: "Wallis and Futuna", code: "+681", iso: "wf" },
    { name: "Western Sahara", code: "+212", iso: "eh" },
    { name: "Yemen", code: "+967", iso: "ye" },
    { name: "Zambia", code: "+260", iso: "zm" },
    { name: "Zimbabwe", code: "+263", iso: "zw" },
];

let selectedCountry = countries.find((country) => country.iso === "in"); // Default to India
window.selectedCountry = selectedCountry; // Make it globally accessible

// Initialize country dropdown
function initCountryDropdown() {
    // Add a small delay to ensure DOM is fully loaded
    setTimeout(() => {
        const selectedCountryEl = document.getElementById("selected-country");
        const dropdownContent = document.getElementById("dropdown-content");
        const countriesList = document.getElementById("countries-list");
        const countrySearch = document.getElementById("country-search");

        console.log("Initializing country dropdown...");
        console.log("Elements found:", {
            selectedCountryEl: !!selectedCountryEl,
            dropdownContent: !!dropdownContent,
            countriesList: !!countriesList,
            countrySearch: !!countrySearch,
        });

        if (
            !selectedCountryEl ||
            !dropdownContent ||
            !countriesList ||
            !countrySearch
        ) {
            console.error(
                "Some required elements not found for country dropdown"
            );
            return;
        }

        // Populate countries list
        function populateCountries(filteredCountries = countries) {
            countriesList.innerHTML = "";
            filteredCountries.forEach((country) => {
                const countryOption = document.createElement("div");
                countryOption.className = "country-option";
                countryOption.innerHTML = `
                    <img src="https://flagcdn.com/w20/${country.iso}.png" alt="${country.name}" class="flag-icon" onerror="this.style.display='none'">
                    <span class="country-name">${country.name}</span>
                    <span class="country-code">${country.code}</span>
                `;

                countryOption.addEventListener("click", () => {
                    selectCountry(country);
                    closeDropdown();
                });

                countriesList.appendChild(countryOption);
            });
        }

        // Select country
        function selectCountry(country) {
            selectedCountry = country;
            window.selectedCountry = country; // Also set on window for global access
            updateSelectedCountry();
            updatePhoneInput();
        }

        // Update selected country display
        function updateSelectedCountry() {
            const flagIcon = selectedCountryEl.querySelector(".flag-icon");
            const countryInfo =
                selectedCountryEl.querySelector(".country-info");

            if (flagIcon && countryInfo) {
                flagIcon.src = `https://flagcdn.com/w20/${selectedCountry.iso}.png`;
                flagIcon.alt = selectedCountry.name;
                flagIcon.onerror = function () {
                    this.style.display = "none";
                };
                countryInfo.textContent = `${selectedCountry.name} (${selectedCountry.code})`;
            }
        }

        // Update phone input placeholder and validation
        function updatePhoneInput() {
            const phoneInput = document.getElementById("phone-input");
            if (phoneInput) {
                // Country code to phone length mapping (MUST match the one in initEmailJS)
                const phoneLengthMap = {
                    "+91": 10, // India
                    "+1": 10, // US/Canada
                    "+1-242": 7, // Bahamas
                    "+1-246": 7, // Barbados
                    "+1-264": 7, // Anguilla
                    "+1-268": 7, // Antigua and Barbuda
                    "+1-284": 7, // British Virgin Islands
                    "+1-345": 7, // Cayman Islands
                    "+1-441": 7, // Bermuda
                    "+1-473": 7, // Grenada
                    "+1-649": 7, // Turks and Caicos Islands
                    "+1-664": 7, // Montserrat
                    "+1-670": 7, // Northern Mariana Islands
                    "+1-671": 7, // Guam
                    "+1-684": 7, // American Samoa
                    "+1-721": 7, // Sint Maarten
                    "+1-758": 7, // Saint Lucia
                    "+1-767": 7, // Dominica
                    "+1-784": 7, // Saint Vincent and the Grenadines
                    "+1-787": 7, // Puerto Rico
                    "+1-809": 7, // Dominican Republic
                    "+1-868": 7, // Trinidad and Tobago
                    "+1-876": 7, // Jamaica
                    "+44": 10, // UK (mobile, most common)
                    "+61": 9, // Australia
                    "+81": 10, // Japan
                    "+49": 11, // Germany
                    "+33": 9, // France
                    "+971": 9, // UAE
                    "+880": 10, // Bangladesh
                    "+92": 10, // Pakistan
                    "+7": 10, // Russia
                    "+86": 11, // China
                    "+966": 9, // Saudi Arabia
                    "+20": 10, // Egypt
                    "+234": 10, // Nigeria
                    "+55": 11, // Brazil
                    "+62": 10, // Indonesia
                    "+27": 9, // South Africa
                };
                let countryCodeInput = selectedCountry
                    ? selectedCountry.code
                    : "+91";
                let expectedLength = phoneLengthMap[countryCodeInput] || 10;
                phoneInput.setAttribute("maxlength", expectedLength);
                phoneInput.setAttribute("minlength", expectedLength);
                phoneInput.setAttribute("pattern", `\\d{${expectedLength}}`);
                phoneInput.setAttribute("type", "tel");
                phoneInput.setAttribute(
                    "title",
                    `Please enter a ${expectedLength}-digit phone number for ${
                        selectedCountry ? selectedCountry.name : "this country"
                    }`
                );

                // Store the expected length for the input handler
                phoneInput.dataset.expectedLength = expectedLength;
            }
        }

        // Initialize phone input handler only once
        function initPhoneInputHandler() {
            const phoneInput = document.getElementById("phone-input");
            if (phoneInput && !phoneInput.dataset.handlerAdded) {
                phoneInput.addEventListener("input", function () {
                    console.log(
                        "Phone input changed, original value:",
                        this.value
                    );
                    const expectedLength =
                        parseInt(this.dataset.expectedLength) || 10;
                    const newValue = this.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, expectedLength);
                    console.log("Phone input after filtering:", newValue);
                    this.value = newValue;
                });
                phoneInput.dataset.handlerAdded = "true";
            }
        }

        // Open dropdown
        function openDropdown() {
            console.log("Opening dropdown...");
            dropdownContent.classList.add("show");
            selectedCountryEl.classList.add("active");
            setTimeout(() => countrySearch.focus(), 100);
            document.addEventListener("click", handleOutsideClick);
        }

        // Close dropdown
        function closeDropdown() {
            console.log("Closing dropdown...");
            dropdownContent.classList.remove("show");
            selectedCountryEl.classList.remove("active");
            countrySearch.value = "";
            populateCountries(); // Reset filter
            document.removeEventListener("click", handleOutsideClick);
        }

        // Handle clicks outside dropdown
        function handleOutsideClick(event) {
            const dropdown = document.querySelector(".country-code-dropdown");
            if (dropdown && !dropdown.contains(event.target)) {
                closeDropdown();
            }
        }

        // Search functionality
        countrySearch.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredCountries = countries.filter(
                (country) =>
                    country.name.toLowerCase().includes(searchTerm) ||
                    country.code.includes(searchTerm)
            );
            populateCountries(filteredCountries);
        });

        // Toggle dropdown
        selectedCountryEl.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Country selector clicked");
            if (dropdownContent.classList.contains("show")) {
                closeDropdown();
            } else {
                openDropdown();
            }
        });

        // Prevent dropdown close when clicking inside
        dropdownContent.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        // Handle keyboard navigation
        countrySearch.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeDropdown();
            }
        });

        // Initialize
        populateCountries();
        updateSelectedCountry();
        updatePhoneInput();
        initPhoneInputHandler(); // Initialize phone input handler only once

        // Debug: Log the selected country
        console.log("Country dropdown initialized with:", selectedCountry);

        console.log("Country dropdown initialized successfully");
    }, 100);
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCountryDropdown);
} else {
    initCountryDropdown();
}

// initFormHandler removed - EmailJS handler in initEmailJS() now handles all form processing
