export default {
  name: "week",
  title: "Week",
  type: "document",
  fields: [
    {
      name: "weeknum",
      title: "Week Number",
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
      name: "workshop",
      title: "Workshop",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "topic",
      title: "Topic",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

// week, date, workshop, topic
