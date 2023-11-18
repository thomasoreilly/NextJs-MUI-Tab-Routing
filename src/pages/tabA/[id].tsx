import RoutableTabs from "@/components/RoutableTabs";
import DataProvider from "@/providers/DataProvider";

type TabType = {
  content: string;
  dialogData: {
    title: string;
    content: string;
  };
};
export default function TabAWithDialog({ content, dialogData }: TabType) {
  return (
    <DataProvider data={{ content, dialogData }}>
      <RoutableTabs tab={0} />
    </DataProvider>
  );
}

export const getServerSideProps = () => {
  const content = "Tab A content";

  return {
    props: {
      content,
      dialogData: {
        returnPath: "/tabA",
        title: "Dialog A title",
        content: "Dialog A content",
      },
    },
  };
};
