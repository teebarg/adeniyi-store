import React from "react";

const Sidebar = (props) => {
  return (
    <React.Fragment>
      <div className="bg-gray-700 grid grid-cols-1">
        <div>
          A
        </div>
        <div>
          B
        </div>
        <div>
          C
        </div>
        <div>
          D
        </div>
      </div>
      <div className="bg-gray-800">Copyright</div>
    </React.Fragment>
  );
};

export default Sidebar;
