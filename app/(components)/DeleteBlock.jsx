"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteTicketAction } from "../actions";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {

  const router = useRouter();

  // API call to delete a ticket
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE"
    })

    if (res.ok) {
      router.refresh()
    }
  }

  // ANother method if u dont want to use the api and directly delete from the database
  // const handleClick = async (e) => {
  //   try {
  //     const result = await deleteTicketAction(id);

  //     if (result.success) console.log("Ticket Deleted successfylly");
  //     else console.error("Failed to delete ticket:", result.error);
  //   } catch (error) {
  //     console.error("Error deleting ticket", error);
  //   }
  // };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
