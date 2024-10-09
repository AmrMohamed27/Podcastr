import { z } from "zod";

const title = z
  .string()
  .min(1, { message: "Title must be at least 1 character" })
  .trim();

export const categoriesArray = [
  "AI & Machine Learning",
  "Arts",
  "Biographies",
  "Biology",
  "Breaking News",
  "Business",
  "Comedy",
  "Courses & Tutorials",
  "Design",
  "Documentary",
  "Education",
  "Fantasy",
  "Film & TV",
  "Fitness",
  "Food & Drink",
  "Gaming",
  "History",
  "Islam",
  "Literature",
  "Medicine",
  "Movie Reviews",
  "Music",
  "Mystery",
  "Philosophy",
  "Photography",
  "Physics",
  "Political Commentary",
  "Religion & Spirituality",
  "Science",
  "Science Fiction",
  "Sketch Comedy",
  "Social Commentary",
  "Software Development",
  "Sports",
  "Technology",
  "Travel",
  "True Crime",
] as const;
export const categoriesEnum = z.enum(categoriesArray);
type categoriesEnum = z.infer<typeof categoriesEnum>;
const description = z
  .string()
  .min(5, { message: "Description must be at least 5 characters" })
  .trim();
const audioPrompt = z
  .string()
  .min(1, { message: "Audio Prompt must be at least 1 character" })
  .max(200, { message: "Audio Prompt must be at most 200 characters" })
  .trim();
const imgPrompt = z
  .string()
  .min(1, { message: "Audio Prompt must be at least 1 character" })
  .max(200, { message: "Audio Prompt must be at most 200 characters" })
  .trim();
export const voiceTypeEnum = z.enum([
  "alloy",
  "echo",
  "fable",
  "onyx",
  "nova",
  "shimmer",
]);

const imgFile = z.string();
const audioFile = z.string();

const createSchema = z.object({
  title: title,
  categories: categoriesEnum,
  description: description,
  audioPrompt: audioPrompt.optional(),
  imgPrompt: imgPrompt.optional(),
  voiceType: voiceTypeEnum.optional(),
  imgFile: imgFile.optional(),
  audioFile: audioFile.optional(),
});

export default createSchema;
