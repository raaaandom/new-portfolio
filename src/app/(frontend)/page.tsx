import { getPayload } from 'payload';
import configPromise from '@payload-config';

export default async function LinkTreePage() {
  const payload = await getPayload({ config: configPromise });

  const homePageData = await payload.findGlobal({
    slug: 'home-page',
  });

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
        rxndxm
      </h2>

      <div className="flex flex-col w-full max-w-md gap-1">
        {homePageData.links?.map((link, index) => (
          <a 
            key={index} 
            href={link.dest}
            className="
            w-full text-start
            text-lg
            bg-white dark:bg-black
            hover:bg-black dark:hover:bg-white
            active:bg-black dark:active:bg-white
            text-black dark:text-white
            hover:text-white dark:hover:text-black
            active:text-white dark:active:text-black"
          >
            {link.title}
          </a>
        ))}
      </div>
      
    </main>
  );
}