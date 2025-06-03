import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

export const FormPaymentBook = ({ price, discount }) => {
  const [paymentMethod, setPaymentMethod] = React.useState("Escanear QR");
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[30rem] h-[50rem] max-w-[90vw] max-h-[90vh] flex">
        <Card className="w-full h-full flex flex-col overflow-hidden">
          <CardHeader
            color="gray"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center px-4 py-8 text-center h-[13rem]"
          >
            <div className="mb-4 h-20 p-6 text-white">
              {type === "card" ? (
                <CreditCardIcon className="h-10 w-10 text-white" />
              ) : (
                <CreditCardIcon className="h-10 w-10 text-white" />
              )}
            </div>
            <Typography variant="h5" color="white">
              QBabel
            </Typography>
          </CardHeader>
          <CardBody className="flex-grow p-0 mt-6">
            <Tabs value={type} className=" h-full flex flex-col px-4">
              <TabsHeader className="relative z-0 top-0">
                <Tab value="card" onClick={() => setType("card")}>
                  Pagar con Transfermovil
                </Tab>
                <Tab value="paypal" onClick={() => setType("paypal")}>
                  Pagar con Enzona
                </Tab>
              </TabsHeader>
              <TabsBody
                className="!overflow-x-hidden !overflow-y-hidden flex-grow"
                animate={{
                  initial: {
                    x: type === "card" ? 400 : -400,
                  },
                  mount: {
                    x: 0,
                  },
                  unmount: {
                    x: type === "card" ? 400 : -400,
                  },
                }}
              >
                <TabPanel value="card" className="p-4 h-full">
                  <form className="flex flex-col gap-4 h-[50vh]">
                    <div className="overflow-y-hidden flex-grow pr-2">
                      <div className="my-3">
                        {/* Método de Pago */}
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium "
                        >
                          Seleccione un método de pago
                        </Typography>
                        <Select
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                          value={paymentMethod}
                          onChange={(value) => setPaymentMethod(value)}
                        >
                          {["Escanear QR", "Introducir Tarjeta"].map(
                            (method) => (
                              <Option key={method} value={method}>
                                <div className="flex items-center gap-x-2">
                                  {method}
                                </div>
                              </Option>
                            )
                          )}
                        </Select>

                        <div className="grid grid-cols-5 gap-2">
                          {paymentMethod === "Escanear QR" ? (
                            <div className="col-span-5 mt-8 flex justify-center">
                              <div className="w-80 h-80 flex items-center justify-center">
                                <img
                                  src="/assets/images/qr.jpeg"
                                  alt="QR"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="col-span-5 mt-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="mb-2 font-medium "
                                >
                                  Tu cuenta de banco
                                </Typography>

                                <Input
                                  maxLength={19}
                                  value={formatCardNumber(cardNumber)}
                                  onChange={(event) =>
                                    setCardNumber(event.target.value)
                                  }
                                  icon={
                                    <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                                  }
                                  placeholder="0000 0000 0000 0000"
                                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                  labelProps={{
                                    className:
                                      "before:content-none after:content-none",
                                  }}
                                />
                              </div>

                              <div className="col-span-5 w-full">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="mb-2 font-medium"
                                >
                                  Seleccione un cupón de descuento
                                </Typography>
                                <Select
                                  placeholder="USA"
                                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                  labelProps={{
                                    className:
                                      "before:content-none after:content-none",
                                  }}
                                  value="Sin cupón"
                                >
                                  {["Cupon 1", "Cupon 2"].map((method) => (
                                    <Option key={method} value={method}>
                                      <div className="flex items-center gap-x-2">
                                        {method}
                                      </div>
                                    </Option>
                                  ))}
                                </Select>
                              </div>

                              {/* Detalles del pago */}
                              <div className="col-span-5 grid grid-cols-5 px-2 mt-8">
                                <span className="col-span-4 text-black">
                                  Precio
                                </span>
                                <span className="col-span-1 text-black font-semibold ">
                                  $ {price}
                                </span>
                                <span className="col-span-4 text-black">
                                  Descuento
                                </span>
                                <span className="col-span-1 text-black font-semibold">
                                  $ {discount}
                                </span>
                                <span className="col-span-4 text-black">
                                  Total a pagar
                                </span>
                                <span className="col-span-1 text-black font-semibold">
                                  $ {price - discount}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto pt-2">
                      {paymentMethod === "Introducir Tarjeta" && (
                        <Button size="lg" fullWidth>
                          Pagar ahora
                        </Button>
                      )}
                      <Typography
                        variant="small"
                        color="gray"
                        className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                      >
                        <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Los pagos
                        son seguros y encriptados
                      </Typography>
                    </div>
                  </form>
                </TabPanel>
                <TabPanel value="paypal" className="p-4 h-full">
                  <form className="flex flex-col gap-4 h-[50vh] ">
                    <div className="overflow-y-hidden flex-grow pr-2">
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium "
                        >
                          Tu cuenta de banco
                        </Typography>

                        <Input
                          maxLength={19}
                          value={formatCardNumber(cardNumber)}
                          onChange={(event) =>
                            setCardNumber(event.target.value)
                          }
                          icon={
                            <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                          }
                          placeholder="0000 0000 0000 0000"
                          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-auto pt-2">
                      <Button size="lg" fullWidth>
                        Pagar ahora
                      </Button>
                      <Typography
                        variant="small"
                        color="gray"
                        className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                      >
                        <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Los pagos
                        son seguros y encriptados
                      </Typography>
                    </div>
                  </form>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
