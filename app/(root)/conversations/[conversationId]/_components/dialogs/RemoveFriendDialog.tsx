"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useMutationState } from '@/hooks/useMutationState'

// import { error } from 'console'
import { ConvexError } from 'convex/values'
import React, { Dispatch, SetStateAction } from 'react'
import { toast } from 'sonner'

type Props = {
    conversationId :Id<"conversations">
    open :boolean
    setOpen :Dispatch<SetStateAction<boolean>>
}

const RemoveFriendDialog = ({conversationId,open,setOpen}: Props) => {
    const {mutate:removeFriend,pending} =useMutationState(api.friend.remove)
    const handleRemoveFriend =async()=>
    {
        removeFriend({conversationId}).then(()=>
        {
            toast.success("Removed friend")
        }).catch(error=>
        {
            error instanceof ConvexError ?error.data:
            "Unexpected Error occured"
        }
        )
    }
  return (
  <AlertDialog open ={open}
  onOpenChange={setOpen}>
    <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>
                Are you sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
                This Action cannot be undone. All messages will be gonna deleted this user
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel
            disabled={pending}
            >
                Cancel
                
            </AlertDialogCancel>
            <AlertDialogAction
            disabled={pending}
            onClick={handleRemoveFriend}>
                Remove

            </AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>

  </AlertDialog>
  )
}

export default RemoveFriendDialog