import React from "react";
import ReactDOM from "react-dom";

import Root from "./Root";
if (typeof document !== "undefined") {
  ReactDOM.render(<Root />, document.getElementById("root"));
}
