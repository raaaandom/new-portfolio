import { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  fields: [
    {
      name: 'links',
      type: 'array',
      label: 'Link Tree Links',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'dest',
          type: 'text',
          required: true,
          label: 'Destination URL',
        }
      ],
    },
  ],
};