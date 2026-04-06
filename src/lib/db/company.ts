
import agv from '../../assets/images/AGV.svg??raw'
import fruitist from '../../assets/images/fruitist.svg??raw'
import ckde from '../../assets/images/ckde-1.png'
import house from '../../assets/images/logo-house.png'
import microcash from '../../assets/images/microcash.png'
import clinica from '../../assets/images/clinica-cha.jpg'

export type Company = {
    id: number;
    name: string;
    isImg: boolean;
    img: string;
}

export const companies: ReadonlyArray<Company> = [
    {
        id: 1,
        name: "Agrovision",
        isImg: false,
        img: agv
    },
    {
        id: 2,
        name: "Fruitist",
        isImg: false,
        img: fruitist
    },
    {
        id: 3,
        name: "CKDE",
        isImg: true,
        img: ckde
    },
    {
        id: 4,
        name: "Microcash",
        isImg: true,
        img: microcash
    },
    {
        id: 5,
        name: "House",
        isImg: true,
        img: house
    },
    {
        id: 6,
        name: "Clinica veterinaria champagnat",
        isImg: true,
        img: clinica
    }
]