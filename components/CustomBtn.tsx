import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils"; // if using ShadCN's `cn` utility
import { MdEdit } from "react-icons/md";

type CustomBtnProps = {
  text?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  bg?: string;
  hover?: string;
  w?: string;
  loading?: boolean;
  icon?: any;
  textColor?: string;
  
};

const CustomBtn = ({
  text,
  handleClick,
  bg,
  loading = false,
  icon = "",
  w,
  hover = "",
  textColor = "",
}: CustomBtnProps) => {
  return (
    <Button
      onClick={handleClick}
      // className={`${bg} ${hover} ${w} text-white`}
      // cursor={loading ? "not-allowed" : "pointer"}
      className={cn(
        bg,
        hover,
        
        w,
        textColor,
        "text-white flex items-center justify-center gap-2"
      )}
      disabled={loading}
    >
      {icon}
      {loading ? <Loader2 className="animate-spin h-4 w-4" /> : text}
    </Button>
  );
};

export default CustomBtn;
