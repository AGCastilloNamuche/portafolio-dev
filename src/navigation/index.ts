
export type NavKey = "home" | "about" | "projects" | "blog" | "contact";

export type NavItem = Readonly<{
  key: NavKey;
  type: string;
  href: string;
}>;

const navItems = [
  {
    key: "home",
    type: "link",
    href: "/",
  },
  {
    key: "about",
    type: "link",
    href: "/about",
  },
  {
    key: "projects",
    type: "link",
    href: "/projects",
  },
  {
    key: "blog",
    type: "link",
    href: "/blog",
  },
  {
    key: "contact",
    type: "action",
    href: "#",
  },
] as const satisfies readonly NavItem[];

export default navItems;
