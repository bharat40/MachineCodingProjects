import "./App.css";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Settings from "./components/Settings";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  // config
  const tabs = [
    {
      title: "Profile",
      component: Profile,
      validate: () => {},
    },
    {
      title: "Interests",
      component: Interests,
      validate: () => {},
    },
    {
      title: "Settings",
      component: Settings,
      validate: () => {},
    },
  ];
  const handleTabChange = (idx) => {
    setActiveTab(idx);
  };
  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div className="tabs-container">
      <div className="heading-container">
        {tabs.map((tab, idx) => {
          return (
            <h2
              className={"heading " + (activeTab === idx ? "active" : "")}
              key={idx}
              onClick={() => handleTabChange(idx)}
            >
              {tab.title}
            </h2>
          );
        })}
      </div>
      <div className="content-container">{<ActiveTabComponent />}</div>
    </div>
  );
}

export default App;
