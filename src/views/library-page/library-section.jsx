// LibrarySection.jsx
import { useState } from "react";
import PropTypes from "prop-types";

import { FormAddBook } from "./form-add-book";
import { CustomModal } from "@/components/modal";
import { Tabs } from "./tabs";
import { ContentTabs } from "./content-tabs";

function LibrarySection() {
  const [openFormAddBookModal, setOpenFormAddBookModal] = useState(false);
  const [activeTab, setActiveTab] = useState("allStory");

  return (
    <section className="py-4 ">
      <div className="max-w-[1200px] mx-auto px-4 ">
        <div className="relative mb-12 mt-16 flex items-center w-full">
          <h2 className="text-3xl font-bold w-full">Tú Biblioteca</h2>

          {/* button agg book */}
          <div className="flex justify-end items-end w-full">
            <button
              onClick={() => {
                setOpenFormAddBookModal(true), setActiveTab("myStory");
              }} // Abre el modal
              className="mr-0 md:mr-0 px-5 gap-3 py-2 mb-3 border border-gray-300 rounded-md text-gray-700 flex items-center hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
              Agregar libro
            </button>
          </div>
          {/* Modal para agregar libro */}
          <CustomModal
            open={openFormAddBookModal}
            handleOpen={() => setOpenFormAddBookModal(false)} // Cierra el modal
            classNameDialog="custom-dialog-class" // Clases personalizadas
            classNameBody="custom-body-class"
            exitButton={true}
            size="xl"
          >
            <FormAddBook handleOpen={() => setOpenFormAddBookModal(false)} />
          </CustomModal>
        </div>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <ContentTabs activeTab={activeTab} />

        {/* Contenido según la pestaña */}
      </div>
    </section>
  );
}

export default LibrarySection;
