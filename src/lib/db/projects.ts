import { filters, findValue } from "../util/config";
import { category, type Category } from "./category";
import { companies, type Company } from "./company";
import av_world from "../../assets/images/project/geoportal/av-world.png"
import control_user from "../../assets/images/project/geoportal/control-user.png"
import download_server from "../../assets/images/project/geoportal/download-server.png"
import home_geo from "../../assets/images/project/geoportal/home.png"
import unit from "../../assets/images/project/geoportal/unidades.png"
import view_unit from "../../assets/images/project/geoportal/view-unit.png"
import view_map from "../../assets/images/project/geoportal/view-map.png"
import login_bee from "../../assets/images/project/agrobeecloud/login-bee.png"
import home_house from "../../assets/images/project/dms_house/home_house.png"
import view_file from "../../assets/images/project/geoportal/view-file.png"
import track from "../../assets/images/project/geoportal/track.png"
import port_movil_agrobee from "../../assets/images/project/agrobeecloud/1.png"
import port_movil_agrowhe from "../../assets/images/project/agroweather/2.png"
import agro_preview_contigo from "../../assets/images/project/agrovision-contigo/preview-contigo.svg"
import { skills, type Skill } from "./skills";
import startIcon from "../../assets/start.svg?raw"

export type Projects = {
    id: string;
    title: string;
    images: Array<string>;
    category: Category;
    client: Company;
    description: string;
    acerca_de: string;
    link: string;
    date: string;
    role: string;
    frontend: Skill[];
    backend: Skill[];
    db: Skill[];
    infraestructura: Skill[];
}

