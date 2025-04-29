export default {
  name: "eventDay",
  title: "Day",
  type: "document",
  fields: [
    // TODO: Add date field
    // TODO: Add title field
    {
      name: "day",
      title: "Day Number",
      type: "number",
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
