import React, { useState } from "react";

const Sidebar = ({ name = "Person's Name", image }) => {
  const menuStyle =
    "hover:scale-120 active:scale-120 hover:font-medium active:font-medium text-[16px] ease-in-out duration-100";

  const [imgError, setImgError] = useState(false);
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <>
      <div className="bg-todo-green h-screen w-64 max-w-2xs flex flex-col justify-between items-center text-white py-8">
        {/* PROFILE */}
        <div className="max-w-52 aspect-square flex flex-col justify-between items-center">
          {/* DP */}
          <div className="relative group bg-white max-w-24 w-24 text-center aspect-square">
            {/* <img className={`text-black text-center`}src={image} alt={`Image of ${name || `person`}`} />
            <input type="image" /> */}
            {!imgError && image ? (
              <img
                src={image}
                alt={`Image of ${name}`}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-black text-4xl font-semibold h-full flex items-center justify-center">
                {getInitials(name)}
              </span>
            )}
            <div className="bg-black/30 absolute hidden group-hover:flex justify-center items-center w-full h-full top-0 left-0 font-bold text-2xl ">
              {/* <input placeholder="Up" type="file" className="hover:cursor-pointer text-center absolute bg-black/50 opacity-60 bottom-0 h-1/3 w-full"/> */}
              <label className="w-full h-1/3 absolute bottom-0 bg-black/50 text-center text-white flex items-center justify-center cursor-pointer">
                Upload
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          {/* NAME */}
          <h5 className="text-[18px] mt-4">{name || "Person's Name"}</h5>
        </div>

        {/* MENU */}
        <div className="max-h-60 h-60 ">
          <ul className="flex flex-col justify-evenly items-center h-full">
            <li className={menuStyle}>
              <a href="#">To - Do</a>
            </li>
            <li className={menuStyle}>
              <a href="#">Completed</a>
            </li>
            <li className={menuStyle}>
              <a href="#">Notes</a>
            </li>
          </ul>
        </div>

        {/* OPTIONS */}
        <div className="flex flex-col h-16 items-center justify-evenly">
          <a className={menuStyle} href="#">
            Settings
          </a>
          <a className={menuStyle} href="#">
            Logout
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
