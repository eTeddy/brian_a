import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IoMdTime } from 'react-icons/io';

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: "🏠",
    cName: "nav-text",
  },
  {
    title: "Dice",
    path: "/dice",
    icon: "🎲",
    cName: "nav-text",
  }, 
  {
    title: "Clock",
    path: "/clock",
    icon: "⏰",
    cName: "nav-text",
  },
  {
    title: "Color",
    path: "/color",
    icon: "🌈",
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];