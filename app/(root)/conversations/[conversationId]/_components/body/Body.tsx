"use client"
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useConversation } from '@/hooks/useConversation'
import { useQuery } from 'convex/react'
import React, { Dispatch, SetStateAction } from 'react'
import Message from './Message'
// import { useMutationState } from '@/hooks/useMutationState'
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import CallRoom from './CallRoom'

type Props = {
 callType: "audio" |"video" |null;
 setCallType:
 Dispatch<SetStateAction<"audio"|"video"|null>>;
}

const Body = ({callType,setCallType }: Props) => {
    const {conversationId} =useConversation();
    const messages =useQuery(api.messages.get,{
        id: conversationId as Id<"conversations">
    });
    

    


    
    
    

  return (
    <div className='flex-1 w-full flex overflow-y-scroll
    flex-col-reverse gap-2 p-3 no-scrollbar'>{!callType ? messages?.map(({
        message,senderImage,senderName,isCurrentUser
    },index) =>
    {
        const lastByUser=messages[index-1]?.message.senderId
         === messages[index].message.senderId;
    

        return <Message key={message._id} fromCurrentUser={isCurrentUser}
        senderImage={senderImage}
        senderName={senderName} lastByUser={lastByUser} content={message.content}
        createdAt ={message._creationTime}  type={message.type} />

    }): <CallRoom audio={callType==="audio" || callType==="video"}
        video={callType==="video"}
        handleDisconnect={()=> setCallType(null)}
       
    />}</div>
  )
}

export default Body