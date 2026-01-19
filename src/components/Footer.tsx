import { Link } from "react-router"
import { IconBrandFacebook, IconBrandFigma, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import type { NavItem } from "../navigation";
import logo from "../assets/images/logo.svg?raw";
type Props = {
    navItems: readonly NavItem[]
}
const Footer = ({ navItems }: Props) => {
    return (
        <footer>
            <div className="container-footer">
                <div className="footer-content">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-7 gap-15">
                        <div className="container-start-logo">
                            <div className="container-logo">
                                <div dangerouslySetInnerHTML={{ __html: logo }}></div>
                                {/* <h2 style={{ lineHeight: 'normal' }}>
                                    <span>A</span>
                                    <span>C</span>
                                    <span>N</span>
                                </h2> */}
                                <p className="mt-3">Diseño y desarrollo productos digitales para web y móvil, combinando creatividad, rendimiento y experiencia de usuario.</p>
                            </div>
                        </div>
                        <div className="container-link">
                            <h2 className="title-footter">Enlaces rápidos</h2>
                            <ul className="mt-4">
                                {
                                    navItems.map((item) => {
                                        if (item.href != '#')
                                            return (
                                                <li key={item.href}>
                                                    <Link to={item.href}>{item.name}</Link>
                                                </li>
                                            )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="container-link">
                            <h2 className="title-footter">Contacto</h2>
                            <ul className="mt-4">
                                <li>
                                    <Link to="#">Hablemos</Link>
                                </li>
                                <li>
                                    <Link to="#">WhatsApp</Link>
                                </li>
                                <li>
                                    <Link to="#">Correo</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="container-social">
                            <h2 className="title-footter">Redes sociales</h2>
                            <ul className="flex gap-4  items-center nav-link-social mt-4">
                                <li>
                                    <Link to="#">
                                        <IconBrandFacebook stroke={1.5} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <IconBrandLinkedin stroke={1.5} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <IconBrandGithub stroke={1.5} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <IconBrandFigma stroke={1.5} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-copyright">
                        <p className="pie">© {new Date().getFullYear()} ACN. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
