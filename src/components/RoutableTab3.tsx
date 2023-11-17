import useData from "@/hooks/useData";
import { Box } from "@mui/material";

export default function RoutableTab3() {
  const content = useData();
  return <Box>{content}</Box>;
}
