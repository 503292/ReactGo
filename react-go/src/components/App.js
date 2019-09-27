import React from "react";
import Panel from "./Panel/Panel"
import user from "../user.json";

const App = () => (
  <>
    <Panel user={user}/>
  </>
);

export default App;
