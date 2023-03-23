import { createContext } from "react";

const Usercontext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});

Usercontext.displayName = "UserDataContext";

export default Usercontext;
