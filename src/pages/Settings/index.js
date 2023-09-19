import React from "react";
import { homePath } from "../../routes";
const { Link, useParams } = require("react-router-dom");

const Settings = () => {
  const { lang } = useParams();
  console.log(lang);
  return (
    <div>
      <h1>Settings</h1>
      <Link to={homePath(lang)}>Home</Link>
    </div>
  );
};

export default Settings;
