import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../components/Header';

export default function Layout() {
    return (
        <>
            <Header></Header>
            <Outlet />
        </>
    )
}
