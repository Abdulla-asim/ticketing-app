import RecentTickets from "../(components)/RecentTickets";
import Chart1 from "../(components)/Charts/Chart1";
import { getTicketStats } from "../actions";
import Ticket from "../(models)/Ticket";
import { Suspense } from "react";

const Dashboard = async () => {
  const stats = await getTicketStats();

  const getRecentTickets = async () => {
    const tickets = await Ticket.find().sort({ updatedAt: -1 });

    return tickets;
  };

  const recentTickets = await getRecentTickets();

  return (
    // <div>Dashboard</div>
    <div className="flex justify-center">
      <div className="flex not-lg:flex-col items-center justify-between max-w-7xl w-full gap-10 lg:gap-2">
        <div className="flex flex-1 flex-col items-center h-[80vh] pt-5 border-2">
          <h3>Recent Updates</h3>
          <div className="scroll-auto overflow-y-auto p-4 w-full">
            <Suspense fallback="Loading...">
              <RecentTickets tickets={recentTickets} />
            </Suspense>
          </div>
        </div>
        <div className="flex-1 items-center flex flex-col gap-5">
          <div className="flex flex-col items-center w-full border-2">
            <h3>Chart 1</h3>
            <Suspense fallback="loading...">
              <Chart1 stats={stats} />
            </Suspense>
          </div>
          <div className="flex flex-col items-center w-full border-2">
            <h3>Chart 2 </h3>
            <Suspense fallback="loading...">
              <Chart1 stats={stats} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
