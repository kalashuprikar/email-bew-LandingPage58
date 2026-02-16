import React from "react";
import { useDrop } from "react-dnd";
import { cn } from "@/lib/utils";
import { ContentBlock } from "./types";

interface DropZoneProps {
  position: number;
  onBlockDrop: (block: ContentBlock, position: number) => void;
  showIndicator?: boolean;
}

export const DropZone: React.FC<DropZoneProps> = ({
  position,
  onBlockDrop,
  showIndicator = false,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "block",
    drop: (item: any) => {
      if (item.block) {
        onBlockDrop(item.block, position);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={cn(
        "h-1 w-full my-2 transition-all duration-200 cursor-default",
        isOver ? "h-3 bg-valasys-orange rounded" : "bg-transparent hover:bg-gray-300"
      )}
      style={{ minHeight: isOver ? "12px" : "4px" }}
    />
  );
};
