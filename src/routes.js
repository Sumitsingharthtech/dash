/* eslint-disable prettier/prettier */
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import BookCategory from "layouts/BookCategory/BookCategory";
import User from "layouts/tables/UserPage/User";
import Icon from "@mui/material/Icon";
import Login from "layouts/Login/Login";
import SignUp from "layouts/SignUp/SignUp";

const routes = [
  {
    type: "collapse",
    name: "login",
    key: "login",
    icon: <Icon fontSize="small"> Login </Icon>,
    route: "/",
    component: <Login />,
  },

  {
    type: "collapse",
    name: "signup",
    key: "signup",
    icon: <Icon fontSize="small"> Sign Up  </Icon>,
    route: "/signup",
    component: <SignUp />,
  },

  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">Dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },

  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },

  {
    type: "collapse",
    name: "User",
    key: "tables",
    icon: <Icon fontSize="small"> User </Icon>,
    route: "/user",
    component: <User />,
  },
  {
    type: "collapse",
    name: "Create Books",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/createbooks",
    component: <Tables />,
  },

  {
    type: "collapse",
    name: "Add Category",
    key: "tables",
    icon: <Icon fontSize="small"> Add Category  </Icon>,
    route: "/Category",
    component: <BookCategory  />,
  },


  {
    type: "collapse",
    name: "Add Contest",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/contest",
    component: <Billing />,
  },


  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "Visit Library",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/visitlibrary",
    component: <Notifications />,
  },
];

export default routes;
