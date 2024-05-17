export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 48,
      },
    },
    {
      name: "link",
      title: "Deployment Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lead",
      title: "Project Lead",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "coding_members",
      title: "Coding Members",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "design_members",
      title: "Design Members",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
