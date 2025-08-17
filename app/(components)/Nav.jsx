import Link from "next/link";
import { Button } from "@/components/ui/button";
import ToggleMode from "./ToggleMode";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center border bg-background mb-9 py-5">
      <div className="flex justify-between max-w-7xl w-full">
        <div className="flex items-center space-x-4">
          <Link href="/Dashboard" className="text-primary">
            Dashboard
          </Link>
          <Link href="/" className="text-foreground underline-offset-5">
            Tickets
          </Link>
          <Link href="/Users" className="text-foreground">
            Users
          </Link>
          <Link href="/TicketPage/new" className="text-foreground">
            Create a Ticket
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ToggleMode />
          <Link href="/login">
            <Button className="cursor-pointer">Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
