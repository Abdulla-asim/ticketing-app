'use server';

import Ticket from "@/app/(models)/Ticket";
import User from "@/app/(models)/User";
import { revalidatePath } from "next/cache";

export const createTicket = async (formData) => {
    try {
        await Ticket.create(formData)
        revalidatePath("/")
    } catch (e) {
        throw new Error("Failed to Create Ticket")
    }
}

export const updateTicket = async (formData, id) => {
    try {
        await Ticket.findByIdAndUpdate(id, formData);
        revalidatePath("/")
    } catch (error) {
        throw new Error("Failed to Update Ticket")
    }
}

export const deleteTicket = async (id) => {
    try {
        await Ticket.findByIdAndDelete(id)
        revalidatePath("/")
    } catch (error) {
        throw new Error("Failed to Delete Ticket")
    }
}

export const getTicketStats = async () => {
    try {
        const [numOpen, numClosed, numStarted] = await Promise.all([
            Ticket.countDocuments({status: "Open"}),
            Ticket.countDocuments({status: "Closed"}),
            Ticket.countDocuments({status: "Started"})
        ])
                
        return {
            numOpen,
            numClosed,
            numStarted
        }
    } catch (error) {
        throw new Error("Could not get ticket analytics")
    }
};

// USER FUNCTIONS
export const createUser = async (user) => {
    try {
        console.log("creating user with data: ", user);
        
        const newUser = await User.create(user);
        console.log("New user: ", newUser);
        
        // revalidatePath("/Users")
    } catch (error) {
        throw new Error("Could not create User")
    }
}

export const getUsers = async () => {
    try {
        await User.find();
        console.log("user created!!!!!!!!!");
        
    } catch (error) {
        throw new Error("Could not get Users: ", error)
    }
}
