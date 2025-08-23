import React from "react";
import Cousing from "../Cousing/Cousing";

const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousing name={"Rafsan"}></Cousing>
        <Cousing name={"Nadia"}></Cousing>
      </section>
    </div>
  );
};

export default Uncle;
