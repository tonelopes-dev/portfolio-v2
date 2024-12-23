import CarouselFront from "./CarouselFront";
import CarouselBack from "./CarouselBack";
import * as Tabs from "@radix-ui/react-tabs";
import "./styles.css";

const TabsProject = () => {
  return (
    <div className=" rounded-md bg-gray-800  pt-8" id="projects">
      <h2 className=" text-2xl font-bold text-white ">Meus Projetos</h2>
      <div className="mb-4  border-gray-200 ">
        <Tabs.Root className="TabsRoot w-full shadow-none" defaultValue="tab1">
          <Tabs.List
            className="TabsList mb-4 ml-4 border-gray-200 "
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="TabsTrigger ring:text-white border-none font-sans text-lg  font-bold  shadow-none ring-0 focus:text-white active:text-white"
              value="tab1"
            >
              Frontend
            </Tabs.Trigger>
            <Tabs.Trigger
              className="TabsTrigger font-sans text-lg font-bold focus:text-white "
              value="tab2"
            >
              Backend
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent " value="tab1">
            <CarouselFront className="md:h-full" />
          </Tabs.Content>
          <Tabs.Content className="TabsContent " value="tab2">
            <CarouselBack className="md:h-full" />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default TabsProject;
