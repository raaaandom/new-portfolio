import { CollectionConfig } from 'payload';

export const LinkTree: CollectionConfig = {
  slug: 'link-tree',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'The URL path (e.g., "home", "contacts")',
      }
    },
    {
      name: 'links',
      type: 'array',
      label: 'List of Links',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'dest', type: 'text', required: true, label: 'Destination path' }
      ],
    },
  ],
};