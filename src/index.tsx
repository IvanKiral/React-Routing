import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LocalizedApp } from "./components/LocalizedApp";
import Cookies from 'universal-cookie';

const cookies = new Cookies(document.cookie);
const lang = cookies.get('lang') ?? 'en';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {["en", "sk"].map((value) => (
                    <Route
                        key={value}
                        path={`/${value.toLowerCase()}/*`}
                        element={<LocalizedApp lang={value} />}
                    />
                ))}
                <Route path="/" element={<Navigate to={`/${lang.toLowerCase()}`} />} />
                <Route
                    path="*"
                    element={<Navigate to={`/${lang.toLowerCase()}/404`} />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);