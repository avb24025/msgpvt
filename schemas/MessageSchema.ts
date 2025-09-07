import {z} from "zod";

export const MessageSchema = z.object({
    content:z.string().min(5,{message:"Message content cannot be empty"}).max(500,{message:"Message content must be at most 1000 characters long"})
})