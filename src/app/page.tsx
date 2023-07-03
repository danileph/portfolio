import Image from 'next/image'
import About from "@/components/sections/about/About";
import {Experience} from "@/components/sections/experience";
import Projects from "@/components/sections/projects/Projects";
import {getHomeContent} from "@/api/getHomeContent";
import Technologies from "@/components/sections/technologies/Technologies";
import RouteChangeProvider from "@/components/route/RouteChangeProvider";

export default async function Home() {
  const homeContentPromis = getHomeContent();
  const [homeContent] = await Promise.all([homeContentPromis]);

  return (
    <main className="min-h-screen">
      <RouteChangeProvider>
        <About content={homeContent?.find(block => block.title === 'About')?.content} />
        <Experience content={homeContent?.find(block => block.title === 'Experience')?.content} />
        <Projects content={homeContent?.find(block => block.title === 'Projects')?.content} />
        <Technologies content={homeContent?.find(block => block.title === 'Tech stack')?.content} />
      </RouteChangeProvider>
    </main>
  )
}
