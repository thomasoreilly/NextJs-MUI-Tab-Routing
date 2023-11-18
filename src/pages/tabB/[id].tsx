import RoutableTabs from "@/components/RoutableTabs";
import DataProvider from "@/providers/DataProvider";

type TabType = {
  content: string;
  dialogData: {
    title: string;
    content: string;
  };
};
export default function TabBWithDialog({ content, dialogData }: TabType) {
  return (
    <DataProvider data={{ content, dialogData }}>
      <RoutableTabs tab={1} />
    </DataProvider>
  );
}

export const getServerSideProps = () => {
  const content = "Tab B content";

  return {
    props: {
      content,
      dialogData: {
        returnPath: "/tabB",
        title: "Dialog B title",
        content: "Dialog B content",
      },
    },
  };
};
