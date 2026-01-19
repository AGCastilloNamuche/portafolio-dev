import agv from '../../assets/images/AGV.svg??raw'
import fruitist from '../../assets/images/fruitist.svg??raw'
import ccd from '../../assets/images/ccd-logo.svg??raw'
import house from '../../assets/images/logo-house.png'
import microcash from '../../assets/images/microcash.png'
import { IconApi, IconBrandCss3, IconBrandDjango, IconBrandFlutter, IconBrandJavascript, IconBrandLaravel, IconBrandMysql, IconBrandNodejs, IconBrandPhp, IconBrandPython, IconBrandReact, IconBrandSafari, IconBrandTailwind, IconBrandTypescript, IconBrandVue, IconCircleDashedLetterG, IconCircleDashedLetterP, IconCircleDashedLetterQ, IconCircleDashedLetterR, IconCloudComputing, IconFlame, IconGalaxy, IconPackageExport, IconSql, IconWorld, IconWorldPin } from '@tabler/icons-react'
const Skill = () => {
    return (
        <div className="content">
            <div className="block m-auto text-center w-full container-title">
                <h1 className="letter-spacing-1">Experiencia</h1>
            </div>

            <div className="grid grid-cols-1 lg:place-items-start  lg:grid-cols-4 gap-5">
                <div className="flex lg:flex-col md:justify-center md:gap-8  lg:gap-5">
                    <div className="flex flex-col">
                        <h3 className="text-lg text-[#025a4e]">Tipo</h3>
                        <span>Laboral</span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg text-[#025a4e]">Cronograma</h3>
                        <span>2019 - 2026</span>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg text-[#025a4e]">Empresas</h3>
                        <span className='flex gap-3'>
                            <div
                                dangerouslySetInnerHTML={{ __html: agv }}
                                className='flex items-center justify-center size-8 rounded-full company-icon'
                            ></div>
                            <div
                                dangerouslySetInnerHTML={{ __html: fruitist }}
                                className='flex items-center justify-center size-8 rounded-full company-icon'
                            ></div>
                            <div
                                dangerouslySetInnerHTML={{ __html: ccd }}
                                className='flex items-center justify-center size-8 rounded-full company-icon'
                            ></div>
                            <div className='flex items-center justify-center size-8 rounded-full'>
                                <img
                                    className='w-full h-full object-contain'
                                    src={microcash}
                                    alt="logo-microcash"
                                />
                            </div>

                            <div className='flex items-center justify-center size-8 rounded-full'>
                                <img
                                    className='w-full h-full object-contain'
                                    src={house}
                                    alt="logo-house"
                                />
                            </div>
                        </span>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <div className="flex flex-col gap-5">
                        <div className="card !bg-transparent card-flat">
                            <div className="grid grid-cols-5">
                                <div className='text-sm text-green-300 col-span-1'>2024 - Presente</div>
                                <div className='col-span-4'>
                                    <h3 className='text-lg text-[#025a4e] leading-8'>Analista Programador (GIS Full-Stack) - Agrovision </h3>
                                    <p className='text-[14px] mb-3'>
                                        Diseño y desarrollo soluciones geoespaciales web y móviles para análisis,
                                        automatización y visualización de información territorial.
                                        Implementé flujos de ingestión y procesamiento de datos meteorológicos y satelitales,
                                        optimizando la calidad y disponibilidad de datos para analítica.
                                        Construí dashboards y mapas interactivos orientados a apoyar la toma de decisiones operativas y técnicas.
                                        Además, integré agentes de IA para acelerar desarrollo y despliegues mediante prácticas DevOps,
                                        e implementé modelos de Machine Learning para el procesamiento meteorológico y predicción de precipitaciones.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandJavascript stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>JavaScript</span>
                                        </div>
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandTypescript stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>TypeScript</span>
                                        </div>
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandReact stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>React</span>
                                        </div>
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandVue stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Vue</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandNodejs stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Node.js</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandDjango stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Django</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconWorld stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>ArcGIS API JS</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandPython stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Python</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconCircleDashedLetterG stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>GeoPandas</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconWorldPin stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>GDAL</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandFlutter stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Flutter</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandSafari stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Mapbox</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconCircleDashedLetterR stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Rasterio</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card !bg-transparent card-flat">
                            <div className="grid grid-cols-5">
                                <div className='text-sm text-green-300 col-span-1'>Ene 2025 - Agos 2025</div>
                                <div className='col-span-4'>
                                    <h3 className='text-lg text-[#025a4e] leading-8'>Desarrollador Web (Freelance – Gestión Documental & Accesos) - House Select </h3>
                                    <p className='text-[14px] mb-3'>
                                        Desarrollé módulos para gestión de archivos y administración de usuarios,
                                        implementando roles y permisos para un control de acceso seguro.
                                        Construí una interfaz moderna y consistente, enfocada en usabilidad,
                                        con un diseño robusto y amigable para el equipo operativo.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandJavascript stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>JavaScript</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandVue stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Vue</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandNodejs stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Node.js</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandDjango stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Django</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandTailwind stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>TailwindCSS</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandPython stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Python</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandCss3 stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>CSS</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card !bg-transparent card-flat">
                            <div className="grid grid-cols-5">
                                <div className='text-sm text-green-300 col-span-1'>Feb 2024 - Dic 2024</div>
                                <div className='col-span-4'>
                                    <h3 className='text-lg text-[#025a4e] leading-8'>Desarrollador Web UI & Módulos de Negocio (Freelance / Contrato) - Microcash </h3>
                                    <p className='text-[14px] mb-3'>
                                        Construí la UI y módulos clave del sistema de control de delivery express,
                                        orientado a acelerar la recepción de dinero, gestión de fondos (“sencillo”)
                                        y logística de distribución. Implementé funcionalidades para solicitud de
                                        pedidos, control y traslado de envases/bultos, y administración centralizada
                                        de recursos con monitoreo en tiempo real de rutas y entregas. Además, desarrollé
                                        módulos de cambio de moneda, control de accesos por niveles, roles y permisos.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandJavascript stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>JavaScript</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandVue stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Vue</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandNodejs stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Node.js</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandDjango stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Django</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconPackageExport stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Gestión logística</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandPython stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Python</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card !bg-transparent card-flat">
                            <div className="grid grid-cols-5">
                                <div className='text-sm text-green-300 col-span-1'>2022 - 2023</div>
                                <div className='col-span-4'>
                                    <h3 className='text-lg text-[#025a4e] leading-8'>Auxiliar programación - Agrovision </h3>
                                    <p className='text-[14px] mb-3'>
                                        Apoyé el desarrollo y verificación de sistemas web basados en requerimientos de usuario,
                                        realizando seguimiento continuo a proyectos en curso y validando incidencias/casos reportados para asegurar estabilidad y calidad.
                                        Brindé orientación al equipo en el uso correcto de las herramientas implementadas y participé en la implementación de aplicaciones web,
                                        creación de APIs REST y procesos de despliegue.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandJavascript stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>JavaScript</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandVue stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Vue.js</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandNodejs stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Node.js</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandPython stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Python</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandPhp stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>PHP</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandLaravel stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Laravel</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconFlame stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>CodeIgniter</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconSql stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>SQL server</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconCircleDashedLetterP stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>PostgresSQL</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconApi stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>REST API</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconCloudComputing stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Deploy</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card !bg-transparent card-flat">
                            <div className="grid grid-cols-5">
                                <div className='text-sm text-green-300 col-span-1'>2019 - 2021</div>
                                <div className='col-span-4'>
                                    <h3 className='text-lg text-[#025a4e] leading-8'>Desarrollador web - (Centro de Capacitación y Desarrollo Empresarial) </h3>
                                    <p className='text-[14px] mb-3'>
                                        Diseñé e implementé aplicaciones web full-stack asegurando una experiencia dinámica en el front-end
                                        y una lógica robusta en el back-end. Integré autenticación segura y control de acceso para usuarios,
                                        y construí/consumí servicios RESTful para mejorar la escalabilidad e integración entre módulos y sistemas.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandJavascript stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>JavaScript</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandNodejs stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Node.js</span>
                                        </div>


                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandPhp stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>PHP</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandLaravel stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>Laravel</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconBrandMysql stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>MySQL</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconApi stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>REST API</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconCircleDashedLetterQ stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>jQuery</span>
                                        </div>

                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <IconGalaxy stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>JWT</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill 