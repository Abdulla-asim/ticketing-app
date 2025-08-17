import TicketForm from "@/app/(components)/TicketForm";
import Ticket from "@/app/(models)/Ticket";

const getTicketById = async (id) => {
  try {
    const res = await Ticket.findById(id);

    // Converting the mongoose document (with getters and other methods) to a plain object before returning\
    // Because next js needs plain objects to work with
    return {
      ...res.toObject(),
      _id: res._id.toString(),
    };
  } catch (error) {
    throw new Error(`Could not find ticket with id ${id}`);
  }
};

const TicketPage = async ({ params }) => {
  const { id } = await params;
  const EDITMODE = id === "new" ? false : true;

  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(id);
    console.log("UPDATE DATA", updateTicketData);
  }

  return <TicketForm ticketData={updateTicketData} editMode={EDITMODE} />;
};

export default TicketPage;
