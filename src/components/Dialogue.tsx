import useData from "@/hooks/useData";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/router";

export default function Dialogue() {
  const router = useRouter();
  const { dialogData } = useData();

  const handleOnClose = () => {
    router.push(dialogData?.returnPath || "/tabA");
  };

  return (
    <Dialog open={!!dialogData}>
      <DialogTitle>{dialogData?.title}</DialogTitle>
      <DialogContent>{dialogData?.content}</DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
