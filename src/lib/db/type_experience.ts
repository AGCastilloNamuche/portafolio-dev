import { findValue } from "../util/config";

export type TypeExperience = {
    id: number;
    name: string;
}

export const typeExperience: ReadonlyArray<TypeExperience> = [
    {
        id: 1,
        name: "Laboral"
    },
    {
        id: 2,
        name: "Personal"
    }
]

export const workExperience = findValue({ array: typeExperience, key: "id", value: 1, returnkey: "name" , isReturn: true});
export const personalExperience = findValue({ array: typeExperience, key: "id", value: 2, returnkey: "name" , isReturn: true});