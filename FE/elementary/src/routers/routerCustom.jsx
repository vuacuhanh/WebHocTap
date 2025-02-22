import { ROUTERS } from "./router";
import HomePage from "../pages/Homepage";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "../theme/masterLayout";
import Login from "../Accounts/login";
import Register from "../Accounts/register";
import React from "react";
import AccountLayout from "../theme/accountLayout";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.STUDENT.HOME,
            component: <HomePage />,
            layout: MasterLayout,
        },
        {
            path: ROUTERS.STUDENT.PROFILE,
            component:<HomePage />,
        },
        {
            path: ROUTERS.STUDENT.NOTIFICATION, // Fix typo (NOTIFICATiON -> NOTIFICATION)
            component: <HomePage />,
        },
        {
            path: ROUTERS.STUDENT.NEW,
            component: <HomePage />,
        },
        {
            path: ROUTERS.STUDENT.LOGIN,
            component: <Login />,
            layout: AccountLayout,
        },
        {
            path: ROUTERS.STUDENT.REGISTER,
            component: <Register/>,
            layout: AccountLayout,
        }

    ];

    return (
        <Routes>
            {userRouters.map((item, key) => {
                const Layout = item.layout ? item.layout : React.Fragment;
                return (
                    <Route key={key}
                     path={item.path}
                      element={<Layout>{item.component}</Layout>} />
                );
            })}
        </Routes>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
