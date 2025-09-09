import { NextResponse } from "next/server";
import { verifyOtp } from "../send-otp/route"; // import helper
import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";

await dbConnect();

// async function verify(email: string, otp: string): boolean {
//   const user=await User.find({email});
//   if(user.verifyCodeExpiry > new Date() && user.verifyCode===otp){
//     return true;
//   }
//   return false;
// }


export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (verifyOtp(email, otp)) {

      return NextResponse.json({ success: true, message: "OTP verified successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Invalid or expired OTP" }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error verifying OTP" }, { status: 500 });
  }
}
