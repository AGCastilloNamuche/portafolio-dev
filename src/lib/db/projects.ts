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
import agrobee_login_screen from "../../assets/images/project/agrobeecloud/login-screen.png"
import agrobee_home_screen from "../../assets/images/project/agrobeecloud/home-screen.png"
import agrobee_states_screen from "../../assets/images/project/agrobeecloud/states-screen.png"
import agrobee_hives_screen from "../../assets/images/project/agrobeecloud/hives-screen.png"
import agrobee_inspections_screen from "../../assets/images/project/agrobeecloud/inspections-screen.png"
import agrobee_pecoreo_screen from "../../assets/images/project/agrobeecloud/pecoreo-screen.png"
import agrobee_dashboard_screen from "../../assets/images/project/agrobeecloud/dashboard-screen.png"
import agrobee_mobile_dashboard_screen from "../../assets/images/project/agrobeecloud/mobile-dashboard-screen.jpeg"
import agrobee_mobile_menu_screen from "../../assets/images/project/agrobeecloud/mobile-menu-screen.jpeg"
import agrobee_mobile_inspections_screen from "../../assets/images/project/agrobeecloud/mobile-inspections-screen.jpeg"
import agrobee_mobile_pecoreo_screen from "../../assets/images/project/agrobeecloud/mobile-pecoreo-screen.jpeg"
import agrobee_mobile_map_screen from "../../assets/images/project/agrobeecloud/mobile-map-screen.jpeg"
import agrobee_mobile_map_detail_screen from "../../assets/images/project/agrobeecloud/mobile-map-detail-screen.jpeg"
import agrobee_mobile_transfer_screen from "../../assets/images/project/agrobeecloud/mobile-transfer-screen.jpeg"
import port_movil_agrobee from "../../assets/images/project/agrobeecloud/1.png"
import dms_login_screen from "../../assets/images/project/dms_house/login-screen.png"
import dms_home_screen from "../../assets/images/project/dms_house/home-screen.png"
import dms_documents_screen from "../../assets/images/project/dms_house/documents-screen.png"
import dms_dashboard_screen from "../../assets/images/project/dms_house/dashboard-screen.png"
import view_file from "../../assets/images/project/geoportal/view-file.png"
import track from "../../assets/images/project/geoportal/track.png"
import port_movil_agrowhe from "../../assets/images/project/agroweather/2.png"
import agroweather_mobile_storms_screen from "../../assets/images/project/agroweather/mobile-storms-screen.jpeg"
import agroweather_mobile_station_map_screen from "../../assets/images/project/agroweather/mobile-station-map-screen.jpeg"
import agroweather_mobile_features_screen from "../../assets/images/project/agroweather/mobile-features-screen.jpeg"
import agroweather_mobile_onboarding_informed_screen from "../../assets/images/project/agroweather/mobile-onboarding-informed-screen.jpeg"
import agroweather_mobile_onboarding_control_screen from "../../assets/images/project/agroweather/mobile-onboarding-control-screen.jpeg"
import agroweather_mobile_onboarding_hello_screen from "../../assets/images/project/agroweather/mobile-onboarding-hello-screen.jpeg"
import agroweather_mobile_login_screen from "../../assets/images/project/agroweather/mobile-login-screen.jpeg"
import agroweather_mobile_metrics_screen from "../../assets/images/project/agroweather/mobile-metrics-screen.jpeg"
import agroweather_mobile_splash_screen from "../../assets/images/project/agroweather/mobile-splash-screen.jpeg"
import agro_preview_contigo from "../../assets/images/project/agrovision-contigo/preview-contigo.svg"
import agro_contigo_mobile_cover_screen from "../../assets/images/project/agrovision-contigo/mobile-cover-screen.png"
import agro_contigo_mobile_home_screen from "../../assets/images/project/agrovision-contigo/mobile-home-screen.png"
import agro_contigo_mobile_about_screen from "../../assets/images/project/agrovision-contigo/mobile-about-screen.png"
import agro_contigo_mobile_news_screen from "../../assets/images/project/agrovision-contigo/mobile-news-screen.png"
import agro_contigo_mobile_payslips_screen from "../../assets/images/project/agrovision-contigo/mobile-payslips-screen.png"
import agro_contigo_mobile_profile_screen from "../../assets/images/project/agrovision-contigo/mobile-profile-screen.png"
import agro_contigo_mobile_surveys_screen from "../../assets/images/project/agrovision-contigo/mobile-surveys-screen.png"
import agro_contigo_mobile_documents_screen from "../../assets/images/project/agrovision-contigo/mobile-documents-screen.png"
import agro_contigo_mobile_login_screen from "../../assets/images/project/agrovision-contigo/mobile-login-screen.png"
import agro_contigo_mobile_queries_screen from "../../assets/images/project/agrovision-contigo/mobile-queries-screen.png"
import trial_analysis_dashboard_screen from "../../assets/images/project/analisis-ensayos/dashboard-screen.png"
import trial_analysis_comparison_screen from "../../assets/images/project/analisis-ensayos/comparison-screen.png"
import trial_analysis_distribution_screen from "../../assets/images/project/analisis-ensayos/distribution-screen.png"
import trial_analysis_report_screen from "../../assets/images/project/analisis-ensayos/report-screen.png"
import trial_analysis_geoprocess_screen from "../../assets/images/project/analisis-ensayos/geoprocess-screen.png"
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
                <div class="relative">
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
        images: [
            agrobee_login_screen,
            agrobee_home_screen,
            agrobee_states_screen,
            agrobee_hives_screen,
            agrobee_inspections_screen,
            agrobee_pecoreo_screen,
            agrobee_dashboard_screen
        ],
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: ``,
        link: "https://agrobeecloud.agvperu.com/login",
        acerca_de: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Resumen del
                </span>
                <span class="font-acorn dark:text-white">proyecto</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[14px] dark:text-white text-justify">
                  AgroBeeCloud es una plataforma web orientada a la gestion operativa de colmenas, inspecciones apicolas y pecoreo. El sistema centraliza la informacion de proveedores, entradas de colmenas, estados sanitarios y productivos, numero de pasadas e historial de evaluaciones de campo, permitiendo que los equipos tecnicos y administrativos tengan trazabilidad completa sobre cada registro.
                </p>
            </div>

            <h2 class="text-xl uppercase mb-5">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Modulos y Funcionalidades
                </span>
                <span class="font-acorn dark:text-white">
                  Clave:
                </span>
            </h2>

            <div class="flex flex-col">
                <div class="relative">
                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Gestion de proveedores y colmenas:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Registro y seguimiento de colmenas agrupadas por proveedor, facilitando conocer cuantas entradas existen, su distribucion en campo y el detalle operativo de cada unidad.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Control de colmenas por proveedor, fundo, etapa, campo, turno y lote.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Consulta de codigos, fechas de registro e instalacion, asi como estado actual por colmena.
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
                                Inspecciones tecnicas y control de estado:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Modulo diseñado para supervisar el ciclo de inspeccion de cada colmena y evaluar su condicion en campo con criterios tecnicos estandarizados.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Seguimiento de colmenas inspeccionadas vs. pendientes, con filtros por proveedor, colmena y fecha.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Registro de fortaleza, poblacion, temperamento, alzas, marcos, alimentador, reina vista y celda real.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Visualizacion del estado de cada colmena y del numero de pasada para mantener continuidad en el monitoreo.
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
                                Pecoreo y evaluaciones de campo:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               El sistema incorpora evaluaciones de pecoreo para medir la actividad de las abejas sobre el cultivo y relacionarla con el comportamiento productivo en distintas zonas del campo.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Registro de visitas por fecha, semana, fundo, etapa, campo, turno, lote y variedad.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Seguimiento de transectas, numero de visitas, horario de observacion y oferta floral para el analisis del rendimiento apicola.
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
                                Dashboard y monitoreo operativo:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Panel central para visualizar metricas de colmenas, inspecciones, pecoreo y ubicaciones, ayudando a identificar rapidamente volumen de registros, avances de supervision y comportamiento por proveedor o zona.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

             <h2 class="text-xl uppercase mb-1">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Impacto
                </span>
                <span class="font-acorn dark:text-white">
                  Operativo:
                </span>
            </h2>

            <p class="text-[14px] dark:text-white text-justify mb-2">
                AgroBeeCloud mejora la trazabilidad de la operacion apicola al consolidar datos dispersos en una sola plataforma, agilizando la toma de decisiones sobre proveedores, colmenas e inspecciones, y permitiendo una supervision mas precisa del estado y rendimiento de cada unidad en campo.
            </p>
        `,
        role: "Full Stack Developer",
        date: "2022-01-01",
        frontend: filters({
            array: skills,
            key: "id",
            value: [22, 23, 29, 43]
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
        images: [
            dms_login_screen,
            dms_home_screen,
            dms_documents_screen,
            dms_dashboard_screen
        ],
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 5, returnkey: "name", isReturn: false }),
        description: ``,
        link: "http://houseselectsac.com/",
        acerca_de: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Resumen del
                </span>
                <span class="font-acorn dark:text-white">proyecto</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[14px] dark:text-white text-justify">
                  DMS es un sistema de gestion documentaria diseñado para centralizar y organizar la informacion interna de la empresa, incluyendo facturas, boletas, archivos de clientes, documentacion de proyectos y expedientes administrativos. La plataforma permite almacenar, clasificar, buscar y supervisar documentos desde una interfaz operativa pensada para distintas areas del negocio.
                </p>
            </div>

            <h2 class="text-xl uppercase mb-5">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Modulos y Funcionalidades
                </span>
                <span class="font-acorn dark:text-white">
                  Clave:
                </span>
            </h2>

            <div class="flex flex-col">
                <div class="relative">
                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Repositorio documental centralizado:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Gestion de archivos y carpetas organizados por unidad, area y tipo de documento, facilitando el acceso rapido a informacion critica del negocio.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Almacenamiento estructurado de facturas, boletas, contratos, expedientes y archivos de clientes.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Navegacion por carpetas como area administrativa, contable, legal, recursos humanos, proyectos y otras unidades operativas.
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
                                Busqueda y acceso a documentos:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               La plataforma incorpora mecanismos de busqueda y organizacion que permiten localizar documentos especificos dentro de grandes volumenes de informacion.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Busqueda por nombre de archivo y resultados inmediatos dentro de la estructura documental.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Vistas de explorador para administrar carpetas, crear nuevos registros y mantener el orden documental por area o proyecto.
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
                                Gestion operativa y control de accesos:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               El sistema contempla modulos de configuracion, tablas maestras y control de accesos para administrar permisos segun el rol o area responsable de cada documento.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Segmentacion de la informacion por usuario, unidad o proceso interno.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Soporte para reportes y supervisión de la actividad documental desde una sola plataforma.
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
                                Dashboard y analitica de negocio:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               El dashboard consolida indicadores clave como proyectos, clientes, carpetas y archivos, ademas de paneles estadisticos que ayudan a entender la distribucion de clientes por ubigeo, ocupacion y edad para una mejor lectura operativa y comercial.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="text-xl uppercase mb-1">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Impacto
                </span>
                <span class="font-acorn dark:text-white">
                  Operativo:
                </span>
            </h2>

            <p class="text-[14px] dark:text-white text-justify mb-2">
                DMS mejora el control documental de la organizacion al reducir la dispersion de archivos, acelerar la localizacion de documentos y ofrecer visibilidad ejecutiva sobre el volumen y distribucion de la informacion, fortaleciendo tanto la operacion administrativa como el seguimiento comercial.
            </p>
        `,
        role: "Full Stack Developer",
        date: "2022-01-01",
        frontend: filters({
            array: skills,
            key: "id",
            value: [22, 43]
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
        images: [
            port_movil_agrobee,
            agrobee_mobile_dashboard_screen,
            agrobee_mobile_menu_screen,
            agrobee_mobile_inspections_screen,
            agrobee_mobile_pecoreo_screen,
            agrobee_mobile_map_screen,
            agrobee_mobile_map_detail_screen,
            agrobee_mobile_transfer_screen
        ],
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: `Aplicacion movil desarrollada para dar seguimiento en campo a colmenas, inspecciones, pecoreo y ubicaciones geoespaciales. Permite a los equipos operativos consultar indicadores clave, registrar actividad apicola, trabajar en modo offline y transferir la informacion al servidor cuando recuperan conectividad.`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agrobeecloud&pcampaignid=web_share",
        acerca_de: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Resumen del
                </span>
                <span class="font-acorn dark:text-white">proyecto</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[14px] dark:text-white text-justify">
                  AgroBeeCloud Movil es la extension de campo del ecosistema apicola, diseñada para que supervisores y operarios puedan consultar informacion critica desde el telefono mientras recorren lotes y colmenas. La aplicacion concentra indicadores operativos, inspecciones, pecoreo y geolocalizacion en una interfaz agil pensada para trabajo en terreno.
                </p>
            </div>

            <h2 class="text-xl uppercase mb-5">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Modulos y Funcionalidades
                </span>
                <span class="font-acorn dark:text-white">
                  Clave:
                </span>
            </h2>

            <div class="flex flex-col">
                <div class="relative">
                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Dashboard movil en tiempo real:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Pantalla de inicio enfocada en una lectura rapida del estado operativo, mostrando total de colmenas, inspecciones registradas, porcentaje de fortalezas y actividad de pecoreo.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Navegacion simplificada para campo:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Menu lateral con acceso directo a inicio, colmenas, inspecciones, pecoreo, mapa y configuracion, reduciendo pasos para que el usuario opere rapidamente desde el dispositivo movil.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Inspecciones y evaluacion de colmenas:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               La app permite consultar inspecciones en formato de tarjetas, con busqueda rapida y lectura visual del avance o condicion de cada colmena mediante indicadores circulares y datos clave de proveedor, codigo y estado.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Pecoreo y monitoreo agricola:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Registro y consulta de actividad de abejas por fecha, fundo, campo, lote, transecta, horario, numero de visitas, ingreso y oferta floral, facilitando el seguimiento productivo directamente en campo.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Trabajo offline y transferencia de datos:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               La aplicacion permite seguir registrando informacion cuando el usuario trabaja sin conexion. Las inspecciones y evaluaciones capturadas en modo offline quedan pendientes de sincronizacion y luego pueden transferirse al servidor por modulo, asegurando continuidad operativa incluso en zonas con baja cobertura.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-5">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Mapa geoespacial y detalle del lote:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               El modulo de mapa muestra la ubicacion del usuario en tiempo real, valida precision GPS y despliega informacion detallada del lote seleccionado, incluyendo cultivo, area, etapa, campo, turno, variedad, densidad y accesos para evaluar pecoreo o abrir el portal principal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="text-xl uppercase mb-1">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Impacto
                </span>
                <span class="font-acorn dark:text-white">
                  Operativo:
                </span>
            </h2>

            <p class="text-[14px] dark:text-white text-justify mb-2">
                AgroBeeCloud Movil acerca la informacion al equipo de campo y reduce la dependencia de estaciones de trabajo fijas, permitiendo tomar decisiones inmediatas sobre colmenas, inspecciones y pecoreo con contexto geoespacial, captura offline y sincronizacion posterior con el servidor.
            </p>
        `,
        date: "2022-01-01",
        role: "Full Stack Developer",
        frontend: filters({
            array: skills,
            key: "id",
            value: [7, 8]
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
        images: [
            port_movil_agrowhe,
            agroweather_mobile_splash_screen,
            agroweather_mobile_login_screen,
            agroweather_mobile_features_screen,
            agroweather_mobile_station_map_screen,
            agroweather_mobile_metrics_screen,
            agroweather_mobile_storms_screen,
            agroweather_mobile_onboarding_hello_screen,
            agroweather_mobile_onboarding_control_screen,
            agroweather_mobile_onboarding_informed_screen
        ],
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: `Aplicacion movil orientada al monitoreo meteorologico agricola. Permite consultar estaciones en mapa, revisar variables climaticas en tiempo real, visualizar tormentas satelitales y acceder a informacion clave para la toma de decisiones en campo.`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agroweather&pcampaignid=web_share",
        acerca_de: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Resumen del
                </span>
                <span class="font-acorn dark:text-white">proyecto</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[14px] dark:text-white text-justify">
                  AgroWeather es una aplicacion movil creada para acercar informacion meteorologica al equipo agricola desde una experiencia simple y visual. La app concentra el monitoreo de estaciones climaticas, el seguimiento de variables atmosfericas y un visualizador satelital de tormentas, permitiendo reaccionar con mayor rapidez frente a cambios del clima en campo.
                </p>
            </div>

            <h2 class="text-xl uppercase mb-5">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Modulos y Funcionalidades
                </span>
                <span class="font-acorn dark:text-white">
                  Clave:
                </span>
            </h2>

            <div class="flex flex-col">
                <div class="relative">
                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Onboarding y acceso a la aplicacion:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               La experiencia inicia con pantallas introductorias que explican el valor de la plataforma y conducen a un flujo de autenticacion optimizado para el uso movil en campo.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Mapa de estaciones meteorologicas:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Visualizacion geoespacial de estaciones distribuidas en campo para identificar rapidamente el punto de monitoreo y acceder al detalle operativo de cada ubicacion.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Ubicacion de estaciones dentro del fundo con actualizacion visible por fecha y hora.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Acceso directo al resumen de condiciones climaticas de cada estacion.
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
                                Variables climaticas en tiempo real:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               La app presenta indicadores meteorologicos clave para apoyar decisiones agronomicas y operativas desde el telefono.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Temperatura actual, sensacion termica, maxima y minima.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Velocidad y direccion del viento, humedad relativa, lluvia, presion atmosferica y radiacion solar.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Consulta historica diaria para revisar la evolucion de los datos climaticos.
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
                                Visualizador de tormentas satelitales:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Modulo especializado para visualizar informacion satelital de tormentas con soporte de fuentes como GOES y SENAMHI, brindando contexto rapido sobre formaciones nubosas y eventos climaticos relevantes para la operacion agricola.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="text-xl uppercase mb-1">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Impacto
                </span>
                <span class="font-acorn dark:text-white">
                  Operativo:
                </span>
            </h2>

            <p class="text-[14px] dark:text-white text-justify mb-2">
                AgroWeather mejora la capacidad de anticipacion climatica del equipo al reunir pronostico, estaciones y visualizacion satelital en una sola app movil, ayudando a planificar mejor actividades de campo, riego, aplicaciones y respuesta frente a eventos meteorologicos.
            </p>
        `,
        date: "2022-01-01",
        role: "Full Stack Developer",
        frontend: filters({
            array: skills,
            key: "id",
            value: [7, 8]
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
        images: [
            agro_preview_contigo,
            agro_contigo_mobile_cover_screen,
            agro_contigo_mobile_login_screen,
            agro_contigo_mobile_home_screen,
            agro_contigo_mobile_about_screen,
            agro_contigo_mobile_news_screen,
            agro_contigo_mobile_payslips_screen,
            agro_contigo_mobile_profile_screen,
            agro_contigo_mobile_surveys_screen,
            agro_contigo_mobile_documents_screen,
            agro_contigo_mobile_queries_screen
        ],
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: `Aplicacion movil de comunicacion interna y autoservicio para colaboradores. Permite acceder a informacion corporativa, comunicados, boletas, encuestas, documentos, consultas y actualizacion de datos personales desde una experiencia simple y cercana.`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agroweather&pcampaignid=web_share",
        acerca_de: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Resumen del
                </span>
                <span class="font-acorn dark:text-white">proyecto</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[14px] dark:text-white text-justify">
                  Agrovision Contigo es una aplicacion movil pensada para fortalecer la comunicacion con los colaboradores y ofrecer un canal de autoservicio digital. La plataforma integra contenido institucional, novedades internas, acceso a boletas, actualizacion de datos, encuestas y seguimiento de consultas, acercando la empresa al trabajador desde una experiencia movil clara y amigable.
                </p>
            </div>

            <h2 class="text-xl uppercase mb-5">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Modulos y Funcionalidades
                </span>
                <span class="font-acorn dark:text-white">
                  Clave:
                </span>
            </h2>

            <div class="flex flex-col">
                <div class="relative">
                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Portada institucional y acceso:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               La aplicacion combina una portada publica de marca con acceso rapido para colaboradores, reforzando identidad corporativa y disponibilidad del servicio desde el primer contacto.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Inicio y contenido corporativo:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               El home centraliza accesos a secciones clave como Conocenos, Comunicados, Boletas y actualizacion de datos, facilitando una navegacion sencilla para el colaborador.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Seccion institucional para compartir quien es la empresa, su impacto y su propuesta de valor.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Espacio de bienvenida con accesos visuales a los modulos principales.
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
                                Comunicados, boletas y documentos:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               La app facilita la distribucion de informacion relevante para el trabajador, reduciendo friccion en procesos que normalmente dependen de canales manuales.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Publicacion de comunicados internos y novedades organizacionales.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Consulta de boletas de pago por periodo desde el telefono.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Visualizacion de documentos y atenciones asociadas al colaborador.
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
                                Perfil, encuestas y consultas:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               La plataforma incorpora herramientas de autoservicio para mantener informacion actualizada y abrir canales de participacion y seguimiento.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Actualizacion de datos personales como numero de celular y estado del colaborador.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Encuestas para recoger opinion y percepciones internas.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Seguimiento de consultas y solicitudes mediante codigos de atencion y estado de respuesta.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="text-xl uppercase mb-1">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Impacto
                </span>
                <span class="font-acorn dark:text-white">
                  Operativo:
                </span>
            </h2>

            <p class="text-[14px] dark:text-white text-justify mb-2">
                Agrovision Contigo mejora la comunicacion interna y la experiencia del colaborador al concentrar informacion, documentos y tramites frecuentes en una sola app movil, reduciendo dependencias de canales dispersos y haciendo mas accesibles los servicios internos de la empresa.
            </p>
        `,
        date: "2022-01-01",
        role: "Full Stack Developer",
        frontend: filters({
            array: skills,
            key: "id",
            value: [7, 8]
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
        title: "Analisis de ensayos",
        images: [
            trial_analysis_dashboard_screen,
            trial_analysis_comparison_screen,
            trial_analysis_distribution_screen,
            trial_analysis_report_screen,
            trial_analysis_geoprocess_screen
        ],
        category: findValue({ array: category, key: "id", value: 3, returnkey: "name", isReturn: false }),
        client: findValue({ array: companies, key: "id", value: 2, returnkey: "name", isReturn: false }),
        description: `Plataforma de analisis espacial para ensayos agricolas que permite procesar indices espectrales, comparar tratamientos, medir evolucion por niveles y generar reportes detallados. Incluye un script de conversion de indices respaldado por un estudio tecnico para estandarizar la interpretacion de resultados.`,
        link: "https://play.google.com/store/apps/details?id=com.agrovisioncorp.agroweather&pcampaignid=web_share",
        acerca_de: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Resumen del
                </span>
                <span class="font-acorn dark:text-white">proyecto</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[14px] dark:text-white text-justify">
                  Analisis de ensayos es una solucion orientada a evaluar pruebas agronomicas mediante imagenes satelitales y procesamiento de indices espectrales. La plataforma permite analizar lotes experimentales, comparar tratamientos y revisar la evolucion temporal de cada ensayo con apoyo de mapas, indicadores y reportes tabulares.
                </p>
            </div>

            <h2 class="text-xl uppercase mb-5">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Modulos y Funcionalidades
                </span>
                <span class="font-acorn dark:text-white">
                  Clave:
                </span>
            </h2>

            <div class="flex flex-col">
                <div class="relative">
                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Dashboard de ensayo:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Vista principal para resumir area analizada, lotes evaluados, indice promedio, porcentaje de salud optima y comportamiento semanal del ensayo seleccionado.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Comparacion de tratamientos:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Herramienta espacial para contrastar tratamientos dentro de un mismo ensayo y observar diferencias visibles sobre el mapa a partir de indices como NDVI.
                            </p>
                            <ol class="!ml-8">
                                <li class="!list-disc text-[14px] dark:text-white mb-2">
                                    Comparacion directa entre lotes y fechas para evaluar respuesta del cultivo.
                                </li>
                                <li class="!list-disc text-[14px] dark:text-white">
                                    Analisis por niveles de vigor o condicion, con lectura de tendencia entre inicio y fin.
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
                                Reporte detallado y exportacion:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               El sistema genera tablas con detalle por semana, fecha, variedad, cultivo, fundo, etapa, campo, turno, lote, proyecto, codigo, tratamiento, indice, hectareas y promedio, con opcion de filtrado y exportacion a Excel.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-8">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Geoprocesos y automatizacion:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Se desarrollo un flujo de geoprocesamiento para seleccionar tipo de analisis, indice espectral, fundo, codigos de ensayo e imagenes disponibles, centralizando la ejecucion del analisis desde una sola interfaz.
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-2 mb-5">
                        <div class="dark:text-white">
                           ${startIcon}
                        </div>
                        <div>
                            <h3 class="text-[14px] dark:text-white uppercase mb-1">
                                Estudio tecnico y script de conversion de indices:
                            </h3>
                            <p class="text-[14px] dark:text-white text-justify mb-2">
                               Como parte del proyecto se realizo un estudio para interpretar correctamente los indices espectrales dentro del contexto del ensayo y, a partir de ello, se desarrollo un script que automatiza la conversion de los indices a escalas comparables y utiles para el analisis agronomico.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="text-xl uppercase mb-1">
                <span class="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                  Impacto
                </span>
                <span class="font-acorn dark:text-white">
                  Tecnico:
                </span>
            </h2>

            <p class="text-[14px] dark:text-white text-justify mb-2">
                Esta solucion permitio estandarizar el analisis de ensayos, reducir trabajo manual en la interpretacion de indices y ofrecer una base objetiva para comparar tratamientos con soporte cartografico, historico y estadistico.
            </p>
        `,
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
