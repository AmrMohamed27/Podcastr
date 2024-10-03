import { z } from "zod";

const title = z
  .string()
  .min(1, { message: "Title must be at least 1 character" })
  .trim();

export const categoriesArray = [
  "AI & Machine Learning",
  "Album Reviews",
  "Alternative Health",
  "Ancient Civilizations",
  "Arts",
  "Audio Drama",
  "Biographies",
  "Biology",
  "Breaking News",
  "Business",
  "Children’s Stories",
  "Christianity",
  "Cold Cases",
  "Comedy",
  "Courses & Tutorials",
  "Crafts",
  "Criminal Psychology",
  "DJ Mixes",
  "Design",
  "Destination Guides",
  "Documentary",
  "Education",
  "Entrepreneurship",
  "Family Activities",
  "Fantasy",
  "Fashion",
  "Film & TV",
  "Film History",
  "Finance",
  "Fitness",
  "Food & Drink",
  "Football",
  "Gaming",
  "Gadgets",
  "Global Affairs",
  "Goal Setting",
  "Government & Policy",
  "Hobbies",
  "History",
  "Home Improvement",
  "Improv",
  "Investigative Journalism",
  "Islam",
  "Kids & Family",
  "Language Learning",
  "Leadership",
  "Leisure",
  "Life Coaching",
  "Literature",
  "Local News",
  "Medicine",
  "Mental Health",
  "Military History",
  "Mindfulness",
  "Movie Reviews",
  "Motivation",
  "Music",
  "Music Commentary",
  "Music History",
  "MMA",
  "Mystery",
  "Nutrition",
  "Parenting",
  "Performing Arts",
  "Personal Development",
  "Personal Journals",
  "Philosophy",
  "Photography",
  "Physics",
  "Political Commentary",
  "Productivity",
  "Real Estate",
  "Relationships",
  "Religion & Spirituality",
  "Satire",
  "Science",
  "Science Fiction",
  "Self-Improvement",
  "Sketch Comedy",
  "Soccer",
  "Social Commentary",
  "Software Development",
  "Sports",
  "Sports Analysis",
  "Stand-up",
  "Storytelling",
  "Technology",
  "Travel",
  "Travel Stories",
  "Travel Tips & Hacks",
  "True Crime",
  "TV Shows Commentary",
  "Visual Arts",
  "World History",
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

const createSchema = z.object({
  title: title,
  categories: categoriesEnum,
  description: description,
  audioPrompt: audioPrompt,
  imgPrompt: imgPrompt,
});

export default createSchema;
