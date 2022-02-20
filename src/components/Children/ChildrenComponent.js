import React from "react";

function ChildrenComponent(props) {
  console.log(props.children);

  return (
    <div>
      <h1>I am ChildrenComponent</h1>
      <p>I don't know what to do.</p>
      {props.children}
    </div>
  );
}

export default ChildrenComponent;
