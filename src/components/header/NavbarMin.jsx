import React, { useContext, useState } from "react";
import "./NavbarMin.scss";
import { ProjectContext } from "../../Context/ProjectContext";

function NavbarMin() {
  const { bookNamesArray } = useContext(ProjectContext);
  const [showSelectives, setShowSelectives] = useState(false);
  let styles = {
    display: showSelectives ? "block" : "none",
  };

  let styles2 = {
    borderRadius: showSelectives ? "6px 6px 0px 0px" : "6px",
  };

  // const handleBlur = (e) => setShowSelectives(false);

  return (
    <div className="navbar">
      <div className="container">
        {/* <select
          className="form-select"
          aria-label="Default select example"
          onClick={() => {
            if (typeof (selectedIndex) != "undefined") {
              check();
            } else {
              console.log('error')
            }
          }}
        >
          <option defaultValue>Китептер</option>
          {bookNamesArray}
        </select> */}

        <div className="dropDown-wrapper">
          <input
            readOnly
            id="input"
            type="text"
            value="Китептер"
            onClick={() => setShowSelectives((prevState) => !prevState)}
            // onBlur={handleBlur}
            style={styles2}
          ></input>
          <div id="selectives" style={styles}>
            <ul>
              {bookNamesArray}
            </ul>
          </div>
        </div>
        <h1 className="navbar--heading">Сана</h1>
      </div>
    </div>
  );
}

export default NavbarMin;
