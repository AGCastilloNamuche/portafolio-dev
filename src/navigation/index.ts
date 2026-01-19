
export type NavItem = Readonly<{
    name: string;
    type: string;
    href: string;
}>

const navItems = [
    {
        name: "Inicio",
        type: "link",
        href: "/"
    },
    {
        name: "Acerca de",
        type: "link",
        href: "/about"
    },
    {
        name: "Proyectos",
        type: "link",
        href: "/project"
    },
    {
        name: "Contacto",
        type: "action",
        href: "#"
    },
] as const satisfies readonly NavItem[]

export default navItems
