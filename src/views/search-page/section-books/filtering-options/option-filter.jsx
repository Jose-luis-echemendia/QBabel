import { customAccordionTheme } from "@/utils/material-tailwindscss/themes";
import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";



export const OptionFilter = ({
  openAcc,
  handleOpenAcc,
  criterion,
  note = "Puedes seleccionar múltiples opciones",
  options,
}) => {
  return (
    <>
      <Accordion
        open={openAcc}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        }
      >
        <div className="flex flex-col gap-0.5 mt-5">
          <AccordionHeader
            onClick={handleOpenAcc}
            className="text-xl font-bold"
          >
            {criterion}
          </AccordionHeader>
          <AccordionBody>
            <small className="text-xs text-gray-600">{note}</small>
            <ThemeProvider value={customAccordionTheme}>
              <List>
                {options.map((option) => (
                  <ListItem
                    className="p-0 -ml-2"
                    color="primary-100"
                    key={option.id}
                  >
                    <label
                      htmlFor={option.criterion}
                      className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                      <ListItemPrefix className="mr-3" color="primary-100">
                        <Checkbox
                          id={option.criterion}
                          ripple={false}
                          color="primary-100"
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="primary-100" className="font-medium">
                        {option.criterion}
                      </Typography>
                    </label>
                  </ListItem>
                ))}
              </List>
            </ThemeProvider>
          </AccordionBody>
        </div>
      </Accordion>
    </>
  );
};
