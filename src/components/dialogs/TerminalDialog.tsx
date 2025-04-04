import { Dialog, DialogContent } from "@mui/material";
import Terminal from "../Fragments/Terminal";
import RealTerminal, { Command } from "../Fragments/RealTerminal";

interface TerminalDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  real?: boolean;
  commands?: Command[];
}

const TerminalDialog = ({
  open,
  onClose,
  title,
  content,
  real,
  commands = [],
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
        {!real ? (
          <Terminal title={title} onClose={onClose}>
            {content}
          </Terminal>
        ) : (
          <RealTerminal title={title} onClose={onClose} commands={commands}>
            {content}
          </RealTerminal>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TerminalDialog;
