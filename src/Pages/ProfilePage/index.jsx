import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import {
  PersonalInformation,
  RecentBookings,
  RecentRatings,
} from "./components";

const Profile = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="profileContainer">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames(
              { active: activeTab === "1" },
              "text-primary"
            )}
            onClick={() => {
              toggle("1");
            }}
          >
            Personal Information
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames(
              { active: activeTab === "2" },
              "text-primary"
            )}
            onClick={() => {
              toggle("2");
            }}
          >
            Booking Histories
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames(
              { active: activeTab === "3" },
              "text-primary"
            )}
            onClick={() => {
              toggle("3");
            }}
          >
            Recent Ratings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <PersonalInformation />
        </TabPane>
        <TabPane tabId="2">
          <RecentBookings />
        </TabPane>
        <TabPane tabId="3">
          <RecentRatings />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Profile;
