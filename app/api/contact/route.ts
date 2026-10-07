import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, company, email, phone, message } = body;

        // Basic server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Missing required fields." },
                { status: 400 }
            );
        }

        const scriptUrl = "https://script.google.com/macros/s/AKfycbzORsLce5U7Nh9O4PlAqht1jYzz9aB3f4EtdS3_yRfROLOyKUTrZ4z6Hldu1LH9l4Xn1A/exec";
        if (!scriptUrl) {
            console.error("GOOGLE_SCRIPT_URL env variable is not set.");
            return NextResponse.json(
                { success: false, error: "Server configuration error." },
                { status: 500 }
            );
        }

        // Forward to Google Apps Script
        // redirect: "follow" is required — Apps Script issues a redirect on POST
        const payload = JSON.stringify({
            name,
            company: company || "—",
            email,
            phone: phone || "—",
            message,
            submittedAt: new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
            }),
        });

        const gsRes = await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload,
            redirect: "follow",
        });

        const responseText = await gsRes.text();
        console.log("Apps Script response:", gsRes.status, responseText);

        let parsed: { success?: boolean; error?: string } = {};
        try {
            parsed = JSON.parse(responseText);
        } catch {
            // Apps Script sometimes returns HTML on auth errors
            console.error("Non-JSON response from Apps Script:", responseText.slice(0, 300));
            return NextResponse.json(
                { success: false, error: "Apps Script returned an unexpected response. Check deployment settings." },
                { status: 502 }
            );
        }

        if (!parsed.success) {
            return NextResponse.json(
                { success: false, error: parsed.error || "Google Sheet logging failed." },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact API error:", err);
        return NextResponse.json(
            { success: false, error: "Internal server error." },
            { status: 500 }
        );
    }
}
