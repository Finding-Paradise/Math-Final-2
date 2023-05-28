import React, { useContext, useState } from "react";
import "./NavbarMin.scss";
import { ProjectContext } from "../../Context/ProjectContext";
import { Link } from "react-router-dom";

function NavbarMin() {
  const { bookNamesArray } = useContext(ProjectContext);
  const [showSelectives, setShowSelectives] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const handleDropdownClick = () => {
    setShowSelectives((prevState) => !prevState);
  };

  const handleTopicSelect = () => {
    setShowSelectives(false);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="dropDown-wrapper">
          <input
            readOnly
            id="input"
            type="text"
            value="Китептер"
            className={inputFocused ? "input-focused" : ""}
            onClick={handleDropdownClick}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <div
            id="selectives"
            className={`selectives ${showSelectives ? "show" : ""}`}
          >
            <ul>
              {bookNamesArray.map((item) => (
                <li
                  key={item.key}
                  onClick={() => {
                    handleTopicSelect();
                    item.props.onClick();
                  }}
                  className="dropDown-bookName"
                >
                  {item.props.children}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h1 className="navbar--heading">
          <Link to={"/"}>Сана</Link>
        </h1>
      </div>
    </div>
  );
}

export default NavbarMin;

