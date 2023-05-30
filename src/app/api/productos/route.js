import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    const mongoClient = await clientPromise
    const respuesta = await mongoClient
        .db()
        .collection('productos')
        .find()
        .sort()
        .toArray()
    return NextResponse.json(respuesta)
}