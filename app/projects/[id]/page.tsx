import { projectsData } from '@/data/projects';
import ProjectDetailContent from './ProjectDetailContent';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);
  return <ProjectDetailContent project={project} />;
}
