export default {
  name: "officer",
  title: "Officer",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "index",
      title: "Index",
      type: "number",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "President", value: "president" },
          { title: "Coding", value: "coding" },
          { title: "Design", value: "design" },
          { title: "Social Media", value: "social-media" },
          { title: "Finance", value: "finance" },
        ],
      },
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
      name: "linkedIn",
      title: "LinkedIn",
      type: "url", 
      validation: (Rule) => Rule.required().uri({
        scheme: ["http", "https"],
      }),
    },
  ],
};
