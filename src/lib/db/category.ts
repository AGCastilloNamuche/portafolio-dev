export type Category = {
    id: number;
    name: string;
    key: string
}

export const category: ReadonlyArray<Category> = [
    {
        id: 1,
        name: "Desarrollo Web",
        key: "web-development"
    },
    {
        id: 2,
        name: "Desarrollo Movil",
        key: "mobile-development"
    },
    {
        id: 3,
        name: "Analisis de datos",
        key: "data-analysis"
    },
];
