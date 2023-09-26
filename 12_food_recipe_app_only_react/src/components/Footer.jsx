import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap w-full h-40 bg-slate-950 text-white justify-between px-8 py-10 mt-5">
      <div className="flex flex-wrap items-start flex-col">
        <h2 className="font-bold text-3xl ">Fooddy</h2>
        <p className="mt-4 font-semibold">©copyright by durgeshbachhav </p>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="font-bold text-md hover:text-blue-600">Home</li>
        <li className="font-bold text-md hover:text-blue-600">Recipes</li>
        <li className="font-bold text-md hover:text-blue-600">About us</li>
      </ul>
    </div>
  );
};

export default Footer;
