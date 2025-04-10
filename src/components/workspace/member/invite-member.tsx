import { useState } from "react";
import { useAuthContext } from "../../../context/auth-provider";
import { BASE_ROUTE } from "../../../routes/common/routePaths";
import { toast } from "sonner";
import PermissionsGuard from "../../reusable/permission-guard";
import { Permissions } from "../../../constant";
import { CheckIcon, CopyIcon, Loader } from "lucide-react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const InviteMember = () => {
  const { workspace, workspaceLoading } = useAuthContext();
  const [copied, setCopied] = useState(false);

  const inviteUrl = workspace
    ? `${window.location.origin}${BASE_ROUTE.INVITE_URL.replace(
        ":inviteCode",
        workspace.inviteCode
      )}`
    : "";
  const handleCopy = () => {
    if (inviteUrl) {
      navigator.clipboard.writeText(inviteUrl).then(() => {
        setCopied(true);
        toast.success("Invite url copied to clipboard");
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="flex flex-col pt-0.5 px-0">
      <h5 className="text-lg leading-[30px] font-semibold mb-1">
        Invite members to join you
      </h5>
      <p className="text-sm text-muted-foreground leading-tight">
        Anyone with an invite link can join this free workspace. You can also
        disable and create a new invite link for this workspace at any time.
      </p>

      <PermissionsGuard showMessage requiredPermission={Permissions.ADD_MEMBER}>
        {workspaceLoading ? (
          <Loader className="w-8 h-8 animate-spin place-self-center flex" />
        ) : (
          <div className="flex py-3 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              disabled={true}
              className="disabled:opacity-100 disabled:pointer-events-none"
              value={inviteUrl}
              readOnly
            />
            <Button
              disabled={true}
              className="shrink-0"
              size="icon"
              onClick={handleCopy}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </Button>
          </div>
        )}
      </PermissionsGuard>
    </div>
  );
};

export default InviteMember;
