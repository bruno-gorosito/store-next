import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const mongoClient = await clientPromise
    const resultado = await mongoClient
        .db()
        .collection('categorias')
        .find()
        .toArray()
    return NextResponse.json(resultado)
}