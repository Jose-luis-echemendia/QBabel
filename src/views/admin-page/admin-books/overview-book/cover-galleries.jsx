import { Tab, TabList, TabGroup, TabPanel, TabPanels } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const CoverGalleries = ({ covers, alt }) => {
  return (
    <>
      <TabGroup as="div" className="flex flex-col-reverse gap-3">
        {/* Image selector */}
        <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
          <TabList className="grid grid-cols-4 gap-6">
            {covers.map((src) => (
              <Tab
                key={src} // Utilizando el índice como clave
                className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
              >
                {({ selected }) => (
                  <>
                    <span className="sr-only">{alt}</span>
                    <span className="absolute inset-0 rounded-md overflow-hidden">
                      <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-center object-cover"
                      />
                    </span>
                    <span
                      className={classNames(
                        selected ? "ring-indigo-500" : "ring-transparent",
                        "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </Tab>
            ))}
          </TabList>
        </div>
        
        {/* Image selected */}
        <TabPanels className="w-full flex items-center justify-center">
          {covers.map((src) => (
            <TabPanel key={src}>
              <img
                src={src}
                alt={alt}
                className="w-64 h-72 object-center object-cover sm:rounded-lg"
              />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </>
  );
};
