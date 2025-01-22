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

const DeleteGroupDialog = ({conversationId,open,setOpen}: Props) => {
    const {mutate:deleteGroup,pending} =useMutationState(api.conversation.deleteGroup)
    const handleDeleteGroup =async()=>
    {
        deleteGroup({conversationId}).then(()=>
        {
            toast.success("Group Deleted")
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
                This Action cannot be undone. All messages will be gonna deleted this Group
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
            onClick={handleDeleteGroup}>
                Remove

            </AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>

  </AlertDialog>
  )
}

export default DeleteGroupDialog