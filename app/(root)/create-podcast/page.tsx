import CreatePodcastForm from "@/components/create/CreatePodcastForm";

const CreatePodcast = () => {
  return (
    <section className="flex-1 bg-black-3 text-white-1 min-h-screen flex flex-col gap-12 px-2 sm:px-8 py-8">
      <h1 className="font-bold text-2xl">Create a Podcast</h1>
      <CreatePodcastForm />
    </section>
  );
};

export default CreatePodcast;
