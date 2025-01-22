import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export const useNavigation = ()=>
{
    const requestCount =useQuery(api.requests.count)
 const pathname =usePathname()
 const paths = useMemo(()=>
[
    {
     name :"Conversations",
     href: "/conversations",
     icon:<MessageSquare></MessageSquare>,
     active: pathname.startsWith(
        "/conversations"),
    },
    {
        name :"Friends",
        href: "/friends",
        icon: <Users />,
        active: pathname ==="/friends",
        count: requestCount,

    }

],[pathname,requestCount]
);
return paths;

};
