import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdClose, } from "react-icons/md";


type ModalProps = {
    icon?: React.ReactNode;
    title: string,
    children: React.ReactNode;
}

const CustomModal = ({icon, title, children}: ModalProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
            {icon}
        </DialogTrigger>
        <DialogContent  className="bg-gray-800 border-gray-800">
             <DialogClose asChild>
            <button
              className="absolute right-4 top-4 rounded-full p-2 text-red-500 hover:bg-red-500/10"
              aria-label="Close"
            >
              <MdClose size={20} />
            </button>
          </DialogClose>

          <DialogHeader>
            <DialogTitle className="text-white font-bold text-2xl">{title}</DialogTitle>
            <DialogDescription>
              {children}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomModal;
