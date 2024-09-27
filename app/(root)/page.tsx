import LatestPodcasts from "@/components/dashboard/LatestPodcasts";
import TrendingPodcasts from "@/components/dashboard/TrendingPodcasts";
import React from "react";

const Home = () => {
  return (
    <section
      className={`flex-1 bg-black-3 text-white-1 min-h-screen flex flex-col gap-12 px-2 sm:px-8 py-8`}
    >
      <TrendingPodcasts />
      <LatestPodcasts />
    </section>
  );
};

export default Home;
