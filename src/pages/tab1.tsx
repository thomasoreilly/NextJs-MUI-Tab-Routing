import RoutableTabs from "@/components/RoutableTabs";
import DataProvider from "@/providers/DataProvider";

type TabType = {
  content: string;
};

export default function Tab1({ content }: TabType) {
  return (
    <DataProvider data={content}>
      <RoutableTabs tab={0} />
    </DataProvider>
  );
}

export const getServerSideProps = () => {
  const content = "Tab 1 content";
  return { props: { content } };
};
