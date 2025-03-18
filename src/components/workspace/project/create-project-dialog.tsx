import useCreateProjectDialog from "../../../hooks/use-create-project-dialog";
import { Dialog, DialogContent } from "../../ui/dialog";
import CreateProjectForm from "./create-project-form";

const CreateProjectDialog = () => {
  const { open, onClose } = useCreateProjectDialog();

  return (
    <div>
      <Dialog modal={true} open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg border-0">
          <CreateProjectForm {...{ onClose }} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProjectDialog;