export const projects: ReadonlyArray<Projects> = [
    {
        id: "60ed76a3-e4f3-4c13-a939-af3142264b35",
        title: "GEOPORTAL",
        images: [home_geo, av_world, unit, view_unit, track, download_server, view_map, view_file, control_user],
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: ``,
        link: "https://geoportal.agvperu.com/login",
        date: "2022-01-01",
        frontend: filters({
            array: skills,
            key: "id",
            value: [1, 22, 23, 24, 29, 43]
        }),
        db: filters({
            array: skills,
            key: "id",
            value: [28, 48]
        }),
        backend: filters({
            array: skills,
            key: "id",
            value: [5, 6]
        }),
        role: "Full Stack Developer",
        infraestructura: filters({
            array: skills,
            key: "id",
            value: [44, 49]
        }),
        acerca_de: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Resumen del
                </span>
                <span class="font-acorn dark:text-white">proyecto</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[14px] dark:text-white text-justify">
                  Diseño y desarrollo de una solución tecnológica escalable orientada a la agricultura de precisión. La plataforma actúa como el cerebro digital de la organización, permitiendo a usuarios administrativos y operativos visualizar, analizar y descargar información crítica de campos de cultivo distribuidos en múltiples continentes (Perú, México, Marruecos, China, entre otros).
                </p>
            </div>

            <h2 class="text-xl uppercase mb-5">
                <span class="font-acorn  bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Módulos y Funcionalidades
                </span>
                <span class="font-acorn dark:text-white">
                Clave:
                </span>
            </h2>

            <div class="flex flex-col">
                <div clas="relative">
                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Arquitectura de Seguridad y Roles (RBAC):
                            </h3>
                            <p class="text-[14px] text-justify mb-2 dark:text-white">
                               Sistema avanzado de autenticación que segmenta el acceso a la información. 
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    <span class="font-bold">Administradores:</span> 
                                    Control total con acceso a gestión de usuarios, configuración del sistema y herramientas de procesamiento de índices.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    <span class="font-bold">Usuarios Operativos:</span> 
                                    Acceso restringido y personalizado según la asignación geográfica (País) y la Unidad de Negocio (ej. Arándano, Uva, Espárrago), garantizando la confidencialidad de los datos.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Visores Geoespaciales Especializados:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Implementación de mapas interactivos categorizados por necesidades agronómicas:
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    <span class="font-bold">Monitoreo de Cultivo:</span> 
                                    Visualización de anomalías fenológicas, seguimiento fitosanitario y estudios de suelos con simbología dinámica.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    <span class="font-bold">Teledetección:</span> 
                                    Módulos para la visualización de imágenes satelitales y capas de índices espectrales (NDVI, NDMI) para el análisis de vigor y estrés hídrico.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    <span class="font-bold">Integraciones:</span> 
                                    Visores complementarios que conectan con servicios externos de IoT y robótica como Phytech, Supplant y Agrobee.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-5">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Gestión Documental "Centro de Descargas":
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Desarrollo de un sistema de archivos intuitivo con experiencia de usuario similar a plataformas comerciales (tipo OneDrive/Google Drive). Permite la navegación por directorios, búsqueda inteligente y previsualización de archivos técnicos (PDFs cartográficos, Rúbricas) y descarga de data pesada (.TIF, Shapefiles) organizada automáticamente por la jerarquía del usuario.
                            </p>
                        </div>
                    </div>

                     <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Dashboard Global (AV World):
                            </h3>
                            <p class="text-[14px] text-justify mb-2 dark:text-white">
                               Panel de control estratégico que consolida la superficie productiva (hectáreas) a nivel mundial, ofreciendo una visión macro de la operación agroindustrial.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

             <h2 class="text-xl uppercase mb-1">
                <span class="font-acorn  bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Impacto
                </span>
                <span class="font-acorn dark:text-white">
                Técnico:
                </span>
            </h2>

            <p class="text-[14px] dark:text-white text-justify mb-2">
                Este desarrollo optimiza la toma de decisiones al reducir la brecha entre la data de campo y la gerencia, eliminando silos de información y proveyendo herramientas de análisis espacial en tiempo real.
            </p>
        `,
    },
    {
        id: "2db5f6c0-eabd-4f79-8f19-19ac0ea7f0ff",
        title: "AgroBeeCloud",
        images: [login_bee, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "https://agrobeecloud.agvperu.com/login",
        acerca_de: ` `,
        role: "Full Stack Developer",
        date: "2022-01-01",
        frontend: filters({
            array: skills,
            key: "id",
            value: [1, 22, 23, 24, 29, 43]
        }),
        db: filters({
            array: skills,
            key: "id",
            value: [28, 48]
        }),
        backend: filters({
            array: skills,
            key: "id",
            value: [5, 6]
        }),

        infraestructura: filters({
            array: skills,
            key: "id",
            value: [44, 49]
        }),
    },
    {
        id: "50733791-c545-4b2b-9caf-82b334d73b30",
        title: "DMS ",
        images: [home_house, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 5, returnkey: "name", isReturn: false }),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "http://houseselectsac.com/",
        acerca_de: ` `,
        role: "Full Stack Developer",
        date: "2022-01-01",
        frontend: filters({
            array: skills,
            key: "id",
            value: [1, 22, 23, 24, 29, 43]
        }),
        db: filters({
            array: skills,
            key: "id",
            value: [28, 48]
        }),
        backend: filters({
            array: skills,
            key: "id",
            value: [5, 6]
        }),

        infraestructura: filters({
            array: skills,
            key: "id",
            value: [44, 49]
        }),
    },
    {
        id: "4c25259c-656d-455a-9269-66f45362636d",
        title: "AgroBeeCloud (Movil)",
        images: [port_movil_agrobee, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agrobeecloud&pcampaignid=web_share",
        acerca_de: ` `,
        date: "2022-01-01",
        role: "Full Stack Developer",
        frontend: filters({
            array: skills,
            key: "id",
            value: [1, 22, 23, 24, 29, 43]
        }),
        db: filters({
            array: skills,
            key: "id",
            value: [28, 48]
        }),
        backend: filters({
            array: skills,
            key: "id",
            value: [5, 6]
        }),

        infraestructura: filters({
            array: skills,
            key: "id",
            value: [44, 49]
        }),
    },
    {
        id: "323623a5-556e-442f-8523-5f4f8b92072d",
        title: "AgroWeather",
        images: [port_movil_agrowhe, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agroweather&pcampaignid=web_share",
        acerca_de: ` `,
        date: "2022-01-01",
        role: "Full Stack Developer",
        frontend: filters({
            array: skills,
            key: "id",
            value: [1, 22, 23, 24, 29, 43]
        }),
        db: filters({
            array: skills,
            key: "id",
            value: [28, 48]
        }),
        backend: filters({
            array: skills,
            key: "id",
            value: [5, 6]
        }),

        infraestructura: filters({
            array: skills,
            key: "id",
            value: [44, 49]
        }),
    },
    {
        id: "70ed76a3-e4f3-4c13-a939-af3142264b35",
        title: "Agrovision contigo",
        images: [agro_preview_contigo, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: `Plataforma web integral desarrollada a medida para la gestión y visualización de activos agrícolas 
        a nivel global. El sistema centraliza el monitoreo fenológico, fitosanitario y climático mediante visores de mapas 
        interactivos y procesamieto de índices espectrales. Cuenta con una arquitectura basada en roles (RBAC) que 
        personaliza la experiencia por unidad de negocio y país, e integra un "Centro de Descargas" con interfaz tipo nube 
        (similar a OneDrive) para la gestión segura de archivos geoespaciales (Shapefiles, TIFF, reportes).`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agroweather&pcampaignid=web_share",
        acerca_de: ` `,
        date: "2022-01-01",
        role: "Full Stack Developer",
        frontend: filters({
            array: skills,
            key: "id",
            value: [1, 22, 23, 24, 29, 43]
        }),
        db: filters({
            array: skills,
            key: "id",
            value: [28, 48]
        }),
        backend: filters({
            array: skills,
            key: "id",
            value: [5, 6]
        }),

        infraestructura: filters({
            array: skills,
            key: "id",
            value: [44, 49]
        }),
    },
    {
        id: "75e8d9ac-a7bc-489b-8046-a5941cb45721",
        title: "Seguimiento fitosanitario",
        images: [agro_preview_contigo, control_user, download_server, home_geo, unit, view_map],
        category: findValue({ array: category, key: "id", value: 3, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: ``,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agroweather&pcampaignid=web_share",
        acerca_de: ` `,
        date: "2022-01-01",
        role: "Full Stack Developer",
        frontend: filters({
            array: skills,
            key: "id",
            value: [1, 22, 23, 24, 29, 43]
        }),
        db: filters({
            array: skills,
            key: "id",
            value: [28, 48]
        }),
        backend: filters({
            array: skills,
            key: "id",
            value: [5, 6]
        }),

        infraestructura: filters({
            array: skills,
            key: "id",
            value: [44, 49]
        }),
    }
]