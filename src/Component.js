import React from "react";
import Componentcss from "./Component.module.css";
import "./styles.css";
const Component = () => {
  return (
    <div className="card">
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..." "There is no one who loves pain itself,
      who seeks after it and wants to have it, simply because it is pain..."
      <button className={Componentcss.btn}>readmore</button>
    </div>
  );
};
export default Component;
