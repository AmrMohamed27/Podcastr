import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { GeneratePodcastProps } from "@/types";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const GeneratePodcast = ({
  field,
  setAudioStorageId,
  setAudio,
  voiceType,
  audio,
  voicePrompt,
  setVoicePrompt,
  setAudioDuration,
}: GeneratePodcastProps) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  return (
    <>
      {/* TextArea */}
      <Textarea
        placeholder="Provide text to AI to generate audio"
        {...field}
        className="bg-black-1 border-none focus-visible:border-orange-1"
      />
      {/* Generate */}
      <Button className="bg-orange-1 text-white hover:bg-black-1 transition-all duration-500 ease-in-out">
        {isGenerating ? (
          <div className="flex flex-row items-center gap-2">
            <span>Generating</span>
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        ) : (
          "Generate Podcast"
        )}
      </Button>
    </>
  );
};

export default GeneratePodcast;
