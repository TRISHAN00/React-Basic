import React from "react";

function Skills(props) {
  console.log(props);
  return (
    <div className="skills">
      <h3 className="Font-size Font-Color">Skills:</h3>
      <ul>
        <li>{props.skillA}</li>
        <li>{props.skillB}</li>
        <li>{props.skillC}</li>
      </ul>
    </div>
  );
}

export default Skills;
