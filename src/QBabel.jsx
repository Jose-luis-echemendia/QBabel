import Routers from "./routers/routers-app";
import "./styles/qbabel.css";

import '@fontsource/anton';
import '@fontsource/quicksand';
import '@fontsource/open-sans';
import { Toaster } from "sonner";


function QBabel() {
  return (
    <>
      <Routers />
      <Toaster richColors />
    </>
  );
}

export default QBabel;
