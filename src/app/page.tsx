import Image from "next/image";
import About from "@/components/sections/about/About";
import { Experience } from "@/components/sections/experience";
import Projects from "@/components/sections/projects/Projects";
import { getHomeContent } from "@/api/getHomeContent";
import Technologies from "@/components/sections/technologies/Technologies";
import RouteChangeProvider from "@/components/route/RouteChangeProvider";
import RootProvider from "@/components/root-provider/RootProvider";
import { Suspense } from "react";
import Skills from "@/components/sections/skills/Skills";
import { Wrapper } from "@/components/wrapper";
import { Title } from "@/components/ui/title";
import { routes } from "@/lib/consts/routes";
import Typography from "@/components/ui/typography/Typography";
import { ProjectsClient } from "@/components/sections/projects/ProjectsClient";
import { Section } from "@/components/section";

export const revalidate = 0;
export default async function Home() {
  // const homeContentPromis = getHomeContent();
  // const [homeContent] = await Promise.all([homeContentPromis]);

  return (
    <main className="min-h-screen">
      <RootProvider>
        <About />
        <Skills />
        {routes.map(
          (route) =>
            route.isShown && (
              <Section
                key={route.src}
                name={route.src}
                className={"lg:py-32 md:py-20 py-10"}
              >
                <Wrapper className={"w-full max-w-[1000px]"}>
                  <Title className={"font-semibold md:text-center"}>
                    {route.name}
                  </Title>
                  <Typography className={"mb-10 md:mb-24 md:text-center"}>
                    {route.description}
                  </Typography>
                </Wrapper>
                <Suspense fallback={route.fallback}>{route.component}</Suspense>
                {/*{route.fallback}*/}
              </Section>
            )
        )}
      </RootProvider>
    </main>
  );
}
