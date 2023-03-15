import { ReactElement, Fragment } from "react";
import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { IRoutes } from "./App/shared/interfaces/routes/routes.interface";
import { routes } from "./App/shared/utils/mocs/routes/routes.moc";

function Routes(): ReactElement {
    return (
        <BrowserRouter>
            <Switch>
                {
                    /* Dinamically adding routes to react router dom */
                    routes.map((element: IRoutes) => {
                        if (element.redirect === true) {
                            return (
                                <Fragment key={element.path}>
                                    <Route path="*" element={<Navigate to={element.path} />} />
                                    <Route path={element.path} element={element.component} />
                                </Fragment>
                            );
                        } else {
                            return <Route path={element.path} element={element.component} key={element.path} />;
                        }
                    })
                }
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;