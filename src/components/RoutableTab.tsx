import { TabType } from "./types";

type RoutableTab = {
  value: TabType;
  index: TabType;
  children: React.ReactNode;
};

export default function RoutableTab({ value, index, children }: RoutableTab) {
  if (value !== index) {
    return <></>;
  }
  return <>{children}</>;
}
