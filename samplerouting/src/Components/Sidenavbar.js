import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarOutlined
} from "@ant-design/icons";

import { useState } from "react";

import { Breadcrumb, Menu, theme,Layout } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, UsergroupAddOutlined, MessageOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import "./Sidenavbar.css";
import LetsConnect from "./letsConnect";
import CalendarView from "./CalendarView";
const { Sider } = Layout;



const Sidenavbar = () => {

    const dashboard = () => {
        window.location.href = ('./dashboard')
    }
    const letsconnect=()=>{
        window.location.href=('./letsconnect')
    }
    const logoutmethod = () => {
        window.location.href = ('./')
    }

    const Calendarclick = () => {
       
        window.location.href = ('./calendarView')
      }
      const Sharethoghtsclick = () => {
       
        window.location.href = ('./sharethouths')
      }


    const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <div className={collapsed ? "sider-collapsed" : "whole-sider-class"}>
        <Sider
          collapsible
          collapsed={collapsed}
          theme="light"
          trigger={null}
          onCollapse={(value) => setCollapsed(value)}
          className="sider-class"
        // width={"100%"}
        >
          {/* <div /> */}
          <div className="header-intime">
            <div className="sider-header">
              {collapsed ? (
                <div className="trigger-wrapper">
                  {React.createElement(MenuUnfoldOutlined, {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  })}
                </div>
              ) : (
                <>
                  {React.createElement(MenuFoldOutlined, {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  })}
                  <span className="sider-title">ChillChat</span>
                </>
              )}
            </div>
          </div>
          <Menu style={{height:"90%",overflow: "hidden"}}
                        mode="inline"
                        height="100%"
                        theme="dark"
                        
                        
                        items={[
                            {
                                key: "1",
                                label: "DashBoard",
                                icon: <DashboardOutlined />,
                                onClick: dashboard,
                            }, ,
                            {
                                key: "2",
                                label: "Let's Connect",
                                icon: < UsergroupAddOutlined />,
                                onClick: letsconnect,
                            },
                            {
                                key: "3",
                                label: "ShareThoughts",
                                icon: <VideoCameraOutlined />,
                                onClick:Sharethoghtsclick,
                            },
                            {
                                key: "4",
                                label: "SeeReply",
                                icon: < MessageOutlined />
                            },
                          
                            {
                                key: "6",
                                label: "Calendar",
                                icon:<CalendarOutlined />,
                                onClick: Calendarclick,
                            },
                            {
                              key: "5",
                              label: "Logout",
                              icon: <LogoutOutlined />,
                              onClick: logoutmethod,
                          },
                        ]}
                    />
        </Sider>
        <div style={{ background: "white" }}>
          <div className="sider-header"></div>
          <div className="vertical-center">
            <div
              onClick={() => setCollapsed(!collapsed)}
            >
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenavbar;