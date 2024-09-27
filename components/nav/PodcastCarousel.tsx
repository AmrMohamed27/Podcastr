import { podcastData } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
const PodcastCarousel = () => {
  return (
    <Carousel className="relative rounded-xl">
      <CarouselContent className="rounded-xl relative">
        {podcastData.map(({ id, title, imgURL, host }) => (
          <CarouselItem
            className="relative rounded-xl overflow-hidden"
            key={id}
          >
            <Image
              src={imgURL}
              alt={title}
              width={150}
              height={150}
              className="w-full h-full rounded-xl"
            />
            <div className="flex flex-col gap-0 glassmorphism-black text-white-1 absolute bottom-0 w-full px-4 py-4 rounded-b-xl overflow-hidden">
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="text-white-1/70 text-xs">{host}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 z-10">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default PodcastCarousel;
