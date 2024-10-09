import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    audioStorageId: v.optional(v.id("_storage")),
    user: v.id("users"),
    title: v.string(),
    description: v.string(),
    audioUrl: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    imageStorageId: v.optional(v.id("_storage")),
    duration: v.object({
      hours: v.number(),
      minutes: v.number(),
      seconds: v.number(),
    }),
    createdAt: v.object({
      year: v.number(),
      month: v.number(),
      day: v.number(),
      hour: v.number(),
      minute: v.number(),
      second: v.number(),
    }),
    plays: v.number(),
    category: v.string(),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
    voicePrompt: v.string(),
    imagePrompt: v.string(),
    voiceType: v.string(),
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_title", { searchField: "title" })
    .searchIndex("search_body", { searchField: "description" }),
  users: defineTable({
    email: v.string(),
    imageURL: v.string(),
    clerkId: v.string(),
    username: v.string(),
  }),
});
