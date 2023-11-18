import RoutableTabs from "@/components/RoutableTabs";
import DataProvider from "@/providers/DataProvider";

type TabType = {
  content: string;
  dialogData: {
    title: string;
    content: string;
  };
};
export default function TabCWithDialog({ content, dialogData }: TabType) {
  return (
    <DataProvider data={{ content, dialogData }}>
      <RoutableTabs tab={2} />
    </DataProvider>
  );
}

export const getServerSideProps = () => {
  const content = "Tab C content";

  return {
    props: {
      content,
      dialogData: {
        returnPath: "/tabC",
        title: "Dialog C title",
        content: "Dialog C content",
      },
    },
  };
};
