import { Suspense } from "react";
import TicketCard from "./(components)/TicketCard";
import Ticket from "./(models)/Ticket";
import SignUpForm from "@/app/(components)/SignUpForm";



// Next js Alternative to using GET and fetch
const getTickets = async () => {
  try {
    const tickets = await Ticket.find();

    return tickets;
  } catch (error) {
    console.log("Error to get tickets: ", error);
    return [];
  }
};

const Tickets = async () => {

  // const {getUser} = 

  const tickets = await getTickets();
  console.log("Tickets page: ", tickets);
  

  const uniqueCategories = [
    ...new Set(tickets?.map((ticket) => ticket.category)),
  ];

  // const showLogin = true;

  // if (showLogin) {
  //   return <SignUpForm />;
  // }

  return (
    <div className="p-5">
      <Suspense fallback="Loading...">
        {tickets &&
          uniqueCategories?.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-foreground">{category}</h3>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  ?.filter((ticket) => ticket.category == category)
                  .map((filteredTicket) => (
                    <TicketCard
                      ticket={filteredTicket}
                      key={filteredTicket._id}
                    />
                  ))}
              </div>
            </div>
          ))}
      </Suspense>
    </div>
  );
};

export default Tickets;
