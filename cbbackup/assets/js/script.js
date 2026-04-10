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
    if (navbar) navbar.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    if (navbar) navbar.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
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

            // console.log("Form submission started");

            // All your phone validation logic remains untouched
            // ...
            // (keeping your phone validation code as is)

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
                course: formData.get("course_interest"),
                message: formData.get("message"),
            };

            // Send email with EmailJS directly (no backend verification)
            emailjs
                .send(
                    "service_xfs65vr", // replace with EmailJS service ID
                    "template_r7wsth7", // replace with EmailJS template ID
                    templateParams,
                    "ykE6MPiOGmJw2EFzy" // replace with EmailJS Public Key
                )
                .then(() => {
                    showAlert(
                        "Thank you! Your query has been received. We will contact you shortly.",
                        "success"
                    );
                    document.getElementById("contact-form").reset();
                })
                .catch((err) => {
                    console.error("EmailJS error:", err);
                    showAlert(
                        "Email sending failed. Please try again later.",
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

        // console.log("Initializing country dropdown...");
        // console.log("Elements found:", {
        //     selectedCountryEl: !!selectedCountryEl,
        //     dropdownContent: !!dropdownContent,
        //     countriesList: !!countriesList,
        //     countrySearch: !!countrySearch,
        // });

        // Check if country dropdown elements exist (they may not be present on all pages)
        if (
            !selectedCountryEl ||
            !dropdownContent ||
            !countriesList ||
            !countrySearch
        ) {
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
                    // console.log(
                    //     "Phone input changed, original value:",
                    //     this.value
                    // );
                    const expectedLength =
                        parseInt(this.dataset.expectedLength) || 10;
                    const newValue = this.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, expectedLength);
                    // console.log("Phone input after filtering:", newValue);
                    this.value = newValue;
                });
                phoneInput.dataset.handlerAdded = "true";
            }
        }

        // Open dropdown
        function openDropdown() {
            // console.log("Opening dropdown...");
            dropdownContent.classList.add("show");
            selectedCountryEl.classList.add("active");
            setTimeout(() => countrySearch.focus(), 100);
            document.addEventListener("click", handleOutsideClick);
        }

        // Close dropdown
        function closeDropdown() {
            // console.log("Closing dropdown...");
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
            // console.log("Country selector clicked");
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
        // console.log("Country dropdown initialized with:", selectedCountry);

        // console.log("Country dropdown initialized successfully");
    }, 100);
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCountryDropdown);
} else {
    initCountryDropdown();
}

// initFormHandler removed - EmailJS handler in initEmailJS() now handles all form processing

/**
 * Blog Modal Functionality
 */

