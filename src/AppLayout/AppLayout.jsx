import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"

export const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}