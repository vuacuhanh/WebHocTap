import { ROUTERS } from "./router";
import HomePage from "../pages/Homepage";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "../theme/masterLayout";
import Login from "../Accounts/login";
import Register from "../Accounts/register";
import React from "react";
import AccountLayout from "../theme/accountLayout";
import CalculatorPage from "../pages/calculator/calculatorPage";
import SpellingPage from "../pages/spell/spellingPage";

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
        },
        {
            path:ROUTERS.STUDENT.CALCULATOR,
            component: <CalculatorPage />,
            layout: MasterLayout,
        },
        {
            path: ROUTERS.STUDENT.SPELLING,
            component: <SpellingPage />,
            layout:MasterLayout
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
