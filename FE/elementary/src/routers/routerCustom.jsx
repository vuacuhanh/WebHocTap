import { ROUTERS } from "./router";
import HomePage from "../pages/Homepage";
import { Router,Routes,Route } from "react-router-dom";
import MasterLayout from "../theme/masterLayout";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.STUDENT.HOME,
            component: <HomePage />,
        },
        {
            path: ROUTERS.STUDENT.PROFILE,
            component:<profileStudent />,
        },
        {
            path: ROUTERS.STUDENT.NOTIFICATiON,
            component:<profileStudent />,
        },
        {
            path: ROUTERS.STUDENT.NEW,
            component:<profileStudent />,
        }
    ]
    return(
        <MasterLayout>
            <Routes>
            {
                userRouters.map((item,key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))
            }
            </Routes>   
        </MasterLayout>
        
    )
    
}


const RouterCustom = () =>{
    return renderUserRouter();
}
export default RouterCustom;