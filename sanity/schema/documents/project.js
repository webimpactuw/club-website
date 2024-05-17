export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 48,
      },
    },
    {
      name: "link",
      title: "Deployment Link",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lead', 
      title: 'Project Lead', 
      type: 'text', 
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cm-1',
      title: "Coding Member 1",
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cm-2',
      title: "Coding Member 2",
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cm-3',
      title: "Coding Member 3",
      type: 'text',
    },
    {
      name: 'cm-4',
      title: "Coding Member 4",
      type: 'text',
    },
    {
      name: 'dm-1',
      title: "Design Member 1",
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dm-2',
      title: "Design Member 2",
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dm-3',
      title: "Design Member 3",
      type: 'text',
    },
    {
      name: 'dm-4',
      title: "Design Member 4",
      type: 'text',
    }
  ],
};
