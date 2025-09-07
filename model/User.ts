import mongoose ,{ Document, Schema } from "mongoose";

export interface meaasge extends Document{
    content:string;
    createdAt:Date;
}

const messageSchema:Schema<meaasge>= new Schema({
    content:{type:String,required:true},
    createdAt:{type:Date,required:true,default:Date.now}
})

export interface user extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isAcceptingMessage:boolean;
    messages:meaasge[];
}

const userSchema:Schema<user>= new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true,match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/},
    password:{type:String,required:true},
    verifyCode:{type:String,required:true},
    verifyCodeExpiry:{type:Date,required:true},
    isAcceptingMessage:{type:Boolean,required:true,default:true},
    messages:[messageSchema]
})  

const UserModel =
  (mongoose.models.user as mongoose.Model<user>) ||
  mongoose.model<user>("User", userSchema);

export default UserModel;
