import * as Tabs from "@radix-ui/react-tabs";
import "./styles.css";
import CarouselFront from "./CarrouselFront";
import CarrouselBack from "./CarrouselBack";
import CarrouselFullStack from "./CarrouselFullStack";
const TabsProject = () => {
  return (
    <div className=" rounded-md bg-teal-800  pt-8" id="projects">
      <h2 className=" text-2xl font-bold text-amber-200 ">Meus Projetos</h2>
      <div className="  border-gray-200 ">
        <Tabs.Root className="TabsRoot w-full shadow-none" defaultValue="tab1">
          <Tabs.List
            className="TabsList mb-4 ml-4 border-gray-200 "
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="TabsTrigger ring:text-white active:text-red border-none font-sans  text-lg  font-bold shadow-none ring-0 "
              value="tab1"
            >
              FullStack
            </Tabs.Trigger>
            <Tabs.Trigger
              className="TabsTrigger ring:text-white active:text-red border-none font-sans  text-lg  font-bold shadow-none ring-0 "
              value="tab2"
            >
              Frontend
            </Tabs.Trigger>
            <Tabs.Trigger
              className="TabsTrigger font-sans text-lg font-bold "
              value="tab3"
            >
              Backend
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent " value="tab1">
            <CarrouselFullStack className="md:h-full" />
          </Tabs.Content>
          <Tabs.Content className="TabsContent " value="tab2">
            <CarouselFront className="md:h-full" />
          </Tabs.Content>
          <Tabs.Content className="TabsContent " value="tab3">
            <CarrouselBack className="md:h-full" />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default TabsProject;
