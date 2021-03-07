import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import {
  PersonalInformation,
  Properties,
  RecentBookings,
  RecentRatings,
  Invoices,
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
        <NavItem>
          <NavLink
            className={classnames(
              { active: activeTab === "4" },
              "text-primary"
            )}
            onClick={() => {
              toggle("4");
            }}
          >
            Your Properties
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames(
              { active: activeTab === "5" },
              "text-primary"
            )}
            onClick={() => {
              toggle("5");
            }}
          >
            Your Invoices
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
        <TabPane tabId="4">
          <Properties />
        </TabPane>
        <TabPane tabId="5">
          <Invoices />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Profile;
