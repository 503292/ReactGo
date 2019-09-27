import React from "react";

const User = props => {
  console.log(props);
  return (
    <div>
      <p>{props.user.title}</p>
      <img src={props.user.image} alt={props.user.title} />
    </div>
  );
};

// function Product

export default User;
