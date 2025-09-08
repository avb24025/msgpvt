import { NextResponse } from "next/server";
import { sendOTP } from "@/lib/mailer";

// (for demo, using in-memory storage; use DB/Redis in real apps)
const otpStore = new Map<string, { otp: string; expires: number }>();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP with expiry (5 minutes)
    otpStore.set(email, { otp, expires: Date.now() + 5 * 60 * 1000 });

    console.log(`Generated OTP for ${email}: ${otp}`);

    // Send OTP via Gmail
    await sendOTP(email, otp);

    return NextResponse.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error sending OTP" }, { status: 500 });
  }
}

// helper to validate OTP later
export function verifyOtp(email: string, otp: string): boolean {
  const record = otpStore.get(email);
  if (!record) return false;
  if (record.otp !== otp) return false;
  if (Date.now() > record.expires) return false;
  return true;
}
