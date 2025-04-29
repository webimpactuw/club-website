export default {
  name: "eventDay",
  title: "Day",
  type: "document",
  fields: [
    {
      name: "day",
      title: "Day Number",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
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
      name: "events",
      title: "Event List",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
