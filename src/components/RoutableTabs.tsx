import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import RoutableTab1 from "./RoutableTab1";
import RoutableTab2 from "./RoutableTab2";
import RoutableTab3 from "./RoutableTab3";
import { TabType } from "./types";
import RoutableTab from "./RoutableTab";
import { useRouter } from "next/router";

type RoutableTabsType = {
  tab: TabType;
};
const TAB_ROUTES = ["/tab1", "/tab2", "/tab3"];

export default function RoutableTabs({ tab }: RoutableTabsType) {
  const router = useRouter();
  const handleChange = (event: React.SyntheticEvent, newTab: TabType) => {
    router.push(TAB_ROUTES[newTab]);
  };

  return (
    <Box sx={{ margin: 20 }}>
      <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Routable tab 1" />
        <Tab label="Routable tab 2" />
        <Tab label="Routable tab 3" />
      </Tabs>
      <RoutableTab value={tab} index={0}>
        <RoutableTab1 />
      </RoutableTab>
      <RoutableTab value={tab} index={1}>
        <RoutableTab2 />
      </RoutableTab>
      <RoutableTab value={tab} index={2}>
        <RoutableTab3 />
      </RoutableTab>
    </Box>
  );
}
