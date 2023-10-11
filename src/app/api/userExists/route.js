import { NextResponse } from "next/server";
import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";

export async function POST(request){
    try{
        await dbConnect();
        const { username } = await request.json();
        const user = await User.findOne({ username }).select("_id");
        return NextResponse.json({ user });
    }catch(error){
        console.log(error);
    }
}