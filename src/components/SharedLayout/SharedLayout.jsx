import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (<>
        <header>
            <nav>
                <NavLink to='/' end>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </nav>
        </header>
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
    
    </>);
}