import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import {LocalizedIntl, } from "./components/LocalizedIntl";
import {NotFound} from "./components/NotFound";
import {DefaultNavigate} from "./components/DefaultNavigate";

ReactDOM.render(
    <React.StrictMode>
        <CookiesProvider>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<DefaultNavigate />}/>
                <Route path="/:lang/*" element={
                    <LocalizedIntl/>
                }
                />
                <Route path="/:lang/404" element={<NotFound />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
        </CookiesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
