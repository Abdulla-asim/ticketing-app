import TicketCard from "./(components)/TicketCard";
import Ticket from "./(models)/Model";

const getTickets = async () => {
  try {
    const tickets = await Ticket.find();

    return tickets;
  } catch (error) {
    console.log("Error to get tickets: ", error);
    return [];
  }
};

const Dashboard = async () => {
  const tickets = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map((ticket) => ticket.category)),
  ];

  console.log(uniqueCategories);

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{category}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  ?.filter((ticket) => ticket.category == category)
                  .map((filteredTicket) => (
                    <TicketCard ticket={filteredTicket} key={filteredTicket._id} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
