import {getProjectContent} from "@/api/getProjectContent";
import {getProjects} from "@/api/getProjects";
import {Wrapper} from "@/components/wrapper";
import {Author} from "@/app/projects/[projectId]/author";
import Typography from "@/components/ui/typography/Typography";
import {Title} from "@/components/ui/title";
import {Carousel} from "@/components/carousel";
import {getExperience} from "@/api/getExperience";
import {Tag} from "@/components/ui/tag";

export default async function Project ({ params }:{ params: { projectId: string }}){
  console.log(params.projectId);
  const _projectData = getProjectContent(params.projectId);
  const _projects = getProjects();
  const _experience = getExperience();
  const [projectData, projects, experience] = await Promise.all([_projectData, _projects, _experience]);
  const thisProject = projects?.find(project => project.id === params.projectId);
  const thisExperience = experience?.find(exp => exp?.projects?.find(project => project.id === params.projectId))
  const images: {src: string, alt: string}[] =  thisProject?.images ? thisProject?.images?.map(img => ({src: img, alt: thisProject?.name ? thisProject.name : ''})) : [];

  return (
    <main className="min-h-screen pt-[70px]">
      <Wrapper>
        <Author />
        <Title className={'font-inter text-center md:my-24 my-16'}>{thisProject?.name}</Title>
      </Wrapper>
      <Carousel images={images} className={'my-16'} />
      <Wrapper className={'max-w-[800px]'}>
        {projectData?.map((block) => {
          if (block.type === 'heading_1') return <Title level={3} className={'!mb-6'}>{block.content}</Title>
          else if (block.type === 'paragraph') return  <Typography>{block.content}</Typography>
        })}
        {(thisProject?.myTechnologies || thisProject?.otherTechnologies) && (
          <>
            <Title level={3} className={'!mb-6'}>Стек технологий</Title>
            <div className={'flex flex-wrap -mt-2 mb-6'}>
              {thisProject?.myTechnologies?.map(tech => (
                <Tag key={tech.id} className={'mt-2 mr-2'}>{tech.name}</Tag>
              ))}
              {thisProject?.otherTechnologies?.map((tech) => (
                <Tag key={tech.name} className={'mt-2 mr-2'}>{tech.name}</Tag>
              ))}
            </div>
          </>
        )}
        {thisExperience?.company && (
          <>
            <Title level={3} className={'!mb-6'}>Организация</Title>
            <Typography>{thisExperience?.company}</Typography>
          </>
        )}
      </Wrapper>
    </main>
  )
}