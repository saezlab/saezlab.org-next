import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const resources = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
    schema: z.object({
        name: z.string(),
        featured: z.boolean().default(false),
        short: z.string(),
        description: z.string(),
        lang: z.array(z.enum(["Python", "R", "Java", "JavaScript"])),
        home: z.string().url(),
        issues: z.string().url(),
        docs: z.string().url(),
        logo: z.string(),
        tags: z.array(reference("tag"))
    })
});

// export const tagSchema = z
//     .object({
//         id: z.string(),
//         slug: z.string().optional(),
//     }).superRefine((data, ctx) => {
//         if (!data.slug) {
//             data.slug = data.id.toLowerCase().replace(/\s+/g, "-");
//         }
//     });

// export const tagSchema = z.object({
//     id: z.string(),
//     slug: z.string().default("").transform((slug, ctx) =>
//         slug || ctx.originalInput.id.toLowerCase().replace(/\s+/g, "-")
//     ),
// });

// export const tags = defineCollection({
//     loader: file("src/content/tags/tags.json"),
//     schema: tagSchema,
// });


export const collections = { resources };
