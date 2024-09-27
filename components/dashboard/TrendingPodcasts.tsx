"use client";
import { podcastData } from "@/constants";
import PodcastCard from "./PodcastCard";

const TrendingPodcasts = () => {
  podcastData.sort((a, b) => b.plays - a.plays);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Header */}
      <div className="flex sm:justify-center md:justify-start sm:items-center md:items-start">
        <h2 className="text-lg font-bold">Trending Podcasts</h2>
      </div>
      {/* Container for podcast cards */}
      <div className="podcast_grid">
        {podcastData.slice(0, 4).map(({ id, title, host, imgURL }) => (
          <PodcastCard
            key={id}
            id={id}
            title={title}
            host={host}
            imgURL={imgURL}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingPodcasts;
