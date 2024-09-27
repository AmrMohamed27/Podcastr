"use client";
import Image from "next/image";
import React from "react";

const PodcastCard = ({
  id,
  title,
  host,
  imgURL,
}: {
  id: number;
  title: string;
  host: string;
  imgURL: string;
}) => {
  return (
    <div key={id} className="flex flex-col gap-2">
      <Image
        src={imgURL}
        alt={title}
        width={174}
        height={174}
        className="rounded"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-bold text-nowrap">{title}</h3>
        <p className="text-white-1/70 text-xs">{host}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
