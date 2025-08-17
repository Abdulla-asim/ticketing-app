"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteTicket } from "../actions";

const DeleteBlock = ({ id }) => {

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={() => deleteTicket(id)}
    />
  );
};

export default DeleteBlock;
