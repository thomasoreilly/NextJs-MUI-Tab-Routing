import { createContext } from "react";

type DataContextType = {
  content: string;
  dialogData?: {
    title: string;
    content: string;
    returnPath: string;
  };
};

export const DataContext = createContext<DataContextType | null>(null);
type DataProviderType = {
  children: React.ReactNode;
  data: DataContextType;
};

export default function DataProvider({ children, data }: DataProviderType) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
