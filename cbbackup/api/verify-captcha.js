// /api/verify-captcha.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res
            .status(405)
            .json({ success: false, message: "Method not allowed" });
    }

    const { hcaptcha_token } = req.body;

    if (!hcaptcha_token) {
        return res
            .status(400)
            .json({ success: false, message: "Captcha token missing" });
    }

    try {
        // Verify with hCaptcha
        const captchaResponse = await fetch("https://hcaptcha.com/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: process.env.HCAPTCHA_SECRET,
                response: hcaptcha_token,
            }),
        });

        const captchaResult = await captchaResponse.json();
        // console.log("🔹 hCaptcha verification result:", captchaResult);

        if (captchaResult.success) {
            return res.status(200).json({ success: true });
        } else {
            return res
                .status(400)
                .json({ success: false, message: "Captcha failed" });
        }
    } catch (error) {
        console.error("Captcha verify error:", error);
        return res
            .status(500)
            .json({ success: false, message: "Server error" });
    }
}
