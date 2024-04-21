"use client";

import { useState, useTransition, useRef, ElementRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { Textarea } from "@/components/ui/textarea";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";

interface BioModalProps {
  initialValue: string | null;
}

export const BioModal = ({ 
    initialValue
}: BioModalProps) => {
    const closeRef = useRef<ElementRef<"button">>(null);
    const [value, setValue] = useState(initialValue || "");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      startTransition(() =>{
        updateUser({ bio: value })
        .then(() => {
          toast.success("Your Bio is being updated")
          closeRef.current?.click();
        })
        .catch(() => toast.error("Something went wrong"));
      })
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit user bio</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className=" space-y-4">
            <Textarea 
              placeholder="User bio"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              disabled={isPending}
              className=" resize-none"
            />
            <div className=" flex justify-between items-center">
              <DialogClose asChild ref={closeRef}>
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </DialogClose>
              <Button 
                disabled={isPending}
                variant="primary" 
                type="submit"
              >
                Save
              </Button>
            </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
