// import clientPromise from "@/lib/mongodb";
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/dist/client/components/headers";



export async function POST(req, res) {
    try {
        const {username, password} = await req.json();
        const mongoClient = await clientPromise
        const resultado = await mongoClient
            .db()
            .collection('users')
            .findOne({username: username})
        if (!resultado) return NextResponse.json({msg: 'No existe la cuenta'})
        if (password != resultado.password ) return NextResponse.json({error: 'Not loged'});
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000)  + (60 * 60),
            username: username
        }, process.env.SECRET);
        cookies().set('MyToken', token)
        return NextResponse.json({token})
    } catch (error) {
        console.log(error)
    }
}