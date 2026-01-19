import { NavLink } from "react-router";
import type { NavItem } from "../navigation";
import { IconCode } from "@tabler/icons-react";
import logo from "../assets/images/logo.svg?raw"

type Props = {
    navItems: readonly NavItem[]
}

const HorizontalNavLayout = ({ navItems }: Props) => {

    return (
        <div className="layout-navbar-and-nav-container">
            <div className="layout-navbar">
                <header className="navbar-content-container">
                    <div className="navbar-container">
                        <div className="container-logo flex items-center">
                            <div dangerouslySetInnerHTML={{ __html: logo }}></div>
                            {/* <h2>
                                <span>A</span>
                                <span>C</span>
                                <span>N</span>
                            </h2> */}
                        </div>
                        <nav className="navbar-content">
                            <ul className="nav-items">
                                {
                                    navItems.map((item) => {
                                        const { href, name } = item;
                                        return (
                                            <li key={href}>
                                                <NavLink className={({ isActive }) => (isActive && href != "#" ? "active " : "")} to={href}>
                                                    <span className="mr-2">{name} </span>
                                                    {href === "/" && <span className="border-1 rounded border-gray-300 code  text-gray-500"> {"</>"}</span>}
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>

                        <div className="container-button">
                            <button className="btn btn-gradient-primary">Descargar CV</button>
                        </div>
                    </div>
                </header>
            </div >
        </div >
    );
};

export default HorizontalNavLayout;
