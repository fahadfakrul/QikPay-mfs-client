import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import User from "../Layouts/User";
import Agent from "../Layouts/Agent";
import Admin from "../Layouts/Admin";
import UserRegistration from "../Components/UserRegistration";
import AgentRegister from "../Components/AgentRegister";
import UserLogin from "../Components/UserLogin";
import AgentLogin from "../Components/AgentLogin";
import AdminLogin from "../Components/AdminLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        { path: "/", element: <UserLogin></UserLogin> },
      { path: "/userregistration", element: <UserRegistration></UserRegistration> },
      { path: "/agentregistration", element: <AgentRegister></AgentRegister> },
      { path: "/agentlogin", element: <AgentLogin></AgentLogin> },
      { path: "/adminlogin", element: <AdminLogin></AdminLogin> },
    ],
  },
  {
    path: "/user",
    element: <User></User>,
  },
  {
    path: "/agent",
    element: <Agent></Agent>,
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
  },
]);
