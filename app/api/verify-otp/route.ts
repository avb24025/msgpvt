import { NextResponse } from "next/server";
import { verifyOtp } from "../send-otp/route"; // import helper
import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { SignJWT, jwtVerify } from "jose";

await dbConnect();

async function verifyotp(email: string, otp: string): Promise<boolean> {
  const user = await User.findOne({ email });
  if (!user) return false;
  if (user.verifyCodeExpiry > new Date() && user.verifyCode === otp) {
    user.isverified = true;
    user.verifyCode = "verified"; // <-- set to a non-empty string to pass validation
    user.verifyCodeExpiry = new Date(0); // Expire the code
    await user.save();
    return true;
  }
  return false;
}

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();
    const user=await User.findOne({email});
    if(!user){
      return NextResponse.json({ success: false, message: "User does not exist" }, { status: 400 });
    }

    if (await verifyotp(email, otp)) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
              const token = await new SignJWT({ username: user.username, email: user.email })
                  .setProtectedHeader({ alg: "HS256", typ: "JWT" })
                  .setExpirationTime("1h")
                  .sign(secret);
        
      return NextResponse.json({ success: true, message: "OTP verified successfully", token }, { status: 200 });
    } 
    else {
      return NextResponse.json({ success: false, message: "Invalid or expired OTP" }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error verifying OTP" }, { status: 500 });
  }
}

