import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";


export async function POST(request: Request) {
    await dbConnect();
    try {
        const { username, password } = await request.json();

        if (!username || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        
        const user = await User.findOne({ username });
        if (!user) {
            return NextResponse.json({ message: "User does not exist" }, { status: 400 });
        }
        if(user?.isverified===false){
            return NextResponse.json({ message: "Please verify your email before logging in." }, { status: 400 });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
        }
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const token = await new SignJWT({ username: user.username, email: user.email })
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setExpirationTime("1h")
            .sign(secret);
        


        return NextResponse.json({ message: "Login successful", token }, { status: 200 });
    } catch {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}