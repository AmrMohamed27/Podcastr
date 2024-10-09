/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import createSchema, {
  categoriesEnum,
  voiceTypeEnum,
} from "@/schemas/createSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";
import { VoiceType } from "../../types/index";
import SelectFromEnum from "./SelectFromEnum";
import GeneratePodcast from "./GeneratePodcast";
import GenerateThumbnail from "./GenerateThumbnail";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

// TODO: Last thing we did was to add the ability to select the AI voice.

const CreatePodcastForm = () => {
  const form = useForm<z.infer<typeof createSchema>>({
    resolver: zodResolver(createSchema),
    defaultValues: {
      title: "",
      description: "",
      audioPrompt: "",
      imgPrompt: "",
    },
  });
  function onSubmit(values: z.infer<typeof createSchema>) {
    console.log(values);
  }

  // State variables

  // Title
  // const [podcastTitle, setPodcastTitle] = useState<string>("");
  // Categories
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // Description
  // const [podcastDescription, setPodcastDescription] = useState<string>("");
  // Generate Audio
  const [audioPrompt, setAudioPrompt] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [audioDuration, setAudioDuration] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [aiVoice, setAiVoice] = useState<string | null>(null);
  const [audioChoice, setAudioChoice] = useState<string>("upload-audio");
  const [uploadedAudio, setUploadedAudio] = useState<File | null>(null);
  // Generate Thumbnail
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [imagePrompt, setImagePrompt] = useState<string>("");
  // Submit
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handle option change
  const handleOptionChange = (value: string) => {
    setAudioChoice(value);
  };

  // Handler for the file input
  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedAudio(file);
      // Optionally, you can handle file preview or processing here
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-h-screen"
      >
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Podcast title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Provide a title for your podcast"
                  {...field}
                  className="bg-black-1 border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Categories */}
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <FormControl>
                <SelectFromEnum
                  field={field}
                  passedEnum={categoriesEnum}
                  placeholder={"Select category"}
                  value={selectedCategory}
                  setValue={setSelectedCategory}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a short description about the podcast"
                  {...field}
                  className="bg-black-1 border-none focus-visible:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Separator */}
        <div className="h-px w-full bg-black-5"></div>
        <RadioGroup
          defaultValue="upload-audio"
          className="flex flex-row gap-16"
          onValueChange={handleOptionChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="upload-audio" id="upload-audio" />
            <Label htmlFor="upload-audio">Upload Audio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="generate-ai" id="generate-ai" />
            <Label htmlFor="generate-ai">Generate Audio with AI</Label>
          </div>
        </RadioGroup>
        {audioChoice === "upload-audio" ? (
          // Upload User's Audio
          <>
            <FormField
              control={form.control}
              name="audioFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Audio</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="audio/*"
                      {...field}
                      className="h-auto file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-1 file:text-white-1 hover:file:bg-orange-1/70 border-none bg-black-2 file:cursor-pointer"
                      onChange={handleAudioUpload}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : audioChoice === "generate-ai" ? (
          // Generate Podcast using AI
          <>
            {/* Select Voice */}
            <FormField
              control={form.control}
              name="voiceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>AI Prompt to generate podcast</FormLabel>
                  <FormControl>
                    <SelectFromEnum
                      field={field}
                      passedEnum={voiceTypeEnum}
                      placeholder={"Select AI Voice"}
                      value={aiVoice}
                      setValue={setAiVoice}
                      hasAudio={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Audio Prompt */}
            <FormField
              control={form.control}
              name="audioPrompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>AI Prompt to generate podcast</FormLabel>
                  <FormControl>
                    <GeneratePodcast
                      field={field}
                      setAudio={setAudioUrl}
                      setAudioDuration={setAudioDuration}
                      setAudioStorageId={setAudioStorageId}
                      voiceType={aiVoice}
                      audio={audioUrl}
                      voicePrompt={audioPrompt}
                      setVoicePrompt={setAudioPrompt}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <>Something went wrong</>
        )}
        {/* Thumbnail Prompt */}
        <FormField
          control={form.control}
          name="imgPrompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Podcast thumbnail</FormLabel>
              <FormControl>
                <GenerateThumbnail field={field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-orange-1 text-white hover:bg-black-1 transition-all duration-500 ease-in-out"
        >
          {isSubmitting ? (
            <div className="flex flex-row items-center gap-2">
              <span>Submitting</span>
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          ) : (
            "Submit & publish podcast"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CreatePodcastForm;
