import { CustomTable } from "@/components/table";
import { Avatar, Typography } from "@material-tailwind/react";

const TABS = [];

const TABLE_HEAD = [
  "Comentario denunciado",
  "usuario denunciado",
  "usuario denunciante",
  "Causa",
  "estado",
  "Fecha",
  "Acciones",
];

const TABLE_ROWS = [
  {
    reportedComment: "Que fea es la vida",
    reportedUser: {
      name: "Jose Luis Echemendia López",
      avatar: "/assets/images/avatar.jpeg",
    },
    reportingUser: {
      name: "Roberto Lazo Pozo",
      avatar: "/assets/images/avatar.jpeg",
    },
    causeComplaint:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque numquam ut illo sit rerum tempore voluptatem adipisci deserunt accusantium, aspernatur placeat, beatae quidem impedit explicabo perferendis dolores dolore reiciendis.",
    date: "19/09/17",
    state: "Analizado",
  },
];

const AdminComplaintsView = () => {
  return <></>;
};

export default AdminComplaintsView;
