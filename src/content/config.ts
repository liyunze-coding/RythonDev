import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        color: z.string().optional(),
        description: z.string(),
        author: z.string(),
        tags: z.array(z.string()).optional(),
        pubDate: z.date(),
    }),
});

export const collections = {
    blog: blogCollection,
};
