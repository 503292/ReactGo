import React from "react";
import User from "../Product/User"

const Panel = props =>
  props.user.map(elem => <User key={elem.id} user={elem} />);

export default Panel;
