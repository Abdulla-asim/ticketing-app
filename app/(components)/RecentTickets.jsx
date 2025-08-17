import Ticket from "../(models)/Ticket";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "@/app/(components)/StatusDisplay";

const RecentTickets = async ({ tickets }) => {
  return (
    <div className="w-full">
      {tickets?.map((ticket) => (
        <div
          className="flex p-4 border-b-1 w-full justify-between"
          key={ticket._id}
        >
          <div className="flex gap-5">
            <StatusDisplay status={ticket.status} />
            <div>{ticket.title}</div>
          </div>
          <div className="flex">
            {/* <span>{ticket.updatedAt.toLocaleString()}</span> */}
            <PriorityDisplay priority={ticket.priority} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTickets;
