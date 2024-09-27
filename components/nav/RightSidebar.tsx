"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight as RightArrow } from "lucide-react";
import Link from "next/link";
import PodcastCarousel from "./PodcastCarousel";
import { topPodcasters } from "@/constants";
import Image from "next/image";

const RightSidebar = () => {
  return (
    <section
      className={`bg-black-1 text-white-1 min-h-screen flex-col gap-8 w-[349px] py-8 px-8 z-50 hidden xl:flex`}
    >
      <div className="flex flex-row justify-between items-center">
        {/* Profile */}
        <div className="flex flex-row gap-2 items-center">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="avatar"
              width={50}
              height={50}
            />
            <AvatarFallback>Un</AvatarFallback>
          </Avatar>
          <span className="font-semibold">User Name</span>
        </div>
        <Link href={"/profile"}>
          <RightArrow color="#F97535" />
        </Link>
      </div>
      {/* Fans also Like */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center text-lg font-bold">
          <span>Fans Also Like</span>
          <Link href="/discover" className="text-orange-1">
            See More
          </Link>
        </div>
        <PodcastCarousel />
      </div>
      {/* Top Podcasters */}
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex flex-row justify-between items-center text-lg font-bold">
          <span>Top Podcasters</span>
          <Link href="/discover" className="text-orange-1">
            See More
          </Link>
        </div>
        <ul className="flex flex-col gap-4">
          {topPodcasters.map(
            ({ id, name, username, numberOfPodcasts, image }) => (
              <li
                key={id}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src={image}
                    alt={name}
                    width={44}
                    height={44}
                    className="rounded"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold">{name}</h3>
                    <p className="text-white-1/70 text-xs">{username}</p>
                  </div>
                </div>
                <p className="text-white-1 text-sm">
                  {numberOfPodcasts} Podcasts
                </p>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default RightSidebar;
