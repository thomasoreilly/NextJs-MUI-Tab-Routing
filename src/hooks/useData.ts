import { DataContext } from "@/providers/DataProvider";
import { useContext } from "react";

export default function useData() {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    throw new Error("useData requires DataProvider");
  }

  return dataContext;
}
