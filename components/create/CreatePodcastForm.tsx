"use client";
import createSchema from "@/schemas/createSchema";
import { categoriesEnum } from "@/schemas/createSchema";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

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
  const [searchText, setSearchText] = useState<string>("");
  const [filteredCategories, setFilteredCategories] = useState(
    categoriesEnum.options.filter((category) => category)
  );

  useEffect(() => {
    setFilteredCategories(
      Array.from(categoriesEnum.options).filter((category) =>
        category.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  className="bg-black-1 border-none focus-visible:border-orange-1"
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
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="bg-black-1 outline-none border-none placeholder:text-slate-400 z-50">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="text-white-1 z-50 bg-black-1 placeholder:text-slate-400">
                  {/* Search input field */}
                  <div className="px-4 py-2">
                    <Input
                      placeholder="Search categories..."
                      value={searchText}
                      onChange={handleSearch} // Update search term
                      className="bg-black-1 border-none focus-visible:border-orange-1 placeholder:text-slate-400"
                    />
                  </div>
                  {/* Filtered category options */}
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                      <SelectItem key={category} value={category} className="">
                        {category}
                      </SelectItem>
                    ))
                  ) : (
                    <p className="px-4 py-2 text-slate-400">
                      No categories found.
                    </p>
                  )}
                </SelectContent>
              </Select>
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
                  className="bg-black-1 border-none focus-visible:border-orange-1 focus-visible:outline-none"
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
                <Textarea
                  placeholder="Provide text to AI to generate audio"
                  {...field}
                  className="bg-black-1 border-none focus-visible:border-orange-1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Thumbnail Prompt */}
        <FormField
          control={form.control}
          name="imgPrompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Podcast thumbnail</FormLabel>
              <div className="flex flex-row justify-between items-center bg-black-1 h-auto">
                <FormControl className="h-full">
                  <Input
                    placeholder="AI prompt to generate thumbnail"
                    {...field}
                    className="bg-black-1 border-none py-4 mr-1"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    className="h-auto file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-1 file:text-black-1 hover:file:bg-orange-1/70 border-none bg-black-2"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        // Handle file upload logic
                        console.log("Selected file: ", file.name);
                      }
                    }}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-orange-1 text-white">
          Submit & publish podcast
        </Button>
      </form>
    </Form>
  );
};

export default CreatePodcastForm;
