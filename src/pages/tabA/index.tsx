import RoutableTabs from "@/components/RoutableTabs";
import DataProvider from "@/providers/DataProvider";

type TabType = {
  content: string;
};

export default function TabA({ content }: TabType) {
  return (
    <DataProvider data={{ content }}>
      <RoutableTabs tab={0} />
    </DataProvider>
  );
}

export const getServerSideProps = () => {
  const content = "Tab A content";
  return { props: { content } };
};