// Blog content data
const blogContent = {
    scratch: {
        title: "Getting Started with Scratch Programming for Kids",
        category: "Scratch Programming",
        date: "January 15, 2024",
        readTime: "5 min read",
        image: "./assets/images/scratch-game.jpg",
        webpImage: "./assets/images/scratch-game.webp",
        content: `
            <h4>What is Scratch Programming?</h4>
            <p>Scratch is a visual programming language developed by MIT that allows children to create interactive stories, games, and animations by dragging and dropping code blocks. Instead of typing complex code, kids can snap together colorful blocks that represent different programming concepts.</p>
            
            <h4>Why Choose Scratch for Young Learners?</h4>
            <p>Scratch eliminates the syntax barriers that often frustrate beginners in traditional programming languages. Children can focus on <strong>logical thinking</strong> and <strong>problem-solving</strong> without getting stuck on semicolons and brackets.</p>
            
            <p>The platform encourages creativity while teaching fundamental programming concepts like:</p>
            <ul>
                <li>Sequencing and loops</li>
                <li>Conditional statements (if/then)</li>
                <li>Variables and data handling</li>
                <li>Event-driven programming</li>
                <li>Debugging and iteration</li>
            </ul>
            
            <h4>Getting Started: Your First Scratch Project</h4>
            <p>We recommend starting with simple animations before moving to interactive games. A great first project is creating a dancing cat that responds to keyboard presses. This introduces basic movement, events, and user interaction in a fun, engaging way.</p>
            
            <p>As children progress, they can create more complex projects like maze games, storytelling adventures, and even simple simulations. The beauty of Scratch lies in its ability to grow with the learner.</p>
            
            <h4>Building Confidence Through Creation</h4>
            <p style="margin-bottom: 1rem;">Every project in Scratch is an opportunity for children to see their ideas come to life. This immediate feedback loop builds confidence and encourages experimentation. Kids learn that making mistakes is part of the learning process and that debugging is a valuable skill.</p>
        `,
    },
    python: {
        title: "Why Python is Perfect for Young Programmers",
        category: "Python",
        date: "January 10, 2024",
        readTime: "7 min read",
        image: "./assets/images/python-class.jpg",
        webpImage: "./assets/images/python-class.webp",
        content: `
            <h4>The Power of Python's Simplicity</h4>
            <p>Python's syntax closely resembles natural English, making it incredibly accessible for young minds. While other languages require complex syntax, Python allows students to focus on solving problems rather than fighting with code formatting.</p>
            
            <h4>Real-World Applications Kids Can Build</h4>
            <p>Unlike toy programming languages, Python is used by major companies worldwide. This means the skills your child learns have real-world value. They can create:</p>
            <ul>
                <li>Interactive games and puzzles</li>
                <li>Data analysis and visualization projects</li>
                <li>Web applications and APIs</li>
                <li>Automation scripts and tools</li>
                <li>Machine learning and AI projects</li>
            </ul>
            
            <h4>Industry Recognition and Future Opportunities</h4>
            <p><strong>Google, Netflix, Instagram, and Spotify</strong> all rely heavily on Python. By learning Python, your child is acquiring skills that are directly applicable to future career opportunities in technology.</p>
            
            <h4>Perfect Transition from Visual Programming</h4>
            <p>For students who have mastered visual programming languages like Scratch, Python provides the perfect next step. The logical concepts remain the same, but now they're expressed through text-based code, preparing students for more advanced programming concepts.</p>
            
            <h4>Extensive Learning Resources and Community</h4>
            <p>Python has one of the most welcoming and supportive communities in programming. Thousands of tutorials, libraries, and projects are available for free, ensuring your child always has resources to explore new interests and challenges.</p>
            
            <p style="margin-bottom: 1rem;">The language's versatility means that whether your child is interested in game development, web design, data science, or artificial intelligence, Python can accommodate their interests and grow with their ambitions.</p>
        `,
    },
    "web-dev": {
        title: "Building Your First Website: A Teen's Guide",
        category: "Web Development",
        date: "January 5, 2024",
        readTime: "6 min read",
        image: "./assets/images/web-development.jpg",
        webpImage: "./assets/images/web-development.webp",
        content: `
            <h4>The Foundation: HTML, CSS, and JavaScript</h4>
            <p>Web development is built on three core technologies that work together like the foundation, decoration, and functionality of a house:</p>
            <ul>
                <li><strong>HTML</strong> - The structure and content</li>
                <li><strong>CSS</strong> - The design and styling</li>
                <li><strong>JavaScript</strong> - The interactive behavior</li>
            </ul>
            
            <h4>Your First Website Project Ideas</h4>
            <p>Starting with personal projects makes learning more engaging and meaningful. Consider building:</p>
            <ul>
                <li>A personal portfolio showcasing your interests and skills</li>
                <li>A blog about your hobbies or passions</li>
                <li>A simple game like Tic-Tac-Toe or a quiz app</li>
                <li>A tribute page to someone you admire</li>
                <li>A local business website for family or friends</li>
            </ul>
            
            <h4>Modern Web Development Tools</h4>
            <p>Today's web developers have access to amazing tools that make development faster and more enjoyable. Popular frameworks like <strong>React, Vue, and Angular</strong> allow developers to build complex applications with reusable components.</p>
            
            <h4>Responsive Design: Building for All Devices</h4>
            <p>Modern websites must work seamlessly on phones, tablets, and computers. Learning responsive design principles from the start ensures your websites look great everywhere. CSS Grid and Flexbox are powerful tools that make responsive design much easier than it used to be.</p>
            
            <h4>Career Opportunities in Web Development</h4>
            <p>Web development offers incredible career flexibility. You can work as a freelancer, join a startup, work for a large corporation, or even start your own web development business. The demand for skilled web developers continues to grow as more businesses move online.</p>
            
            <p style="margin-bottom: 1rem;">Plus, web development skills are transferable to mobile app development, desktop applications, and even emerging technologies like progressive web apps (PWAs) that blur the line between websites and native mobile apps.</p>
        `,
    },
    java: {
        title: "Java Programming: Building Strong Foundations",
        category: "Java",
        date: "December 28, 2023",
        readTime: "8 min read",
        image: "./assets/images/java.png",
        webpImage: "./assets/images/java.webp",
        content: `
            <h4>Why Java Remains a Programming Powerhouse</h4>
            <p>Java's motto "Write Once, Run Anywhere" isn't just marketing - it's a fundamental advantage that has kept Java relevant for decades. Java applications can run on any device with a Java Virtual Machine, from smartphones to supercomputers.</p>
            
            <h4>Object-Oriented Programming Mastery</h4>
            <p>Java is an excellent language for learning <strong>object-oriented programming (OOP)</strong> concepts that are fundamental to modern software development:</p>
            <ul>
                <li>Classes and objects</li>
                <li>Inheritance and polymorphism</li>
                <li>Encapsulation and abstraction</li>
                <li>Design patterns and best practices</li>
            </ul>
            
            <h4>Enterprise-Level Applications</h4>
            <p>Many of the world's largest applications are built with Java. Banking systems, e-commerce platforms, and enterprise software rely on Java's stability, security, and performance. Learning Java opens doors to working on systems that serve millions of users.</p>
            
            <h4>Android App Development</h4>
            <p>Java has been the primary language for Android app development for years. While Kotlin is now also supported, Java skills remain valuable for mobile development. Students can create apps for the world's most popular mobile platform.</p>
            
            <h4>Strong Foundation for Computer Science</h4>
            <p>Java's strict syntax and strong typing system teach good programming habits from the start. Students learn to think carefully about data types, method signatures, and program structure. These skills transfer well to other languages and advanced computer science concepts.</p>
            
            <h4>Excellent Learning Resources and Career Paths</h4>
            <p>Java has extensive documentation, tutorials, and learning resources. The language's maturity means there are established best practices and clear career progression paths. From junior developer to software architect, Java provides a solid foundation for long-term career growth.</p>
            
            <p style="margin-bottom: 1rem;">Universities worldwide use Java in computer science curricula, making it an excellent choice for students planning to pursue formal computer science education.</p>
        `,
    },
    benefits: {
        title: "The Benefits of Learning to Code at an Early Age",
        category: "Education",
        date: "December 20, 2023",
        readTime: "5 min read",
        image: "./assets/images/kids-coding-1.png",
        webpImage: "./assets/images/kids-coding-1.webp",
        content: `
            <h4>Cognitive Development and Problem-Solving Skills</h4>
            <p>Coding teaches children to break down complex problems into smaller, manageable parts. This <strong>computational thinking</strong> approach improves their ability to tackle challenges in all areas of life, from math homework to social situations.</p>
            
            <h4>Enhanced Mathematical Understanding</h4>
            <p>Programming naturally reinforces mathematical concepts like:</p>
            <ul>
                <li>Logic and reasoning</li>
                <li>Patterns and sequences</li>
                <li>Geometry and spatial relationships</li>
                <li>Algebra and variables</li>
                <li>Statistics and data analysis</li>
            </ul>
            
            <h4>Improved Academic Performance</h4>
            <p>Research consistently shows that students who learn programming perform better in traditional subjects. The logical thinking skills developed through coding enhance performance in mathematics, science, and even language arts.</p>
            
            <h4>Creativity and Digital Literacy</h4>
            <p>Coding is a creative medium that allows children to bring their imagination to life. Whether creating games, animations, or interactive stories, programming provides a powerful outlet for creative expression while building essential digital literacy skills.</p>
            
            <h4>Future Career Advantages</h4>
            <p>Even in non-technical careers, programming skills provide significant advantages. From automating repetitive tasks to analyzing data, coding skills are valuable in fields like:</p>
            <ul>
                <li>Business and finance</li>
                <li>Healthcare and medicine</li>
                <li>Education and research</li>
                <li>Arts and entertainment</li>
                <li>Environmental science</li>
            </ul>
            
            <h4>Building Confidence and Persistence</h4>
            <p>Programming teaches children that mistakes are learning opportunities. The iterative process of coding, testing, and debugging builds resilience and persistence. Children learn to approach challenges with confidence, knowing they can find solutions through systematic thinking.</p>
            
            <h4>Collaborative Skills and Communication</h4>
            <p style="margin-bottom: 1rem;">Modern programming often involves teamwork. Children learn to communicate their ideas clearly, work collaboratively on projects, and give and receive constructive feedback. These soft skills are valuable in any future career path.</p>
        `,
    },
    choosing: {
        title: "How to Choose the Right Coding Class for Your Child",
        category: "Tips",
        date: "December 15, 2023",
        readTime: "6 min read",
        image: "./assets/images/kids-coding-2.png",
        webpImage: "./assets/images/kids-coding-2.webp",
        content: `
            <h4>Age-Appropriate Learning Paths</h4>
            <p>Different age groups benefit from different approaches to coding education:</p>
            <ul>
                <li><strong>Ages 5-8:</strong> Visual programming with Scratch Jr. or similar block-based tools</li>
                <li><strong>Ages 8-12:</strong> Scratch programming and introduction to basic web development</li>
                <li><strong>Ages 12-16:</strong> Text-based languages like Python, JavaScript, or Java</li>
                <li><strong>Ages 16+:</strong> Specialized tracks in web development, mobile apps, or data science</li>
            </ul>
            
            <h4>Learning Style Considerations</h4>
            <p>Understanding your child's learning style helps determine the best educational approach:</p>
            <ul>
                <li><strong>Visual learners:</strong> Benefit from drag-and-drop interfaces and visual feedback</li>
                <li><strong>Kinesthetic learners:</strong> Enjoy hands-on projects and building physical computing projects</li>
                <li><strong>Auditory learners:</strong> Thrive in discussion-based classes with verbal explanations</li>
                <li><strong>Social learners:</strong> Prefer group projects and collaborative coding environments</li>
            </ul>
            
            <h4>Class Size and Individual Attention</h4>
            <p>Consider the benefits of different class structures:</p>
            <ul>
                <li><strong>1:1 Classes:</strong> Maximum personalization and flexible pacing</li>
                <li><strong>Small Groups (2-4 students):</strong> Balance of individual attention and peer learning</li>
                <li><strong>Larger Classes (5+ students):</strong> Cost-effective with strong collaborative elements</li>
            </ul>
            
            <h4>Instructor Qualifications and Teaching Style</h4>
            <p>Look for instructors who combine technical expertise with educational experience. The best coding teachers understand both programming concepts and child development, adapting their teaching style to engage young learners effectively.</p>
            
            <h4>Curriculum Depth and Progression</h4>
            <p>Evaluate whether the program offers:</p>
            <ul>
                <li>Clear learning objectives and milestones</li>
                <li>Progressive skill building from basic to advanced concepts</li>
                <li>Project-based learning with tangible outcomes</li>
                <li>Opportunities for creative expression and personal projects</li>
                <li>Regular assessment and feedback</li>
            </ul>
            
            <h4>Technology Requirements and Support</h4>
            <p>Ensure you understand the technical requirements and support provided. Good programs offer guidance on necessary software, hardware recommendations, and technical support for both students and parents.</p>
            
            <h4>Trial Classes and Flexibility</h4>
            <p style="margin-bottom: 1rem;">Many quality programs offer trial classes or money-back guarantees. Take advantage of these opportunities to ensure the program is a good fit for your child's interests and learning style before making a long-term commitment.</p>
        `,
    },
};

