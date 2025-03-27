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
          { title: "Activities", value: "activities" },
          { title: "Projects", value: "projects" },
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
  ],
};
