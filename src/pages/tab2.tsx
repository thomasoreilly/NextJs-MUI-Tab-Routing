import RoutableTabs from "@/components/RoutableTabs";
import DataProvider from "@/providers/DataProvider";

type TabType = {
  content: string;
};

export default function Tab2({ content }: TabType) {
  return (
    <DataProvider data={{ content }}>
      <RoutableTabs tab={1} />
    </DataProvider>
  );
}

export const getServerSideProps = () => {
  const content = "Tab 2 content";
  return { props: { content } };
};