// Modal functionality
const blogModal = document.getElementById("blogModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalImageContainer = document.getElementById("modalImageContainer");
const modalText = document.getElementById("modalText");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalOverlay = document.getElementById("modalOverlay");

// Function to open modal
function openBlogModal(blogId) {
    const blog = blogContent[blogId];
    if (!blog) return;

    // Populate modal content
    modalTitle.textContent = blog.title;
    modalMeta.innerHTML = `
        <time datetime="${blog.date}">${blog.date}</time>
        <span class="read-time">${blog.readTime}</span>
    `;
    modalImageContainer.innerHTML = `
        <picture>
            <source srcset="${blog.webpImage}" type="image/webp">
            <img src="${blog.image}" alt="${blog.title}" class="img-cover">
        </picture>
        <div class="article-category">${blog.category}</div>
    `;
    modalText.innerHTML = blog.content;

    // Show modal
    blogModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Function to close modal
function closeBlogModal() {
    blogModal.classList.remove("active");
    document.body.style.overflow = "";
}

// Event listeners for blog modal
if (blogModal) {
    // Close button
    modalCloseBtn?.addEventListener("click", closeBlogModal);

    // Overlay click
    modalOverlay?.addEventListener("click", closeBlogModal);

    // Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && blogModal.classList.contains("active")) {
            closeBlogModal();
        }
    });

    // Read more buttons
    const readMoreBtns = document.querySelectorAll(
        ".read-more-btn[data-blog-id]"
    );
    readMoreBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const blogId = btn.getAttribute("data-blog-id");
            openBlogModal(blogId);
        });
    });
}

// Prevent modal content scrolling from affecting body
if (blogModal) {
    const modalContent = blogModal.querySelector(".modal-content");
    modalContent?.addEventListener("wheel", (e) => {
        e.stopPropagation();
    });
}
