"user client"

import { Button } from "@/components/ui/button"

const PromoteBtn = ({user, action}) => {
  return (
    <Button className="max-w-20 text-foreground bg-primary">{action}</Button>
  )
}

export default PromoteBtn