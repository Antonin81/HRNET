import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import HomePage from "./pages/HomePage/HomePage.tsx";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage.tsx";

function AppRouter() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/employees" element={<EmployeesPage />} />
                    </Routes>
                </Router>
            </Provider>
        </React.StrictMode>
    );
}

export default AppRouter;
