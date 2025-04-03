import { Dialog, DialogContent } from "@mui/material";
import Terminal from "../Fragments/Terminal";

interface TerminalDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const TerminalDialog = ({
  open,
  onClose,
  title,
  content,
}: TerminalDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialogContent-root": {
          width: 850,
          height: 550,
          padding: "0",
        },
        "& .MuiPaper-root": {
          maxWidth: "none",
        },
      }}
    >
      <DialogContent>
        <Terminal title={title} onClose={onClose}>
          {content}
        </Terminal>
      </DialogContent>
    </Dialog>
  );
};

export default TerminalDialog;
