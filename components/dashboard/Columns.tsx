"use client";
import { ColumnDef } from "@tanstack/react-table";
import { podcast } from "@/constants";
import Image from "next/image";
import { formatDuration, formatNumberWithCommas } from "@/lib/utils";
import { ArrowUpDown, Headphones, Clock } from "lucide-react";

export const columns: ColumnDef<podcast>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "imgURL",
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={row.getValue("imgURL")}
        alt={row.getValue("title")}
        width={50}
        height={54}
        className="rounded"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "plays",
    header: ({ column }) => {
      return (
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Plays
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex flex-row items-center gap-2">
        <Headphones />
        <span>{formatNumberWithCommas(row.getValue("plays"))}</span>
      </div>
    ),
  },
  {
    accessorKey: "duration",
    header: ({ column }) => {
      return (
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Duration
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const duration: { hours: number; minutes: number; seconds: number } =
        row.getValue("duration");
      return (
        <div className="flex flex-row items-center gap-2">
          <Clock />
          <span>{formatDuration(duration)}</span>
        </div>
      );
    },
  },
];
