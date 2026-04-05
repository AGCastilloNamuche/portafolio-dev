import { Link } from "react-router";
import {
  IconBrandFacebook,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import type { NavItem } from "../navigation";
import logo from "../assets/images/logo.svg?raw";
import { useTranslation } from "react-i18next";

type Props = {
  navItems: readonly NavItem[];
  onContactClick: () => void;
};

const Footer = ({ navItems, onContactClick }: Props) => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container-footer">
        <div className="footer-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-7 gap-15">
            <div className="container-start-logo">
              <div className="container-logo">
                <div dangerouslySetInnerHTML={{ __html: logo }}></div>
                <p className="mt-3">{t("footer.description")}</p>
              </div>
            </div>
            <div className="container-link">
              <h2 className="title-footter">{t("footer.quickLinks")}</h2>
              <ul className="mt-4">
                {navItems.map((item) => {
                  if (item.href != "#")
                    return (
                      <li key={item.href}>
                        <Link to={item.href}>{t(`nav.${item.key}`)}</Link>
                      </li>
                    );
                })}
              </ul>
            </div>
            <div className="container-link">
              <h2 className="title-footter">{t("footer.contact")}</h2>
              <ul className="mt-4">
                <li>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onContactClick();
                    }}
                  >
                    {t("footer.letsTalk")}
                  </Link>
                </li>
                <li>
                  <Link to="https://wa.me/51968725432?text=Hola%20Gian%20Pierre,%20vi%20tu%20portafolio%20y%20me%20gustaría%20conversar%20sobre%20un%20proyecto%20de%20desarrollo.">
                    {t("footer.whatsapp")}
                  </Link>
                </li>
                <li>
                  <Link to="#">{t("footer.email")}</Link>
                </li>
              </ul>
            </div>
            <div className="container-social">
              <h2 className="title-footter">{t("footer.social")}</h2>
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
            <p className="pie">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
