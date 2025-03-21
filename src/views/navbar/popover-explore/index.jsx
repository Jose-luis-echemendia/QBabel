import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { schemaImagesCategoria } from "@/views/welcome-page/categories/images-categoria";
import { v4 as uuidi } from "uuid";

const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
  },
  {
    id: 3,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
  },
];

export const ExplorePopover = () => {
  return (
    <>
      <Popover className="flex items-center relative">
        <PopoverHandler>
          <Button
            variant="text"
            className="block w-full text-primary text-xl font-opensans normal-case font-normal"
          >
            Explorar
          </Button>
        </PopoverHandler>
        <PopoverContent className="absolute z-20 top-full left-0 w-full transform shadow-lg bg-white">
          <div className="absolute inset-0 flex">
            <div className="bg-white w-1/2" />
            <div className="bg-gray-50 w-1/2" />
          </div>
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-cols-4 -ml-20 py-8 hover:cursor-pointer">
              {/* Añadir el h6 aquí */}
              <h6 className="col-span-4 text-lg font-semibold text-gray-700 mb-4">
                Nuestras temáticas
              </h6>
              {[...schemaImagesCategoria, ...schemaImagesCategoria].map(
                (item) => (
                  <NavLink to={`/books/category${item.text}`} key={uuidi()}> 
                    {item.text}
                  </NavLink>
                )
              )}
            </div>
            <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
              <div>
                <h6 className="col-span-4 text-lg font-semibold text-gray-700 mb-4">
                  Desde el blog
                </h6>
                <ul role="list" className="mt-6 space-y-6">
                  {blogPosts.map((post) => (
                    <li key={post.id} className="flow-root">
                      <NavLink
                        href={post.href}
                        className="-m-3 p-3 flex rounded-lg hover:bg-gray-100"
                      >
                        <div className="hidden sm:block flex-shrink-0">
                          <img
                            className="w-32 h-20 object-cover rounded-md"
                            src={post.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="w-0 flex-1 sm:ml-8">
                          <h4 className="text-base font-medium text-gray-900 truncate">
                            {post.name}
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">
                            {post.preview}
                          </p>
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-sm font-medium">
                <NavLink
                  to=""
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  View all posts <span aria-hidden="true">&rarr;</span>
                </NavLink>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
