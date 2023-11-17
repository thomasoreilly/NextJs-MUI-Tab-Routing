import { createContext } from "react";

export const DataContext = createContext(null);
type DataProviderType = {
  children: React.ReactNode;
  data: any;
};

export default function DataProvider({ children, data }: DataProviderType) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
