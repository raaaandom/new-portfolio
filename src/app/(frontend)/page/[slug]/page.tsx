import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { notFound } from 'next/navigation';

function HeadingSection({ heading }: { heading: string }) {
  return (
    <div className="
        text-start mt-16
    ">

      <h1 className="text-4xl md:text-6xl">{heading}</h1>

    </div>
  );
}

function ContentSection({ text }: { text: string }) {
  return (
    <div className="w-full max-w-3xl mx-auto whitespace-pre-wrap text-lg mt-6">
      {text}
    </div>
  );
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
  });

  const pageData = docs[0];
  if (!pageData) return notFound();

  return (
    <main className="min-h-screen p-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-3xl mx-auto pt-32">
        
        {pageData.layout?.map((block, index) => {
          
          if (block.blockType === 'heading') {
            return <HeadingSection key={index} heading={block.heading} />;
          }
          
          if (block.blockType === 'content') {
            return <ContentSection key={index} text={block.text} />;
          }

        })}

      </div>
    </main>
  );
}