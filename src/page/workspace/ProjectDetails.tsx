import { Separator } from "../../components/ui/separator";
import ProjectAnalytics from "../../components/workspace/project/project-analytics";
import ProjectHeader from "../../components/workspace/project/project-header";

const ProjectDetails = () => {
  return (
    <div className="w-full space-y-6 py-4 md:pt-3">
      <ProjectHeader />
      <div className="space-y-5">
        <ProjectAnalytics />
        <Separator />
        <p>Task Table</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
