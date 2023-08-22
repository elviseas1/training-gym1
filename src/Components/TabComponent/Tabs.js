import React, { useState } from "react";
import Treino1Tab from "../AllTabs/Treino1";
import Treino2 from "../AllTabs/Treino2";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Treino A
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Treino B
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Treino C
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <Treino1Tab /> : activeTab === "tab3" ? <Treino1Tab /> : <Treino2 />}
      </div>
    </div>
  );
};
export default Tabs;