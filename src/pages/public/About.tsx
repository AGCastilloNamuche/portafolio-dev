import { IconCancel, IconCategory2, IconChecks, IconChevronsDown, IconChevronsRight, IconCode, IconDotsVertical, IconFilter2, IconGitBranch, IconLaurelWreath1, IconMail, IconMessageChatbot, IconMessageCircleX, IconMessages, IconMoodKid, IconMoodPlus, IconPhone, IconPin, IconPlus, IconPrompt, IconRosetteDiscountCheckFilled, IconSearch, IconSend2, IconTransfer, IconX } from "@tabler/icons-react"
import profile from "../../assets/images/anthonyC.N.png"
import { CountUp, Tabs } from "../../components"
import { contacts as contactsDB, type Contact } from "../../lib/db/client"
import { useEffect, useState } from "react"
import TextField from "../../components/TextField"
import getBrowser from "../../lib/db/browser"
import { skills } from "../../lib/db/skills"
import { filters } from "../../lib/util/config"

const skillsDeveloper = (values: number[]) => filters({array:skills, key:"id", value:values})

const About = () => {
    const [contacts, setContacts] = useState<Contact[]>(contactsDB as unknown as Contact[]);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

    useEffect(() => {
        if (contacts.length > 0) {
            const contact = contacts.find((c) => c.isActive) ?? contacts[0]
            setSelectedContact(contact)
        }
    }, [])

    const info = (contact: Contact) => {
        setContacts((prev) => prev.map((c) => (c.id === contact.id ? { ...c, isActive: true } : { ...c, isActive: false })))
        setSelectedContact(contact)
    }

    const spanContainer = () => Array.from({ length: 2 }).map((x, index) => (<div key={index}></div>))

    return (
        <div className="content">
            <div className="block m-auto text-center w-100 container-title">
                <h1>Gian Pierre</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center mb-15">
                <div className="avatar-profile">
                    <img src={profile} alt="" />
                </div>
                <div className="col-span-2">
                    <div className="container-text-profile">
                        <h2 className="text-h2 font-bold mb-2">Soy desarrollador Full Stack Web & Móvil</h2>
                        <p className="mb-5 text-justify text-lg">
                            Durante los últimos 5 años me he desempeñado como desarrollador de software, especializándome en la creación de interfaces
                            y experiencias digitales centradas en el usuario. A lo largo de este tiempo, he trabajado en el diseño y construcción
                            de productos que buscan equilibrar claridad visual, usabilidad, accesibilidad y objetivos de negocio.
                        </p>
                        <p className="text-justify text-lg">
                            Actualmente trabajo como desarrollador de software en una empresa del sector agrícola, donde participo en el desarrollo
                            de soluciones tecnológicas orientadas a la gestión y análisis de información. En este rol, exploro y aplico nuevas
                            tecnologías para optimizar procesos y aportar valor a través de herramientas digitales, considerando tanto el impacto
                            operativo como la experiencia de uso.
                        </p>
                    </div>
                </div>
            </div>

            {/* resumen */}
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-8 mb-15">
                <div className="flex flex-col gap-1">
                    <CountUp className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" value={100} suffix="+" />
                    <p>Proyectos completados</p>
                </div>
                <div className="flex flex-col gap-1">
                    <CountUp className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" value={5} suffix="+" />
                    <p>Años de experiencia</p>
                </div>
                <div className="flex flex-col gap-1">
                    <CountUp className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" value={12} suffix="+" />
                    <p>Clientes satisfechos</p>
                </div>
                <div className="flex flex-col gap-1">
                    <CountUp className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" value={99} suffix="%" />
                    <p>Entregas a tiempo</p>
                </div>
            </div>

            {/* stack */}
            <div className="flex flex-col gap-5 mb-15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col">
                        <span className="text-sm text-green-950 font-bold uppercase">Mi desarrollo personal</span>
                        <h2 className="text-h2 font-bold text-green-950 leading-12 mb-2">Stack principal con el que construyo productos web y móviles.</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
                        <div>
                            <h4>Frontend</h4>
                            <p className="text-sm">▰▰▰▰▰ Vue · Tailwind · Vite · TS/JS</p>
                        </div>
                        <div>
                            <h4>Backend</h4>
                            <p className="text-sm">▰▰▰▰▰ Python · Django</p>
                        </div>

                        <div>
                            <h4>Móvil</h4>
                            <p className="text-sm">▰▰▰▰▰ Flutter · Dart</p>
                        </div>

                        <div>
                            <h4>Base de datos</h4>
                            <p className="text-sm">▰▰▰▰▰ PostgreSQL</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:!grid-cols-3">
                    <div className="card !bg-transparent">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <h2 className="text-lg">Stack Core (uso diario)</h2>
                                <p className="text-[12px]">Mi base para construir productos web end-to-end.</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    skillsDeveloper([22, 2, 23, 5 , 28, 43, 44]).map((item) => (
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <item.icon stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>{item.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="card !bg-transparent">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <h2 className="text-lg">Mobile & Experiencia adicional</h2>
                                <p className="text-[12px]">También trabajo con</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    skillsDeveloper([7 , 8, 3, 4,35, 34,37]).map((item) => (
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <item.icon stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>{item.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="card !bg-transparent">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <h2 className="text-lg">Datos & Cloud (NoSQL)</h2>
                                <p className="text-[12px]">Datos y servicios</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    skillsDeveloper([36 , 38, 45, 46, 47]).map((item) => (
                                        <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] !px-3 !py-1">
                                            <item.icon stroke={2} color="#025a4e" size={18} />
                                            <span className='text-xs font-bold text-[#025a4e]'>{item.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-messenger mb-15">
                <h2 className="text-h2 font-bold mb-2 text-green-950 flex items-center gap-2"><IconPrompt size={60} stroke={2} /> Todo empieza con una idea <IconCode size={60} stroke={2} /> </h2>
                <div className="container-chat grid grid-cols-1 lg:grid-cols-4 gap-3">
                    <div className="container-contacts ">
                        <div className="container-header mb-4">
                            <div className="headers mb-5">
                                <div>
                                    <h2 className="flex items-center gap-2"><IconMessageChatbot stroke={2} /> Todos los mensajes</h2>
                                </div>
                                <div>
                                    <button className=""><IconDotsVertical stroke={2} size={20} /></button>
                                </div>

                            </div>
                            <div className="container-tabs w-full">
                                <Tabs
                                    className="tabs mb-8"
                                    variant="underline"
                                    tabs={[
                                        {
                                            id: "1",
                                            label: "Chat abierto",
                                            content: () => <div>
                                                <div className="container-search mt-5">
                                                    <div>
                                                        <div className="mt-2">
                                                            <TextField
                                                                id="search"
                                                                background="bg-white/5"
                                                                placeholder="Buscar por contacto"
                                                                leftIcon={<IconSearch stroke={2} size={20} />}
                                                                rightAction={<button className="cursor-pointer"><IconFilter2 stroke={2} size={20} /></button>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        },
                                        {
                                            id: "2",
                                            label: "En curso",
                                            disabled: true,
                                            content: () => <div>Mail</div>
                                        },
                                        {
                                            id: "3",
                                            label: "Cerrado",
                                            disabled: true,
                                            content: () => <p>Content 3</p>
                                        },
                                    ]}
                                />
                                <div className="mb-2" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                                    <Tabs
                                        className="tabs"
                                        variant="underline"
                                        tabs={[
                                            {
                                                id: "1",
                                                label: "Chat (15)",
                                                content: () => <div></div>
                                            },
                                            {
                                                id: "2",
                                                label: "Correo (3)",
                                                disabled: true,
                                                content: () => <div>Mail</div>
                                            },
                                            {
                                                id: "3",
                                                label: "bandeja (5)",
                                                disabled: true,
                                                content: () => <p>Content 3</p>
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="contacts">
                            {contacts.map((contact, index) => (
                                <div key={index} className={["card p-0 mb-4 cursor-pointer relative", contact.isActive ? "!bg-[#4b604d]" : "bg-dark"].join(" ")} onClick={() => info(contact)}>
                                    <div className="absolute bottom-3 right-4">
                                        {contact.isActive ? <IconTransfer className="text-white" stroke={2} /> : null}
                                    </div>
                                    <div className="contact-header flex items-center gap-3">
                                        <div className="flex -space-x-2 w-[3rem] position-relative">
                                            <img
                                                src={contact.avatar}
                                                alt={`contacto_${index + 1}`}
                                                className="inline-block size-10 rounded-full bg-indigo-200"
                                            />
                                            <span className={["absolute bottom-0 right-0 badges w-[.5rem] h-[.5rem] rounded-full", contact.status === 'online' ? 'bg-green-300' : 'bg-red-300'].join(' ')} ></span>
                                        </div>
                                        <div className="contact-info flex justify-between w-full">
                                            <div className="">
                                                <p className="contact-name text-white line-clamp-1  h-5">{contact.name}</p>
                                                <p className="contact-number text-gray-400 text-[11px]">({contact.n_contacts})</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <IconChecks className={contact.isActive ? "text-white" : "text-gray-500"} size={18} stroke={contact.isActive ? 2.5 : 1} />
                                                <div className="flex items-end flex-col">
                                                    <span className=" text-gray-300 text-[11px]">Hoy</span>
                                                    <span className=" text-gray-300 text-[11px]">{contact.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-body">
                                        <p className="text-white font-[300] text-[12px] text-wrap text-ellipsis overflow-hidden line-clamp-2 ">{contact.lastMessage}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="container-messages col-span-2">
                        <div className="card !px-3 !py-3 bg-dark">
                            {/* cabecera del mensaje */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2 w-[3rem] position-relative">
                                        <img
                                            src={selectedContact?.avatar}
                                            alt={`contacto_${selectedContact?.id}`}
                                            className="inline-block size-10 rounded-full bg-indigo-200"
                                        />
                                        <span className={["absolute bottom-0 right-2 badges w-[.5rem] h-[.5rem] rounded-full", selectedContact?.status === 'online' ? 'bg-green-300' : 'bg-red-300'].join(' ')} ></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-white font-semibold">{selectedContact?.name}</p>
                                        <p className="text-gray-400 text-[11px]">últ. vez hoy a la(s) 12:19 p. m.</p>
                                    </div>
                                    <div><IconTransfer className="text-white" stroke={1} /></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 hover:bg-black flex items-center flex-col !p-2  rounded-full cursor-pointer">
                                        <IconCancel className="text-white" stroke={1} />
                                        <span className="text-[11px] text-gray-300">Cancelar</span>
                                    </button>

                                    <button className="p-2 hover:bg-black flex items-center flex-col !p-2  rounded-full cursor-pointer">
                                        <IconMessages className="text-white" stroke={1} />
                                        <span className="text-[11px] text-gray-300">Soporte</span>
                                    </button>
                                    <button className="p-2 hover:bg-black flex items-center flex-col !p-2  rounded-full cursor-pointer">
                                        <IconMessageCircleX className="text-white" stroke={1} />
                                        <span className="text-[11px] text-gray-300">Cerrar</span>
                                    </button>
                                </div>
                            </div>

                            <div className="border-b border-[#3a373780]"></div>
                            {/* cuerpo del mensaje */}
                            <div className="grid grid-cols-3 !pt-5 !pb-4">
                                {/* cliente */}
                                <div className="col-span-2 ">
                                    <div className="flex items-end gap-2 mb-1">
                                        <img
                                            src={selectedContact?.avatar}
                                            alt={`contacto_${selectedContact?.id}`}
                                            className="inline-block size-8 rounded-full bg-indigo-200"
                                        />
                                        <div className="flex items-center messenger gap-3">
                                            <div className="bg-[#4b604d]  !px-4 !py-1  rounded-[.8rem]">
                                                <p className="text-white text-[12px] font-[300]">{selectedContact?.lastMessage}</p>
                                            </div>
                                            <div className="flex items-center gap-2 action-messenger">
                                                <IconPin className="text-gray-400" stroke={2} />
                                                <IconMoodKid className="text-gray-400" stroke={2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="!ml-11">
                                        <p className="text-white text-start text-[12px] font-[200]">10:30 AM</p>
                                    </div>
                                </div>
                                {spanContainer()}
                                {/* user */}
                                <div className="col-span-2">
                                    <div className="flex items-end gap-2 mb-1">
                                        <div className="flex items-center messenger gap-3">
                                            <div className="flex items-center gap-2 action-messenger">
                                                <IconPin className="text-gray-400" stroke={2} />
                                                <IconMoodKid className="text-gray-400" stroke={2} />
                                            </div>
                                            <div className="bg-[#151515]  !px-4 !py-1  rounded-[.8rem]">
                                                <p className="text-white text-[12px] font-[300]">¡Claro! Cuéntame un poco: ¿qué quieres que hagan los agentes y para qué área es el proyecto?</p>
                                            </div>
                                        </div>
                                        <img
                                            src={profile}
                                            alt="contacto_agente"
                                            className="inline-block size-8 rounded-full bg-indigo-200"
                                        />
                                    </div>
                                    <div className="!mr-11">
                                        <p className="text-white text-end text-[12px] font-[200]">10:31 AM</p>
                                    </div>
                                </div>
                                {spanContainer()}
                                {/* cliente */}
                                <div className="col-span-2 ">
                                    <div className="flex items-end gap-2 mb-1">
                                        <img
                                            src={selectedContact?.avatar}
                                            alt={`contacto_${selectedContact?.id}`}
                                            className="inline-block size-8 rounded-full bg-indigo-200"
                                        />
                                        <div className="flex items-center messenger gap-3">
                                            <div className="bg-[#4b604d]  !px-4 !py-1  rounded-[.8rem]">
                                                <p className="text-white text-[12px] font-[300]">
                                                    Es para automatizar soporte y también ayudar a mi equipo con tareas repetitivas (resúmenes, respuestas, seguimiento de tickets).
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 action-messenger">
                                                <IconPin className="text-gray-400" stroke={2} />
                                                <IconMoodKid className="text-gray-400" stroke={2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="!ml-11">
                                        <p className="text-white text-start text-[12px] font-[200]">10:32 AM</p>
                                    </div>
                                </div>
                                {spanContainer()}
                                {/* user */}
                                <div className="col-span-2">
                                    <div className="flex items-end gap-2 mb-1">
                                        <div className="flex items-center messenger gap-3">
                                            <div className="flex items-center gap-2 action-messenger">
                                                <IconPin className="text-gray-400" stroke={2} />
                                                <IconMoodKid className="text-gray-400" stroke={2} />
                                            </div>
                                            <div className="bg-[#151515]  !px-4 !py-1  rounded-[.8rem]">
                                                <p className="text-white text-[12px] font-[300]">
                                                    Perfecto. Para aterrizarlo rápido:
                                                </p>
                                                <ol>
                                                    <li className="text-white text-[12px] font-[300] !ml-4 !list-decimal mb-1">
                                                        <p>¿Los agentes solo conversan o también deben ejecutar acciones (crear tickets, enviar correos, consultar BD)?</p>
                                                    </li>
                                                    <li className="text-white text-[12px] font-[300] !ml-4 !list-decimal">
                                                        <p>¿Qué stack estás usando (Node/TS, Python, etc.)?</p>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                        <img
                                            src={profile}
                                            alt="contacto_agente"
                                            className="inline-block size-8 rounded-full bg-indigo-200"
                                        />
                                    </div>
                                    <div className="!mr-11">
                                        <p className="text-white text-end text-[12px] font-[200]">10:33 AM</p>
                                    </div>
                                </div>
                                {spanContainer()}
                                {/* cliente */}
                                <div className="col-span-2 ">
                                    <div className="flex items-end gap-2 mb-1">
                                        <img
                                            src={selectedContact?.avatar}
                                            alt={`contacto_${selectedContact?.id}`}
                                            className="inline-block size-8 rounded-full bg-indigo-200"
                                        />
                                        <div className="flex items-center messenger gap-3">
                                            <div className="bg-[#4b604d]  !px-4 !py-1  rounded-[.8rem]">
                                                <p className="text-white text-[12px] font-[300]">
                                                    Deben ejecutar acciones. Stack: Node + TypeScript. Tenemos información en PDFs y en una base de datos.
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 action-messenger">
                                                <IconPin className="text-gray-400" stroke={2} />
                                                <IconMoodKid className="text-gray-400" stroke={2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="!ml-11">
                                        <p className="text-white text-start text-[12px] font-[200]">10:34 AM</p>
                                    </div>
                                </div>
                                {spanContainer()}
                                <div className="col-span-2">
                                    <div className="flex items-end gap-2 mb-1">
                                        <div className="flex items-center messenger gap-3">
                                            <div className="flex items-center gap-2 action-messenger">
                                                <IconPin className="text-gray-400" stroke={2} />
                                                <IconMoodKid className="text-gray-400" stroke={2} />
                                            </div>
                                            <div className="bg-[#151515]  !px-4 !py-1  rounded-[.8rem]">
                                                <p className="text-white text-[12px] font-[300]">
                                                    Bien. Te propongo una arquitectura simple y escalable:
                                                </p>
                                                <ol>
                                                    <li className="text-white text-[12px] font-[300] !ml-4 !list-disc mb-1">
                                                        <p>Agente Orquestador: decide qué hacer y a quién delegar.</p>
                                                    </li>
                                                    <li className="text-white text-[12px] font-[300] !ml-4 !list-disc">
                                                        <p>Agente de Conocimiento (RAG): busca en PDFs/documentos (vector DB) y devuelve citas.</p>
                                                    </li>
                                                    <li className="text-white text-[12px] font-[300] !ml-4 !list-disc">
                                                        <p>Agente de Acciones: ejecuta funciones (crear/actualizar ticket, consultar BD, etc.).</p>
                                                    </li>
                                                    <li className="text-white text-[12px] font-[300] !ml-4 !list-disc">
                                                        <p>Guardrails: reglas de seguridad (no filtrar datos sensibles, validar inputs).</p>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                        <img
                                            src={profile}
                                            alt="contacto_agente"
                                            className="inline-block size-8 rounded-full bg-indigo-200"
                                        />
                                    </div>
                                    <div className="!mr-11">
                                        <p className="text-white text-end text-[12px] font-[200]">10:35 AM</p>
                                    </div>
                                </div>
                                {spanContainer()}
                                {/* cliente */}
                                <div className="col-span-2 ">
                                    <div className="flex items-end gap-2 mb-1">
                                        <img
                                            src={selectedContact?.avatar}
                                            alt={`contacto_${selectedContact?.id}`}
                                            className="inline-block size-8 rounded-full bg-indigo-200"
                                        />
                                        <div className="flex items-center messenger gap-3">
                                            <div className="bg-[#4b604d]  !px-4 !py-1  rounded-[.8rem]">
                                                <p className="text-white text-[12px] font-[300]">
                                                    Me gusta. ¿Cómo definimos el flujo?
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 action-messenger">
                                                <IconPin className="text-gray-400" stroke={2} />
                                                <IconMoodKid className="text-gray-400" stroke={2} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="!ml-11">
                                        <p className="text-white text-start text-[12px] font-[200]">10:36 AM</p>
                                    </div>
                                </div>
                            </div>

                            {/* input mesaje */}
                            <div className="!px-4 flex items-center rounded-[.8rem] bg-black !py-3">
                                <div className="w-full">
                                    <TextField
                                        id="search"
                                        background="bg-white/5"
                                        placeholder="Responder mensaje"
                                        leftIcon={
                                            <div className="flex items-center gap-2 !mr-2">
                                                <button className="cursor-pointer text-gray-400"><IconPlus stroke={2} /></button>
                                                <button className="cursor-pointer text-gray-400"><IconMoodPlus stroke={2} /></button>
                                            </div>
                                        }
                                        rightAction={<button className="cursor-pointer text-gray-400"><IconSend2 stroke={2} /></button>}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card !px-3 !py-3  bg-dark">
                        <div className="flex items-center mb-5 justify-between">
                            <div></div>
                            <div>
                                <h2 className="text-white text-[20px]">Información</h2>
                            </div>
                            <div>
                                <IconX className="text-white cursor-pointer" stroke={2} />
                            </div>
                        </div>
                        <h3 className="text-white text-[18px] mb-2">Acerca del cliente</h3>
                        <div className="flex justify-between mb-10">
                            <div className="flex items-center gap-2">
                                <img
                                    src={selectedContact?.avatar}
                                    alt={`contacto_${selectedContact?.id}`}
                                    className="inline-block size-12 rounded-full bg-indigo-200"
                                />
                                <div className="flex flex-col">
                                    <p className="text-white text-[14px] overflow-hidden text-ellipsis line-clamp-1 font-[500]">{selectedContact?.name}</p>
                                    <p className="text-white text-[11px] overflow-hidden text-ellipsis line-clamp-1 font-[200]">
                                        Visitas {selectedContact?.unread}
                                    </p>
                                </div>
                            </div>
                            <IconRosetteDiscountCheckFilled className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-white text-[14px] font-[200] ">Número de teléfono</div>
                            <div className="flex items-center gap-2 mb-6">
                                <IconPhone className="text-white" />
                                <p className="text-white text-[14px] overflow-hidden text-ellipsis line-clamp-1 font-[500]">{selectedContact?.n_contacts}</p>
                            </div>

                            <div className="text-white text-[14px] font-[200]">Correo electrónico</div>
                            <div className="flex items-center gap-2 mb-6">
                                <IconMail className="text-white" />
                                <p className="text-white text-[14px] overflow-hidden text-ellipsis line-clamp-1 font-[500]">{selectedContact?.email}</p>
                            </div>

                            <div className="grid grid-cols-2 mb-6">
                                <div>
                                    <div className="text-white text-[14px] font-[200]">Fecha</div>
                                    <div className="text-white text-[14px] font-[500]">{selectedContact?.date}</div>
                                </div>
                                <div>
                                    <div className="text-white text-[14px] font-[200]">Hora</div>
                                    <div className="text-white text-[14px] font-[500]">{selectedContact?.time}</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="text-white text-[14px] font-[200]">Canal</div>
                                    <div className="text-white text-[14px] font-[500]">Web / Móvil</div>
                                </div>
                                <div>
                                    <div className="text-white text-[14px] font-[200]">Navegador</div>
                                    <div className="text-white text-[14px] font-[500]">{getBrowser()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* enfoque */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <div>
                        <span className="text-sm text-green-950 uppercase">Mi enfoque</span>
                        <h2 className="text-h2 text-[#025a4e] !space-x-2 leading-12">Soluciones web y móviles con enfoque, calidad y rendimiento</h2>
                    </div>
                    <p className="text-[16px] text-green-950" >
                        Desarrollo productos digitales de extremo a extremo, cuidando la arquitectura, el rendimiento y la experiencia de usuario.
                        Me enfoco en construir soluciones mantenibles y escalables que resuelven problemas reales y aportan valor desde el primer entregable.
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="card !bg-[#ffffff0a] mb-5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-r from-[#6BFDD9] to-[#f0ff6c] animate-pulse duration-200 ease-in-out ">
                                <IconGitBranch className="text-green-950" stroke={2} />
                            </div>
                            <div>
                                <h2 className="text-green-950 text-[18px]">Visión</h2>
                            </div>
                        </div>

                        <div>
                            <p>
                                Ser un desarrollador full-stack reconocido por crear soluciones web y móviles escalables,
                                seguras y bien diseñadas, que aporten valor real a las personas y a los negocios.
                            </p>
                        </div>
                    </div>

                    <div className="card !bg-[#ffffff0a] mb-5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-r from-[#6BFDD9] to-[#f0ff6c] animate-pulse duration-200 ease-in-out ">
                                <IconCategory2 className="text-green-950" stroke={2} />
                            </div>
                            <div>
                                <h2 className="text-green-950 text-[18px]">Misión</h2>
                            </div>
                        </div>

                        <div>
                            <p>
                                Diseñar y desarrollar productos digitales de extremo a extremo (frontend y backend),
                                cuidando rendimiento, mantenibilidad y experiencia de usuario, usando buenas prácticas
                                y tecnologías modernas como React, Vue, Angular, Flutter, Django, Laravel y Node.js,
                                según lo que el proyecto requiera.
                            </p>
                        </div>
                    </div>

                    <div className="card !bg-[#ffffff0a] mb-5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-r from-[#6BFDD9] to-[#f0ff6c] animate-pulse duration-200 ease-in-out ">
                                <IconLaurelWreath1 className="text-green-950" stroke={2} />
                            </div>
                            <div>
                                <h2 className="text-green-950 text-[18px]">Enfoque</h2>
                            </div>
                        </div>

                        <div className="!pl-8">

                            <ol>
                                <li className="!list-disc">Full-stack práctico: construyo interfaces claras y backend sólido, conectando producto + tecnología.</li>
                                <li className="!list-disc">Calidad y escalabilidad: código limpio, arquitectura mantenible, APIs bien pensadas y performance.</li>
                                <li className="!list-disc">Tecnología adecuada al problema: PHP/Laravel, Python/Django, Node.js, Java, JavaScript; y front con React/Vue/Angular + Tailwind; apps con Flutter/Dart.</li>
                                <li className="!list-disc">Entrega y mejora continua: iteración rápida, comunicación clara y foco en resultados.</li>
                            </ol>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default About