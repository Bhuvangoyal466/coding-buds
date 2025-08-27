// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res
//             .status(405)
//             .json({ success: false, message: "Method not allowed" });
//     }

//     const { hcaptcha_token, ...formData } = req.body;

//     if (!hcaptcha_token) {
//         return res
//             .status(400)
//             .json({ success: false, message: "Captcha token missing" });
//     }

//     // 1. Verify hCaptcha
//     const captchaResponse = await fetch("https://hcaptcha.com/siteverify", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({
//             secret: process.env.HCAPTCHA_SECRET,
//             response: hcaptcha_token,
//         }),
//     });

//     const captchaResult = await captchaResponse.json();
//     if (!captchaResult.success) {
//         return res
//             .status(400)
//             .json({ success: false, message: "Captcha failed ❌" });
//     }

//     // 2. Send email with EmailJS REST API
//     try {
//         const emailResponse = await fetch(
//             "https://api.emailjs.com/api/v1.0/email/send",
//             {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     service_id: process.env.EMAILJS_SERVICE_ID, // e.g. "service_xfs65vr"
//                     template_id: process.env.EMAILJS_TEMPLATE_ID, // e.g. "template_r7wsth7"
//                     user_id: process.env.EMAILJS_USER_ID, // from EmailJS dashboard
//                     template_params: formData, // all your form fields
//                 }),
//             }
//         );

//         if (emailResponse.ok) {
//             return res
//                 .status(200)
//                 .json({
//                     success: true,
//                     message: "Captcha verified ✅ & email sent",
//                 });
//         } else {
//             const err = await emailResponse.text();
//             return res
//                 .status(500)
//                 .json({
//                     success: false,
//                     message: "Captcha OK but email failed ❌",
//                     error: err,
//                 });
//         }
//     } catch (error) {
//         console.error("Email sending failed:", error);
//         return res
//             .status(500)
//             .json({
//                 success: false,
//                 message: "Server error while sending email",
//             });
//     }
// }

export default async function handler(req, res) {
    if (req.method !== "POST") {
        console.log("❌ Wrong method:", req.method);
        return res
            .status(405)
            .json({ success: false, message: "Method not allowed" });
    }

    const { hcaptcha_token, ...formData } = req.body;
    console.log("🔹 Incoming formData:", formData);
    console.log("🔹 Received hcaptcha_token:", hcaptcha_token);

    if (!hcaptcha_token) {
        console.log("❌ No captcha token received");
        return res
            .status(400)
            .json({ success: false, message: "Captcha token missing" });
    }

    // 1. Verify hCaptcha
    try {
        const captchaResponse = await fetch("https://hcaptcha.com/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: process.env.HCAPTCHA_SECRET,
                response: hcaptcha_token,
            }),
        });

        console.log("🔹 hCaptcha verify request sent");

        const captchaResult = await captchaResponse.json();
        console.log("🔹 hCaptcha API response:", captchaResult);

        if (!captchaResult.success) {
            console.log("❌ Captcha verification failed:", captchaResult);
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Captcha failed ❌",
                    details: captchaResult,
                });
        }
    } catch (err) {
        console.error("🔥 Error while calling hCaptcha:", err);
        return res
            .status(500)
            .json({
                success: false,
                message: "Server error during captcha verification",
            });
    }

    // 2. Send email with EmailJS REST API
    try {
        console.log("🔹 Sending email via EmailJS with formData:", formData);

        const emailResponse = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    service_id: process.env.EMAILJS_SERVICE_ID,
                    template_id: process.env.EMAILJS_TEMPLATE_ID,
                    user_id: process.env.EMAILJS_USER_ID,
                    template_params: formData,
                }),
            }
        );

        console.log("🔹 EmailJS response status:", emailResponse.status);

        if (emailResponse.ok) {
            console.log("✅ Email sent successfully");
            return res.status(200).json({
                success: true,
                message: "Captcha verified ✅ & email sent",
            });
        } else {
            const err = await emailResponse.text();
            console.log("❌ Email failed. Response:", err);
            return res.status(500).json({
                success: false,
                message: "Captcha OK but email failed ❌",
                error: err,
            });
        }
    } catch (error) {
        console.error("🔥 Email sending failed:", error);
        return res.status(500).json({
            success: false,
            message: "Server error while sending email",
        });
    }
}
