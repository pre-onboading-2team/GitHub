import {ROUTER} from "./routes";
import Issue from "../pages/issue";
import {Route, Routes} from "react-router-dom";
import IssueDetail from "../pages/issue/component/IssueDetail";
import IssueList from "../pages/issue/component/IssueList";

export default function RootRouter() {
    const ListRoutes = [
        {
            path: ROUTER.ISSUE,
            component: <Issue />
        },
        {
            path: ROUTER.ISSUE_LIST,
            component: <IssueList />
        },
        {
            path: "/:number",
            component: <IssueDetail />
        },
    ];

    return(
        <>
                <Routes>
                    {ListRoutes.map((page, index) =>{
                        return <Route key={index} path={page.path} element={page.component}/>;
                    })}
                </Routes>
        </>
    )
}
