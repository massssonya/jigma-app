import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="app">
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/editor">Editor</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
