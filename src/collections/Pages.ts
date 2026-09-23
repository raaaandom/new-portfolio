import { CollectionConfig, Block } from 'payload';

const HeadingBlock: Block = {
  slug: 'heading',
  fields: [
    { name: 'heading', type: 'text', required: true },
  ],
};

const ContentBlock: Block = {
  slug: 'content',
  fields: [
    { name: 'text', type: 'richText', required: true },
  ],
};

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'Internal title for the admin panel' }
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'The URL path (e.g., "about", "my-setup")' }
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        HeadingBlock,
        ContentBlock,
      ],
    },
  ],
};