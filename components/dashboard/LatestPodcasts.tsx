import { DataTable } from "./DataTable";
import { podcastData } from "@/constants";
import { columns } from "./Columns";
import Link from "next/link";

const LatestPodcasts = () => {
  const data = podcastData.slice(0, 4);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-lg font-bold">Latest Podcasts</h2>
        <Link href="/discover" className="text-orange-1">
          See All
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default LatestPodcasts;
