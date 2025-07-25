import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error("Failed to get ticket.")
  }

  const data = await res.json();
  return data.foundTicket;
}

const TicketPage = async ({ params }) => {
  const { id } = await params;
  const EDITMODE = id === "new" ? false : true;  

  let updateTicketData = {};

  if (EDITMODE) {   
    updateTicketData = await getTicketById(id);
  }

  return <TicketForm ticketData={updateTicketData} editMode={EDITMODE}/>;
};

export default TicketPage;
