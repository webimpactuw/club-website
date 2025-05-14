export default {
  name: "eventDay",
  title: "Date",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category (Coding/Design/etc.)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "events",
      title: "Event List (text before colon ':' is bolded)",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
