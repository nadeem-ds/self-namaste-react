import { createContext } from "react";

const Usercontext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});

export default Usercontext;
