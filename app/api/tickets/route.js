import Ticket from "@/app/(models)/Model";
import { NextResponse } from "next/server";

export async function POST(request) {
    
    try {
        const body = await request.json();
        const ticketData = body.formData;
        console.log(ticketData);
        await Ticket.create(ticketData);

        return NextResponse.json({message: "Ticket created successfully"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Error", error }, {status: 500});
    }
}

// Not needed anymore, sine I used Ticket.find() instead.
// export async function GET(request) {
//     try {
//         const tickets = await Ticket.find();
//         return NextResponse.json({tickets}, {status: 200});
//     } catch (error) {
//         return NextResponse.json({message: "Error", error }, {status: 500});
//     }
// }