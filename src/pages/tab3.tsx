import RoutableTabs from "@/components/RoutableTabs";
import DataProvider from "@/providers/DataProvider";

type TabType = {
  content: string;
};

export default function Tab3({ content }: TabType) {
  return (
    <DataProvider data={{ content }}>
      <RoutableTabs tab={2} />
    </DataProvider>
  );
}

export const getServerSideProps = () => {
  const content = "Tab 3 content";
  return { props: { content } };
};
