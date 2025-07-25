'use server';

import { revalidatePath } from 'next/cache';
import Ticket from './(models)/Model';

export async function deleteTicketAction(id) {
  try {
    await Ticket.findByIdAndDelete(id);
    revalidatePath('/'); // Instantly updates the page
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function createTicketAction(formData) {
  try {
    await Ticket.create(formData);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
