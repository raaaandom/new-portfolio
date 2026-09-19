import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { notFound } from 'next/navigation';

export default async function DynamicLinkPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: 'link-tree',
    where: {
      slug: { equals: slug },
    },
  });

  const pageData = docs[0];

  // TODO: custom nav 404
  if (!pageData) {
    return notFound(); 
  }

  return (
    <main className="
      flex flex-col items-center justify-center
      min-h-screen p-6
      bg-white dark:bg-black
      select-none"
    >

      <h2 className="
        max-w-md w-full
        py-2
        text-3xl
        text-black dark:text-white"
      >
        {pageData.title}
      </h2>

      <div className="flex flex-col w-full max-w-md">
        {pageData.links?.map((link, index) => (
          <a 
            key={index} 
            href={link.dest}
            className="
            w-full text-start
            text-lg
            bg-white dark:bg-black
            hover:bg-black dark:hover:bg-white
            hover:font-bold
            active:bg-black dark:active:bg-white
            text-black dark:text-white
            hover:text-white dark:hover:text-black
            active:text-white dark:active:text-black"
          >
            {
              index === pageData.links!.length - 1 ? '└─ ' : '├─ '} {link.title
            }
          </a>
        ))}
      </div>
      
    </main>
  );
}