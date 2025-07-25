import Ticket from "@/app/(models)/Model";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({message: "Ticket deleted successfully"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Error", error }, {status: 500});
    }
}

export const GET = async (request, { params }) => {
    try {
        const {id} = await params;
        const foundTicket = await Ticket.findOne({_id: id});
    
        return NextResponse.json({foundTicket}, {response: 200});
    } catch (error) {
        NextResponse.json({message: 'Error', error}, {status: 500})
    }
}

export const PUT = async (request, {params}) => {
    try {
        const {id} = await params;
        const {formData} = await request.json();        

        const res = await Ticket.findByIdAndUpdate(
            id,
            formData,
            {new: true} // Returns updated document
        )
        console.log("Ticket Updated", res)
        return NextResponse.json({Message: "Ticket Updated Successfully"}, {response: 200})
    } catch (error) {
        console.log("Ticket could not be updated");
        return NextResponse.json({})
    }        
}