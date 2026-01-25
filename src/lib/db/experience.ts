import { filters, findValue } from "../util/config";
import { companies } from "./company";
import { skills, type Skill } from "./skills";
import { workExperience, type TypeExperience } from "./type_experience";
import dayjs from "dayjs";

type Experience = {
    id: number;
    title: string;
    description: string;
    start_date: Date;
    is_active: boolean;
    end_date: Date;
    company: string;
    skills: Skill[];
    typeExperience: TypeExperience;
}

export const experience:ReadonlyArray<Experience> = [
    {
        id: 1,
        title: "Analista Programador (GIS Full-Stack)",
        description: "Diseño y desarrollo soluciones geoespaciales web y móviles para análisis, automatización y visualización de información territorial. Implementé flujos de ingestión y procesamiento de datos meteorológicos y satelitales, optimizando la calidad y disponibilidad de datos para analítica. Construí dashboards y mapas interactivos orientados a apoyar la toma de decisiones operativas y técnicas. Además, integré agentes de IA para acelerar desarrollo y despliegues mediante prácticas DevOps, e implementé modelos de Machine Learning para el procesamiento meteorológico y predicción de precipitaciones.",
        start_date: dayjs("2024-11-01").toDate(),
        is_active: true,
        end_date: dayjs().toDate(),
        company: findValue({ array: companies, key: "id", value: 1, returnkey: "name" }),
        skills: filters({ 
            array: skills, 
            key: "id", 
            value: [1, 2, 3, 4, 5 , 6, 7, 22, 24, 25, 26 , 27 , 29 , 30] 
        }),
        typeExperience: workExperience,
    },
    {
        id: 2,
        title: "Desarrollador Web (Freelance – Gestión Documental & Accesos)",
        description: "Desarrollé módulos para gestión de archivos y administración de usuarios, implementando roles y permisos para un control de acceso seguro. Construí una interfaz moderna y consistente, enfocada en usabilidad, con un diseño robusto y amigable para el equipo operativo.",
        start_date: dayjs("2025-01-10").toDate(),
        is_active: false,
        end_date: dayjs("2025-08-28").toDate(),
        company: findValue({ array: companies, key: "id", value: 5, returnkey: "name" }),
        skills: filters({ 
            array: skills, 
            key: "id", 
            value: [1, 4, 5, 6 , 22, 23, 31] 
        }),
        typeExperience: workExperience,
    },
    {
        id: 3,
        title: "Desarrollador Web UI & Módulos de Negocio (Freelance / Contrato)",
        description: "Construí la UI y módulos clave del sistema de control de delivery express,orientado a acelerar la recepción de dinero, gestión de fondos (“sencillo”) y logística de distribución. Implementé funcionalidades para solicitud de pedidos, control y traslado de envases/bultos, y administración centralizada de recursos con monitoreo en tiempo real de rutas y entregas. Además, desarrollé módulos de cambio de moneda, control de accesos por niveles, roles y permisos.",
        start_date: dayjs("2024-02-24").toDate(),
        is_active: false,
        end_date: dayjs("2024-12-22").toDate(),
        company: findValue({ array: companies, key: "id", value: 4, returnkey: "name" }),
        skills: filters({ 
            array: skills, 
            key: "id", 
            value: [1, 4, 5, 6 , 22, 23, 31, 33] 
        }),
        typeExperience: workExperience,
    },
    {
        id: 4,
        title: "Auxiliar programación",
        description: "Apoyé el desarrollo y verificación de sistemas web basados en requerimientos de usuario, realizando seguimiento continuo a proyectos en curso y validando incidencias/casos reportados para asegurar estabilidad y calidad. Brindé orientación al equipo en el uso correcto de las herramientas implementadas y participé en la implementación de aplicaciones web, creación de APIs REST y procesos de despliegue.",
        start_date: dayjs("2022-11-29").toDate(),
        is_active: false,
        end_date: dayjs("2023-10-27").toDate(),
        company: findValue({ array: companies, key: "id", value: 1, returnkey: "name" }),
        skills: filters({ 
            array: skills, 
            key: "id", 
            value: [1, 4, 5, 6 , 22, 28, 31, 33 , 34, 35, 37, 38, 39, 40] 
        }),
        typeExperience: workExperience,
    },
    {
        id: 5,
        title: "Desarrollador web full-stack (Freelance)",
        description: "Desarrollé un sistema web para gestión de citas veterinarias, con notificaciones al veterinario y administración del historial clínico de cada mascota (apertura automática de expediente para nuevos pacientes). Implementé un portal para clientes que permite consultar y descargar historial, recetas y medicamentos, mejorando la atención y continuidad del tratamiento. Realicé el despliegue completo en AWS, asegurando disponibilidad y operación en producción.",
        start_date: dayjs("2022-03-14").toDate(),
        is_active: false,
        end_date: dayjs("2022-10-27").toDate(),
        company: findValue({ array: companies, key: "id", value: 6, returnkey: "name" }),
        skills: filters({ 
            array: skills, 
            key: "id", 
            value: [34 , 32 , 31 , 35 , 36, 39, 40, 41] 
        }),
        typeExperience: workExperience,
    },
    {
        id: 6,
        title: "Desarrollador web",
        description: "Apoyé el desarrollo y verificación de sistemas web basados en requerimientos de usuario, realizando seguimiento continuo a proyectos en curso y validando incidencias/casos reportados para asegurar estabilidad y calidad. Brindé orientación al equipo en el uso correcto de las herramientas implementadas y participé en la implementación de aplicaciones web, creación de APIs REST y procesos de despliegue.",
        start_date: dayjs("2019-01-07").toDate(),
        is_active: false,
        end_date: dayjs("2022-01-31").toDate(),
        company: findValue({ array: companies, key: "id", value: 3, returnkey: "name" }),
        skills: filters({ 
            array: skills, 
            key: "id", 
            value: [1,  31, 34, 35, 36, 38, 39, 40] 
        }),
        typeExperience: workExperience,
    }   
]

export const schedule = () => {
    const st = Math.min(...experience.map((exp) => dayjs(exp.start_date).year()))
    const en = Math.max(...experience.map((exp) => dayjs(exp.end_date).year()))
    return `${st} - ${en}`
}