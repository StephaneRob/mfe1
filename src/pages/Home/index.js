import React from "react";
import SuperButton from "../../SuperButton";
import { settingPath } from "../../routes";
const { Link, useParams } = require("react-router-dom");

const Home = () => {
  const { lang } = useParams();

  return (
    <div>
      <h1>Home</h1>
      <SuperButton>Hello</SuperButton>
      <div>
        <Link to={settingPath(lang)}>Settings</Link>
      </div>
    </div>
  );
};

export default Home;
