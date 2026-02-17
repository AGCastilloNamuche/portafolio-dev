import { findValue } from "../util/config";
import { category, type Category } from "./category";
import { companies, type Company } from "./company";
import av_world from "../../assets/images/project/geoportal/av-world.png"
import control_user from "../../assets/images/project/geoportal/control-user.png"
import download_server from "../../assets/images/project/geoportal/download-server.png"
import home_geo from "../../assets/images/project/geoportal/home.png"
import unit from "../../assets/images/project/geoportal/unidades.png"
import view_map from "../../assets/images/project/geoportal/view-map.png"
import login_bee from "../../assets/images/project/agrobeecloud/login-bee.png"
import home_house from "../../assets/images/project/dms_house/home_house.png"
import port_movil_agrobee from "../../assets/images/project/agrobeecloud/1.png"
import port_movil_agrowhe from "../../assets/images/project/agroweather/2.png"
import agro_preview_contigo from "../../assets/images/project/agrovision-contigo/preview-contigo.svg"

export type Project = {
    id: number;
    title: string;
    images: Array<string>;
    category: Category;
    client: Company;
    description: string;
    acerca_de: string;
    link: string;
}

export const projects: ReadonlyArray<Project> = [
    {
        id: 1,
        title: "GEOPORTAL",
        images: [av_world, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name" , isReturn: false}),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name" , isReturn: true}),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "https://geoportal.agvperu.com/login",
        acerca_de:  ` `,
    },
    {
        id: 2,
        title: "AgroBeeCloud",
        images: [login_bee, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name" , isReturn: false}),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name" , isReturn: true}),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "https://agrobeecloud.agvperu.com/login",
        acerca_de:  ` `,
    },
    {
        id: 3,
        title: "DMS ",
        images: [home_house, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name" , isReturn: false}),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name" , isReturn: true}),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "http://houseselectsac.com/",
        acerca_de:  ` `,
    },
    {
        id: 4,
        title: "AgroBeeCloud (Movil)",
        images: [port_movil_agrobee, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name" , isReturn: false}),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name" , isReturn: true}),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agrobeecloud&pcampaignid=web_share",
        acerca_de:  ` `,
    },
    {
        id: 5,
        title: "AgroWeather",
        images: [port_movil_agrowhe, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name" , isReturn: false}),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name" , isReturn: true}),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agroweather&pcampaignid=web_share",
        acerca_de:  ` `,
    },
    {
        id: 6,
        title: "Agrovision contigo",
        images: [agro_preview_contigo, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name" , isReturn: false}),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name" , isReturn: true}),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agroweather&pcampaignid=web_share",
        acerca_de:  ` `,
    }
]