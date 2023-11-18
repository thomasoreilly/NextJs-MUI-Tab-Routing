import RoutableTabs from "@/components/RoutableTabs";
import DataProvider from "@/providers/DataProvider";

type TabType = {
  content: string;
};

export default function TabC({ content }: TabType) {
  return (
    <DataProvider data={{ content }}>
      <RoutableTabs tab={2} />
    </DataProvider>
  );
}

export const getServerSideProps = () => {
  const content = "Tab C content";
  return { props: { content } };
};
