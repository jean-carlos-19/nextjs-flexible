"use client";
import { ProjectInterface } from '@/types/common.types';
import { useProject} from './hooks'
import { Categories, LoadMore, ProjectCard, } from '@/atomic/component';
type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
}

type Props = {
  searchParams: SearchParams
}

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

export default function Home({ searchParams: { category, endcursor } }: Props) {
  
  const {data} = useProject(category!, endcursor!);
  const projectsToDisplay = data?.projectSearch?.edges || [];
  const pagination = data?.projectSearch.pageInfo;

  if(projectsToDisplay.length === 0){
    return (
      <section className="flexStart flex-col paddings">
        <Categories />
        <p className="no-result-text text-center">
          No projects found, go create some first.
        </p>
      </section>
    );
  }
  return (
    <section className="flex-start flex-col paddings mb-16">
      <h1> Categories </h1>
      <section className="project-grid">
        {
          projectsToDisplay.map(({node}:{node:ProjectInterface})=>(
            <ProjectCard 
              key={node.id}
              id={node.id}
              image={node.image}
              title={node.title}
              name={node.createdBy.name}
              avatarUrl={node.createdBy.avatarUrl}
              userId={node.createdBy.id}
            />
          ))
        }
      </section>
      <LoadMore 
        startCursor={pagination?.startCursor}
        endCursos={pagination?.endCursos}
        hasPreviousPage={pagination?.hasPreviousPage}
        hasNextPage={pagination?.hasNextPage}
      />
    </section>
  );
}
