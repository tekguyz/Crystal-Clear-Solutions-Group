import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_for_build");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Parse schema
    const parsedData = leadSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json({ error: "Invalid form data", details: parsedData.error.flatten() }, { status: 400 });
    }

    const { name, email, phone, serviceCategory, timeframe, details, website } = parsedData.data;

    // Honeypot check
    if (website && website.length > 0) {
      // Silently succeed
      return NextResponse.json({ success: true, fakeOut: true }, { status: 200 });
    }

    // Only attempt to send if a real API key is set
    if (process.env.RESEND_API_KEY) {
      const emailRes = await resend.emails.send({
        from: "Leads <onboarding@resend.dev>",
        to: "crystalclearsolutiongroup@gmail.com",
        subject: `New Lead: ${serviceCategory} from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${serviceCategory}
Timeframe: ${timeframe}
Details: ${details || "None"}
        `,
      });

      if (emailRes.error) {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    } else {
      console.log("No RESEND_API_KEY provided. Skipping email transmission.");
      console.log("Captured Lead:", parsedData.data);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
