import CarouselFront from "./CarouselFront";
import CarouselBack from "./CarouselBack";

const TabsProject = () => {
  return (
    <div className=" rounded-md bg-blue-400  pt-8">
      <h2 className=" text-2xl font-bold text-white ">Meus Projetos</h2>
      <div className="mb-4 ml-4 border-gray-200 ">
        <ul
          className="-mb-px flex flex-wrap text-center text-sm font-medium"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 p-4 text-white active:border-blue-800 md:text-lg "
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
            >
              Frontend
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 p-4 text-white hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 md:text-lg"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Backend
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <CarouselFront className="md:h-full" />
        </div>
        <div
          className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <CarouselBack className="md:h-full" />
        </div>
      </div>
    </div>
  );
};

export default TabsProject;
