import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {sendOTP} from '@/lib/mailer';


export async function POST(request: Request) {
    try{
        await dbConnect();
        const {username,email,password}=await request.json();

        if(!username || !email || !password){
            return NextResponse.json({message:"All fields are required"}, {status:400});
        }
        const existingUser= await User.findOne({email});
        if(existingUser){
            return NextResponse.json({message:"User already exists"}, {status:400});
        }
        const hashedPassword= await bcrypt.hash(password,10);
        const verifyCode=Math.floor(100000 + Math.random() * 900000).toString();
        const verifyCodeExpiry=new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
        const newUser= new User({
            username,
            email,  
            password:hashedPassword,
            verifyCode,
            verifyCodeExpiry,
            isAcceptingMessage:true,
            messages:[]
        });
        await newUser.save();
        // sending opt
        sendOTP(email,verifyCode);


        return NextResponse.json({message:"User created successfully"}, {status:201});
    }catch(error){
    }
}