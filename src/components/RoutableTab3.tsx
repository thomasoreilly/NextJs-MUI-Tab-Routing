import useData from "@/hooks/useData";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import Dialogue from "./Dialogue";

export default function RoutableTab1() {
  const { content } = useData();
  const router = useRouter();

  const handleOnOpenDialog = () => {
    router.push("/tabC/3");
  };

  return (
    <>
      <Box sx={{ padding: 2 }}>{content}</Box>
      <Button onClick={handleOnOpenDialog}>Open dialog</Button>
      <Dialogue />
    </>
  );
}
