import { Button } from "@/components/ui/button";
import PromoteBtn from "@/app/(components)/PromoteBtn"

const User = ({user}) => {
  return (
    <div className="grid grid-cols-3 items-center justify-items-center">
        <div>{user.name}</div>
        <div>{user.role}</div>
        <div className="flex gap-5">
            <PromoteBtn user={user} action="Promote"/>
            <Button className="max-w-20 bg-secondary text-foreground">Delete</Button>
        </div>
    </div>
  )
}

export default User;