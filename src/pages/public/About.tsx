// import {
//   IconCancel,
//   IconCategory2,
//   IconChecks,
//   IconCode,
//   IconDotsVertical,
//   IconFilter2,
//   IconGitBranch,
//   IconLaurelWreath1,
//   IconMail,
//   IconMessageChatbot,
//   IconMessageCircleX,
//   IconMessages,
//   IconMoodKid,
//   IconMoodPlus,
//   IconPhone,
//   IconPin,
//   IconPlus,
//   IconPrompt,
//   IconRosetteDiscountCheckFilled,
//   IconSearch,
//   IconSend2,
//   IconTransfer,
//   IconX,
// } from "@tabler/icons-react";
// import profile from "../../assets/images/perfil.png";
// import { CountUp, Tabs } from "../../components";
// import { contacts as contactsDB, type Contact } from "../../lib/db/client";
// import { useEffect, useState } from "react";
// import TextField from "../../components/TextField";
// import getBrowser from "../../lib/db/browser";
// import { skills } from "../../lib/db/skills";
// import { filters } from "../../lib/util/config";
// import { useTheme } from "../../layouts/ThemeContext";

// const skillsDeveloper = (values: number[]) =>
//   filters({ array: skills, key: "id", value: values });

// const About = () => {
//   const [contacts, setContacts] = useState<Contact[]>(
//     contactsDB as unknown as Contact[],
//   );
//   const { isDark } = useTheme();
//   const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

//   useEffect(() => {
//     if (contacts.length > 0) {
//       const contact = contacts.find((c) => c.isActive) ?? contacts[0];
//       setSelectedContact(contact);
//     }
//   }, []);

//   const info = (contact: Contact) => {
//     setContacts((prev) =>
//       prev.map((c) =>
//         c.id === contact.id
//           ? { ...c, isActive: true }
//           : { ...c, isActive: false },
//       ),
//     );
//     setSelectedContact(contact);
//   };

//   const spanContainer = () =>
//     Array.from({ length: 2 }).map((x, index) => (
//       <div className="hidden sm:block" key={index}></div>
//     ));

//   return (
//     <div className="content">
//       <div className="block m-auto text-center w-100 container-title">
//         <h1>Gian Pierre</h1>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center mb-15">
//         <div className="avatar-profile">
//           <img className="h-full" src={profile} alt="" />
//         </div>
//         <div className="lg:col-span-2">
//           <div className="container-text-profile">
//             <h2 className="text-h2 font-bold dark:text-white mb-2">
//               Soy desarrollador Full Stack Web & Móvil
//             </h2>
//             <p className="mb-5 text-justify dark:text-white text-lg">
//               Durante los últimos 5 años me he desempeñado como desarrollador de
//               software, especializándome en la creación de interfaces y
//               experiencias digitales centradas en el usuario. A lo largo de este
//               tiempo, he trabajado en el diseño y construcción de productos que
//               buscan equilibrar claridad visual, usabilidad, accesibilidad y
//               objetivos de negocio.
//             </p>
//             <p className="text-justify dark:text-white text-lg">
//               Actualmente trabajo como desarrollador de software en una empresa
//               del sector agrícola, donde participo en el desarrollo de
//               soluciones tecnológicas orientadas a la gestión y análisis de
//               información. En este rol, exploro y aplico nuevas tecnologías para
//               optimizar procesos y aportar valor a través de herramientas
//               digitales, considerando tanto el impacto operativo como la
//               experiencia de uso.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* resumen */}
//       <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-8 mb-15">
//         <div className="flex flex-col gap-1">
//           <CountUp
//             className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500"
//             value={100}
//             suffix="+"
//           />
//           <p className="dark:text-white">Proyectos completados</p>
//         </div>
//         <div className="flex flex-col gap-1">
//           <CountUp
//             className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500"
//             value={5}
//             suffix="+"
//           />
//           <p className="dark:text-white">Años de experiencia</p>
//         </div>
//         <div className="flex flex-col gap-1">
//           <CountUp
//             className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500"
//             value={12}
//             suffix="+"
//           />
//           <p className="dark:text-white">Clientes satisfechos</p>
//         </div>
//         <div className="flex flex-col gap-1">
//           <CountUp
//             className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500"
//             value={99}
//             suffix="%"
//           />
//           <p className="dark:text-white">Entregas a tiempo</p>
//         </div>
//       </div>

//       {/* stack */}
//       <div className="flex flex-col gap-5 mb-15">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//           <div className="flex flex-col">
//             <span className="text-sm text-green-950 font-bold uppercase dark:text-white">
//               Mi desarrollo personal
//             </span>
//             <h2 className="text-h2 font-bold text-green-950 leading-12 mb-2 dark:text-[#b9ffee]">
//               Stack principal con el que construyo productos web y móviles.
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
//             <div>
//               <h4 className="dark:text-[#b9ffee]">Frontend</h4>
//               <p className="text-sm dark:text-white">
//                 ▰▰▰▰▰ Vue · Tailwind · Vite · TS/JS
//               </p>
//             </div>
//             <div>
//               <h4 className="dark:text-[#b9ffee]">Backend</h4>
//               <p className="text-sm dark:text-white">▰▰▰▰▰ Python · Django</p>
//             </div>

//             <div>
//               <h4 className="dark:text-[#b9ffee]">Móvil</h4>
//               <p className="text-sm dark:text-white">▰▰▰▰▰ Flutter · Dart</p>
//             </div>

//             <div>
//               <h4 className="dark:text-[#b9ffee]">Base de datos</h4>
//               <p className="text-sm dark:text-white">▰▰▰▰▰ PostgreSQL</p>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:!grid-cols-3">
//           <div className="card !bg-transparent">
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col">
//                 <h2 className="text-lg dark:text-[#b9ffee]">
//                   Stack Core (uso diario)
//                 </h2>
//                 <p className="text-[12px] dark:text-white">
//                   Mi base para construir productos web end-to-end.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {skillsDeveloper([22, 2, 23, 5, 28, 43, 44]).map((item) => (
//                   <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] dark:bg-[#b9ffed1e] !px-3 !py-1">
//                     <item.icon
//                       stroke={2}
//                       color={isDark ? "#b9ffee" : "#025a4e"}
//                       size={18}
//                     />
//                     <span className="text-xs font-bold text-[#025a4e] dark:text-[#b9ffee]">
//                       {item.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="card !bg-transparent">
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col">
//                 <h2 className="text-lg dark:text-[#b9ffee]">
//                   Mobile & Experiencia adicional
//                 </h2>
//                 <p className="text-[12px] dark:text-white">
//                   También trabajo con
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {skillsDeveloper([7, 8, 3, 4, 35, 34, 37]).map((item) => (
//                   <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] dark:bg-[#b9ffed1e] !px-3 !py-1">
//                     <item.icon
//                       stroke={2}
//                       color={isDark ? "#b9ffee" : "#025a4e"}
//                       size={18}
//                     />
//                     <span className="text-xs font-bold text-[#025a4e] dark:text-[#b9ffee]">
//                       {item.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="card !bg-transparent">
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-col">
//                 <h2 className="text-lg dark:text-[#b9ffee]">
//                   Datos & Cloud (NoSQL)
//                 </h2>
//                 <p className="text-[12px] dark:text-white">Datos y servicios</p>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {skillsDeveloper([36, 38, 45, 46, 47]).map((item) => (
//                   <div className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] dark:bg-[#b9ffed1e] !px-3 !py-1">
//                     <item.icon
//                       stroke={2}
//                       color={isDark ? "#b9ffee" : "#025a4e"}
//                       size={18}
//                     />
//                     <span className="text-xs font-bold text-[#025a4e] dark:text-[#b9ffee]">
//                       {item.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container-messenger mb-15">
//         <h2 className="text-h2 font-bold mb-2 text-green-950 dark:text-[#aee8df] flex items-center gap-2">
//           <IconPrompt size={60} stroke={2} /> Todo empieza con una idea{" "}
//           <IconCode size={60} stroke={2} />{" "}
//         </h2>
//         <div className="container-chat grid grid-cols-1 lg:grid-cols-4 gap-3">
//           <div className="container-contacts ">
//             <div className="container-header mb-4">
//               <div className="headers mb-5">
//                 <div>
//                   <h2 className="flex items-center gap-2">
//                     <IconMessageChatbot stroke={2} /> Todos los mensajes
//                   </h2>
//                 </div>
//                 <div>
//                   <button className="">
//                     <IconDotsVertical stroke={2} size={20} />
//                   </button>
//                 </div>
//               </div>
//               <div className="container-tabs w-full">
//                 <Tabs
//                   tabClassName="text-black"
//                   className="tabs mb-8 text-black"
//                   variant="underline"
//                   tabs={[
//                     {
//                       id: "1",
//                       label: "Chat abierto",
//                       content: () => (
//                         <div>
//                           <div className="container-search mt-5">
//                             <div>
//                               <div className="mt-2">
//                                 <TextField
//                                   id="search"
//                                   background="bg-black/10 dark:bg-white/10"
//                                   placeholder="Buscar por contacto"
//                                   leftIcon={
//                                     <IconSearch
//                                       color={isDark ? "white" : "#bbbbbb"}
//                                       stroke={2}
//                                       size={20}
//                                     />
//                                   }
//                                   rightAction={
//                                     <button className="cursor-pointer text-[#bbbbbb]">
//                                       <IconFilter2 stroke={2} size={20} />
//                                     </button>
//                                   }
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ),
//                     },
//                     {
//                       id: "2",
//                       label: "En curso",
//                       disabled: true,
//                       content: () => <div>Mail</div>,
//                     },
//                     {
//                       id: "3",
//                       label: "Cerrado",
//                       disabled: true,
//                       content: () => <p>Content 3</p>,
//                     },
//                   ]}
//                 />
//                 <div
//                   className="mb-2"
//                   style={{ marginLeft: "1rem", marginRight: "1rem" }}
//                 >
//                   <Tabs
//                     className="tabs"
//                     variant="underline"
//                     tabs={[
//                       {
//                         id: "1",
//                         label: "Chat (15)",
//                         content: () => <div></div>,
//                       },
//                       {
//                         id: "2",
//                         label: "Correo (3)",
//                         disabled: true,
//                         content: () => <div>Mail</div>,
//                       },
//                       {
//                         id: "3",
//                         label: "bandeja (5)",
//                         disabled: true,
//                         content: () => <p>Content 3</p>,
//                       },
//                     ]}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="contacts">
//               {contacts.map((contact, index) => (
//                 <div
//                   key={index}
//                   className={[
//                     "card p-0 mb-4 cursor-pointer relative",
//                     contact.isActive
//                       ? "!bg-[#4b604db3] backdrop-blur-[12px] backdrop-saturate-[1.7]"
//                       : "!bg-[#ffffffe6] backdrop-saturate-[200%] backdrop-blur-[12px] dark:!bg-[#233831b3] dark:backdrop-blur-[12px] dark:backdrop-saturate-[1.7]",
//                   ].join(" ")}
//                   onClick={() => info(contact)}
//                 >
//                   <div className="absolute bottom-3 right-4">
//                     {contact.isActive ? (
//                       <IconTransfer className=" text-white" stroke={2} />
//                     ) : null}
//                   </div>
//                   <div className="contact-header flex items-center gap-3">
//                     <div className="flex -space-x-2 w-[3rem] position-relative">
//                       <img
//                         src={contact.avatar}
//                         alt={`contacto_${index + 1}`}
//                         className="inline-block size-10 rounded-full bg-indigo-200"
//                       />
//                       <span
//                         className={[
//                           "absolute bottom-0 right-0 badges w-[.5rem] h-[.5rem] rounded-full",
//                           contact.status === "online"
//                             ? "bg-green-300"
//                             : "bg-red-300",
//                         ].join(" ")}
//                       ></span>
//                     </div>
//                     <div className="contact-info flex justify-between w-full">
//                       <div className="">
//                         <p
//                           className={[
//                             "contact-name dark:text-white line-clamp-1  h-5",
//                             contact.isActive ? "text-white" : "text-black",
//                           ].join(" ")}
//                         >
//                           {contact.name}
//                         </p>
//                         <p className="contact-number text-gray-400 text-[11px]">
//                           ({contact.n_contacts})
//                         </p>
//                       </div>
//                       <div className="flex gap-2">
//                         <IconChecks
//                           className={
//                             contact.isActive ? "text-white" : "text-gray-500"
//                           }
//                           size={18}
//                           stroke={contact.isActive ? 2.5 : 1}
//                         />
//                         <div className="flex items-end flex-col">
//                           <span
//                             className={[
//                               "text-[11px] text-black dark:text-gray-300",
//                               contact.isActive ? "text-gray-300" : "",
//                             ].join(" ")}
//                           >
//                             Hoy
//                           </span>
//                           <span
//                             className={[
//                               "text-[11px] text-black dark:text-gray-300",
//                               contact.isActive ? "text-gray-300" : "",
//                             ].join(" ")}
//                           >
//                             {contact.time}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="contact-body">
//                     <p
//                       className={[
//                         "font-[300] text-[12px] text-wrap text-ellipsis overflow-hidden line-clamp-2 ",
//                         contact.isActive
//                           ? "text-white"
//                           : "text-black dark:text-white",
//                       ].join(" ")}
//                     >
//                       {contact.lastMessage}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="container-messages lg:col-span-2">
//             <div className="card !px-3 !py-3  !bg-[#ffffffe6] backdrop-saturate-[200%] backdrop-blur-[12px] dark:!bg-[#233831b3] dark:backdrop-blur-[12px] dark:backdrop-saturate-[1.7]">
//               {/* cabecera del mensaje */}
//               <div className="flex items-center justify-between mb-3">
//                 <div className="flex items-center gap-2">
//                   <div className="flex -space-x-2 w-[3rem] position-relative">
//                     <img
//                       src={selectedContact?.avatar}
//                       alt={`contacto_${selectedContact?.id}`}
//                       className="inline-block size-10 rounded-full bg-indigo-200"
//                     />
//                     <span
//                       className={[
//                         "absolute bottom-0 right-2 badges w-[.5rem] h-[.5rem] rounded-full",
//                         selectedContact?.status === "online"
//                           ? "bg-green-300"
//                           : "bg-red-300",
//                       ].join(" ")}
//                     ></span>
//                   </div>
//                   <div className="flex flex-col">
//                     <p className="dark:text-white font-semibold">
//                       {selectedContact?.name}
//                     </p>
//                     <p className="text-gray-400 text-[11px]">
//                       últ. vez hoy a la(s) 12:19 p. m.
//                     </p>
//                   </div>
//                   <div>
//                     <IconTransfer className="dark:text-white" stroke={1} />
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button className="p-2 hover:bg-[#e5e5e5] dark:hover:bg-black  flex items-center flex-col !p-2  rounded-full cursor-pointer">
//                     <IconCancel className="dark:text-white" stroke={1} />
//                     <span className="text-[11px] dark:text-gray-300">
//                       Cancelar
//                     </span>
//                   </button>

//                   <button className="p-2 hover:bg-[#e5e5e5] dark:hover:bg-black  flex items-center flex-col !p-2  rounded-full cursor-pointer">
//                     <IconMessages className="dark:text-white" stroke={1} />
//                     <span className="text-[11px] dark:text-gray-300">
//                       Soporte
//                     </span>
//                   </button>
//                   <button className="p-2 hover:bg-[#e5e5e5] dark:hover:bg-black flex items-center flex-col !p-2  rounded-full cursor-pointer">
//                     <IconMessageCircleX
//                       className="dark:text-white"
//                       stroke={1}
//                     />
//                     <span className="text-[11px] dark:text-gray-300">
//                       Cerrar
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               <div className="border-b border-[#e6e4e480]"></div>
//               {/* cuerpo del mensaje */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0 !pt-5 !pb-4">
//                 {/* cliente */}
//                 <div className="col-span-1 sm:col-span-2">
//                   <div className="flex items-end gap-2 mb-1">
//                     <img
//                       src={selectedContact?.avatar}
//                       alt={`contacto_${selectedContact?.id}`}
//                       className="inline-block size-8 rounded-full bg-indigo-200"
//                     />
//                     <div className="flex items-center messenger gap-3">
//                       <div className="bg-[#fffefe] dark:bg-[#64857ab3] shadow-lg  !px-4 !py-1  rounded-[.8rem]">
//                         <p className="text-black dark:text-white text-[12px] font-[300]">
//                           {selectedContact?.lastMessage}
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-2 action-messenger">
//                         <IconPin className="text-gray-400" stroke={2} />
//                         <IconMoodKid className="text-gray-400" stroke={2} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="!ml-11">
//                     <p className="dark:text-white text-start text-[12px] font-[200]">
//                       10:30 AM
//                     </p>
//                   </div>
//                 </div>
//                 {spanContainer()}
//                 {/* user */}
//                 <div className="col-span-1 sm:col-span-2">
//                   <div className="flex items-end gap-2 mb-1">
//                     <div className="flex items-center messenger gap-3">
//                       <div className="flex items-center gap-2 action-messenger">
//                         <IconPin className="text-gray-400" stroke={2} />
//                         <IconMoodKid className="text-gray-400" stroke={2} />
//                       </div>
//                       <div className="bg-[#4b604d] dark:bg-[#0b6044b3] shadow-lg  !px-4 !py-1  rounded-[.8rem]">
//                         <p className="text-white text-[12px] font-[300]">
//                           ¡Claro! Cuéntame un poco: ¿qué quieres que hagan los
//                           agentes y para qué área es el proyecto?
//                         </p>
//                       </div>
//                     </div>
//                     <img
//                       src={profile}
//                       alt="contacto_agente"
//                       className="inline-block size-8 rounded-full bg-indigo-200"
//                     />
//                   </div>
//                   <div className="!mr-11">
//                     <p className="dark:text-white text-end text-[12px] font-[200]">
//                       10:31 AM
//                     </p>
//                   </div>
//                 </div>
//                 {spanContainer()}
//                 {/* cliente */}
//                 <div className="col-span-1 sm:col-span-2">
//                   <div className="flex items-end gap-2 mb-1">
//                     <img
//                       src={selectedContact?.avatar}
//                       alt={`contacto_${selectedContact?.id}`}
//                       className="inline-block size-8 rounded-full bg-indigo-200"
//                     />
//                     <div className="flex items-center messenger gap-3">
//                       <div className="bg-[#fffefe] dark:bg-[#64857ab3] shadow-lg  !px-4 !py-1  rounded-[.8rem]">
//                         <p className="text-black dark:text-white text-[12px] font-[300]">
//                           Es para automatizar soporte y también ayudar a mi
//                           equipo con tareas repetitivas (resúmenes, respuestas,
//                           seguimiento de tickets).
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-2 action-messenger">
//                         <IconPin className="text-gray-400" stroke={2} />
//                         <IconMoodKid className="text-gray-400" stroke={2} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="!ml-11">
//                     <p className="dark:text-white text-start text-[12px] font-[200]">
//                       10:32 AM
//                     </p>
//                   </div>
//                 </div>
//                 {spanContainer()}
//                 {/* user */}
//                 <div className="col-span-1 sm:col-span-2">
//                   <div className="flex items-end gap-2 mb-1">
//                     <div className="flex items-center messenger gap-3">
//                       <div className="flex items-center gap-2 action-messenger">
//                         <IconPin className="text-gray-400" stroke={2} />
//                         <IconMoodKid className="text-gray-400" stroke={2} />
//                       </div>
//                       <div className="bg-[#4b604d] dark:bg-[#0b6044b3] shadow-lg  !px-4 !py-1  rounded-[.8rem]">
//                         <p className="text-white text-[12px] font-[300]">
//                           Perfecto. Para aterrizarlo rápido:
//                         </p>
//                         <ol>
//                           <li className="text-white text-[12px] font-[300] !ml-4 !list-decimal mb-1">
//                             <p>
//                               ¿Los agentes solo conversan o también deben
//                               ejecutar acciones (crear tickets, enviar correos,
//                               consultar BD)?
//                             </p>
//                           </li>
//                           <li className="text-white text-[12px] font-[300] !ml-4 !list-decimal">
//                             <p>
//                               ¿Qué stack estás usando (Node/TS, Python, etc.)?
//                             </p>
//                           </li>
//                         </ol>
//                       </div>
//                     </div>
//                     <img
//                       src={profile}
//                       alt="contacto_agente"
//                       className="inline-block size-8 rounded-full bg-indigo-200"
//                     />
//                   </div>
//                   <div className="!mr-11">
//                     <p className="dark:text-white text-end text-[12px] font-[200]">
//                       10:33 AM
//                     </p>
//                   </div>
//                 </div>
//                 {spanContainer()}
//                 {/* cliente */}
//                 <div className="col-span-1 sm:col-span-2">
//                   <div className="flex items-end gap-2 mb-1">
//                     <img
//                       src={selectedContact?.avatar}
//                       alt={`contacto_${selectedContact?.id}`}
//                       className="inline-block size-8 rounded-full bg-indigo-200"
//                     />
//                     <div className="flex items-center messenger gap-3">
//                       <div className="bg-[#fffefe] dark:bg-[#64857ab3] shadow-lg  !px-4 !py-1  rounded-[.8rem]">
//                         <p className="text-black dark:text-white text-[12px] font-[300]">
//                           Deben ejecutar acciones. Stack: Node + TypeScript.
//                           Tenemos información en PDFs y en una base de datos.
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-2 action-messenger">
//                         <IconPin className="text-gray-400" stroke={2} />
//                         <IconMoodKid className="text-gray-400" stroke={2} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="!ml-11">
//                     <p className="dark:text-white text-start text-[12px] font-[200]">
//                       10:34 AM
//                     </p>
//                   </div>
//                 </div>
//                 {spanContainer()}
//                 <div className="col-span-1 sm:col-span-2">
//                   <div className="flex items-end gap-2 mb-1">
//                     <div className="flex items-center messenger gap-3">
//                       <div className="flex items-center gap-2 action-messenger">
//                         <IconPin className="text-gray-400" stroke={2} />
//                         <IconMoodKid className="text-gray-400" stroke={2} />
//                       </div>
//                       <div className="bg-[#4b604d] dark:bg-[#0b6044b3] shadow-lg  !px-4 !py-1  rounded-[.8rem]">
//                         <p className="text-white text-[12px] font-[300]">
//                           Bien. Te propongo una arquitectura simple y escalable:
//                         </p>
//                         <ol>
//                           <li className="text-white text-[12px] font-[300] !ml-4 !list-disc mb-1">
//                             <p>
//                               Agente Orquestador: decide qué hacer y a quién
//                               delegar.
//                             </p>
//                           </li>
//                           <li className="text-white text-[12px] font-[300] !ml-4 !list-disc">
//                             <p>
//                               Agente de Conocimiento (RAG): busca en
//                               PDFs/documentos (vector DB) y devuelve citas.
//                             </p>
//                           </li>
//                           <li className="text-white text-[12px] font-[300] !ml-4 !list-disc">
//                             <p>
//                               Agente de Acciones: ejecuta funciones
//                               (crear/actualizar ticket, consultar BD, etc.).
//                             </p>
//                           </li>
//                           <li className="text-white text-[12px] font-[300] !ml-4 !list-disc">
//                             <p>
//                               Guardrails: reglas de seguridad (no filtrar datos
//                               sensibles, validar inputs).
//                             </p>
//                           </li>
//                         </ol>
//                       </div>
//                     </div>
//                     <img
//                       src={profile}
//                       alt="contacto_agente"
//                       className="inline-block size-8 rounded-full bg-indigo-200"
//                     />
//                   </div>
//                   <div className="!mr-11">
//                     <p className="dark:text-white text-end text-[12px] font-[200]">
//                       10:35 AM
//                     </p>
//                   </div>
//                 </div>
//                 {spanContainer()}
//                 {/* cliente */}
//                 <div className="col-span-1 sm:col-span-2">
//                   <div className="flex items-end gap-2 mb-1">
//                     <img
//                       src={selectedContact?.avatar}
//                       alt={`contacto_${selectedContact?.id}`}
//                       className="inline-block size-8 rounded-full bg-indigo-200"
//                     />
//                     <div className="flex items-center messenger gap-3">
//                       <div className="bg-[#fffefe] dark:bg-[#64857ab3] shadow-lg  !px-4 !py-1  rounded-[.8rem]">
//                         <p className="text-black dark:text-white text-[12px] font-[300]">
//                           Me gusta. ¿Cómo definimos el flujo?
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-2 action-messenger">
//                         <IconPin className="text-gray-400" stroke={2} />
//                         <IconMoodKid className="text-gray-400" stroke={2} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="!ml-11">
//                     <p className="dark:text-white text-start text-[12px] font-[200]">
//                       10:36 AM
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* input mesaje */}
//               <div className="!px-4 flex items-center rounded-[.8rem] bg-black/10 dark:bg-white/10 !py-3">
//                 <div className="w-full">
//                   <TextField
//                     id="search"
//                     background="bg-black/5 dark:bg-white/5"
//                     placeholder="Responder mensaje"
//                     leftIcon={
//                       <div className="flex items-center gap-2 !mr-2">
//                         <button className="cursor-pointer text-gray-400">
//                           <IconPlus stroke={2} />
//                         </button>
//                         <button className="cursor-pointer text-gray-400">
//                           <IconMoodPlus stroke={2} />
//                         </button>
//                       </div>
//                     }
//                     rightAction={
//                       <button className="cursor-pointer text-gray-400">
//                         <IconSend2 stroke={2} />
//                       </button>
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card !px-3 !py-3  !bg-[#ffffffe6] backdrop-saturate-[200%] backdrop-blur-[12px] dark:!bg-[#233831b3] dark:backdrop-blur-[12px] dark:backdrop-saturate-[1.7]">
//             <div className="flex items-center mb-5 justify-between">
//               <div></div>
//               <div>
//                 <h2 className="dark:text-white text-[20px]">Información</h2>
//               </div>
//               <div>
//                 <IconX className="dark:text-white cursor-pointer" stroke={2} />
//               </div>
//             </div>
//             <h3 className="dark:text-white text-[18px] mb-2">
//               Acerca del cliente
//             </h3>
//             <div className="flex justify-between mb-10">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={selectedContact?.avatar}
//                   alt={`contacto_${selectedContact?.id}`}
//                   className="inline-block size-12 rounded-full bg-indigo-200"
//                 />
//                 <div className="flex flex-col">
//                   <p className="dark:text-white text-[14px] overflow-hidden text-ellipsis line-clamp-1 font-[500]">
//                     {selectedContact?.name}
//                   </p>
//                   <p className="dark:text-white text-[11px] overflow-hidden text-ellipsis line-clamp-1 font-[200]">
//                     Visitas {selectedContact?.unread}
//                   </p>
//                 </div>
//               </div>
//               <IconRosetteDiscountCheckFilled className="dark:text-white" />
//             </div>
//             <div className="flex flex-col">
//               <div className="dark:text-white text-[14px] font-[200] ">
//                 Número de teléfono
//               </div>
//               <div className="flex items-center gap-2 mb-6">
//                 <IconPhone className="dark:text-white" />
//                 <p className="dark:text-white text-[14px] overflow-hidden text-ellipsis line-clamp-1 font-[500]">
//                   {selectedContact?.n_contacts}
//                 </p>
//               </div>

//               <div className="dark:text-white text-[14px] font-[200]">
//                 Correo electrónico
//               </div>
//               <div className="flex items-center gap-2 mb-6">
//                 <IconMail className="dark:text-white" />
//                 <p className="dark:text-white text-[14px] overflow-hidden text-ellipsis line-clamp-1 font-[500]">
//                   {selectedContact?.email}
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 mb-6">
//                 <div>
//                   <div className="dark:text-white text-[14px] font-[200]">
//                     Fecha
//                   </div>
//                   <div className="dark:text-white text-[14px] font-[500]">
//                     {selectedContact?.date}
//                   </div>
//                 </div>
//                 <div>
//                   <div className="dark:text-white text-[14px] font-[200]">
//                     Hora
//                   </div>
//                   <div className="dark:text-white text-[14px] font-[500]">
//                     {selectedContact?.time}
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2">
//                 <div>
//                   <div className="dark:text-white text-[14px] font-[200]">
//                     Canal
//                   </div>
//                   <div className="dark:text-white text-[14px] font-[500]">
//                     Web / Móvil
//                   </div>
//                 </div>
//                 <div>
//                   <div className="dark:text-white text-[14px] font-[200]">
//                     Navegador
//                   </div>
//                   <div className="dark:text-white text-[14px] font-[500]">
//                     {getBrowser()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* enfoque */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//         <div className="flex flex-col gap-2">
//           <div>
//             <span className="text-sm text-green-950 dark:text-[#c8f7e8] uppercase">
//               Mi enfoque
//             </span>
//             <h2 className="text-h2 text-[#025a4e] dark:text-[#b9ffee] !space-x-2 leading-12">
//               Soluciones web y móviles con enfoque, calidad y rendimiento
//             </h2>
//           </div>
//           <p className="text-[16px] text-green-950 dark:text-white">
//             Desarrollo productos digitales de extremo a extremo, cuidando la
//             arquitectura, el rendimiento y la experiencia de usuario. Me enfoco
//             en construir soluciones mantenibles y escalables que resuelven
//             problemas reales y aportan valor desde el primer entregable.
//           </p>
//         </div>
//         <div className="flex flex-col">
//           <div className="card !shadow-none !bg-[#ffffffe6] backdrop-saturate-[200%] backdrop-blur-[12px] dark:!bg-[#233831b3] dark:backdrop-blur-[12px] dark:backdrop-saturate-[1.7] mb-5">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-r from-[#6BFDD9] to-[#f0ff6c] animate-pulse duration-200 ease-in-out ">
//                 <IconGitBranch className="text-green-950" stroke={2} />
//               </div>
//               <div>
//                 <h2 className="text-green-950 dark:text-[#b9ffee] text-[18px]">
//                   Visión
//                 </h2>
//               </div>
//             </div>

//             <div>
//               <p className="dark:text-white">
//                 Ser un desarrollador full-stack reconocido por crear soluciones
//                 web y móviles escalables, seguras y bien diseñadas, que aporten
//                 valor real a las personas y a los negocios.
//               </p>
//             </div>
//           </div>

//           <div className="card !shadow-none !bg-[#ffffffe6] backdrop-saturate-[200%] backdrop-blur-[12px] dark:!bg-[#233831b3] dark:backdrop-blur-[12px] dark:backdrop-saturate-[1.7] mb-5">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-r from-[#6BFDD9] to-[#f0ff6c] animate-pulse duration-200 ease-in-out ">
//                 <IconCategory2 className="text-green-950" stroke={2} />
//               </div>
//               <div>
//                 <h2 className="text-green-950 dark:text-[#b9ffee] text-[18px]">
//                   Misión
//                 </h2>
//               </div>
//             </div>

//             <div>
//               <p className="dark:text-white">
//                 Diseñar y desarrollar productos digitales de extremo a extremo
//                 (frontend y backend), cuidando rendimiento, mantenibilidad y
//                 experiencia de usuario, usando buenas prácticas y tecnologías
//                 modernas como React, Vue, Angular, Flutter, Django, Laravel y
//                 Node.js, según lo que el proyecto requiera.
//               </p>
//             </div>
//           </div>

//           <div className="card !shadow-none !bg-[#ffffffe6] backdrop-saturate-[200%] backdrop-blur-[12px] dark:!bg-[#233831b3] dark:backdrop-blur-[12px] dark:backdrop-saturate-[1.7] mb-5">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-r from-[#6BFDD9] to-[#f0ff6c] animate-pulse duration-200 ease-in-out ">
//                 <IconLaurelWreath1 className="text-green-950" stroke={2} />
//               </div>
//               <div>
//                 <h2 className="text-green-950 dark:text-[#b9ffee] text-[18px]">
//                   Enfoque
//                 </h2>
//               </div>
//             </div>

//             <div className="!pl-8">
//               <ol>
//                 <li className="!list-disc dark:text-white">
//                   Full-stack práctico: construyo interfaces claras y backend
//                   sólido, conectando producto + tecnología.
//                 </li>
//                 <li className="!list-disc dark:text-white">
//                   Calidad y escalabilidad: código limpio, arquitectura
//                   mantenible, APIs bien pensadas y performance.
//                 </li>
//                 <li className="!list-disc dark:text-white">
//                   Tecnología adecuada al problema: PHP/Laravel, Python/Django,
//                   Node.js, Java, JavaScript; y front con React/Vue/Angular +
//                   Tailwind; apps con Flutter/Dart.
//                 </li>
//                 <li className="!list-disc dark:text-white">
//                   Entrega y mejora continua: iteración rápida, comunicación
//                   clara y foco en resultados.
//                 </li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import {
  IconCancel,
  IconCategory2,
  IconChecks,
  IconCode,
  IconDotsVertical,
  IconFilter2,
  IconGitBranch,
  IconLaurelWreath1,
  IconMail,
  IconMessageChatbot,
  IconMessageCircleX,
  IconMessages,
  IconMoodKid,
  IconMoodPlus,
  IconPhone,
  IconPin,
  IconPlus,
  IconPrompt,
  IconRosetteDiscountCheckFilled,
  IconSearch,
  IconSend2,
  IconSparkles,
  IconTransfer,
  IconX,
} from "@tabler/icons-react";
import profile from "../../assets/images/perfil.png";
import { CountUp, Tabs } from "../../components";
import { contacts as contactsDB, type Contact } from "../../lib/db/client";
import { useEffect, useMemo, useState } from "react";
import TextField from "../../components/TextField";
import getBrowser from "../../lib/db/browser";
import { skills } from "../../lib/db/skills";
import { filters } from "../../lib/util/config";
import { useTheme } from "../../layouts/ThemeContext";
import { useTranslation } from "react-i18next";

const skillsDeveloper = (values: number[]) =>
  filters({ array: skills, key: "id", value: values });

const About = () => {
  const { isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const translatedContacts = useMemo(
    () =>
      contactsDB.map((contact) => ({
        ...contact,
        lastMessage: t(`about.contacts.${contact.id}`, {
          defaultValue: contact.lastMessage,
        }),
      })) as Contact[],
    [i18n.resolvedLanguage, t],
  );
  const [contacts, setContacts] = useState<Contact[]>(translatedContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    setContacts((prev) => {
      const activeId =
        prev.find((contact) => contact.isActive)?.id ??
        translatedContacts.find((contact) => contact.isActive)?.id ??
        translatedContacts[0]?.id;

      return translatedContacts.map((contact) => ({
        ...contact,
        isActive: contact.id === activeId,
      }));
    });
  }, [translatedContacts]);

  useEffect(() => {
    if (contacts.length > 0) {
      const contact = contacts.find((c) => c.isActive) ?? contacts[0];
      setSelectedContact(contact);
    }
  }, [contacts]);

  const info = (contact: Contact) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === contact.id
          ? { ...c, isActive: true }
          : { ...c, isActive: false },
      ),
    );
    setSelectedContact(contact);
  };

  const spanContainer = () =>
    Array.from({ length: 2 }).map((_, index) => (
      <div className="hidden sm:block" key={index}></div>
    ));

  const statItems = [
    {
      value: 100,
      suffix: "+",
      label: t("about.stats.projects"),
      color: "from-emerald-400 to-teal-500",
    },
    {
      value: 5,
      suffix: "+",
      label: t("about.stats.experience"),
      color: "from-sky-400 to-blue-500",
    },
    {
      value: 12,
      suffix: "+",
      label: t("about.stats.clients"),
      color: "from-violet-400 to-purple-500",
    },
    {
      value: 99,
      suffix: "%",
      label: t("about.stats.deliveries"),
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <div className="content">
      {/* ── HERO ── */}
      <div className="relative container-title  overflow-hidden">
        <div className="relative grid grid-cols-1 lg:grid-cols-5! gap-5 items-center">
          {/* Avatar */}
          <div className="lg:col-span-2! flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl shadow-emerald-500/10 w-64 h-72 lg:w-80! lg:h-96!">
                <img
                  className="h-full w-full object-cover object-top"
                  src={profile}
                  alt="Gian Pierre"
                />
                {/* Glassmorphic badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-md px-4! py-2! border border-white/30 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-xs font-medium">
                      Gian Pierre.
                    </span>
                    <IconSparkles
                      size={14}
                      className="text-emerald-300 ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3! flex flex-col gap-6">
            <div className="text-center lg:text-start!">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-500 dark:text-emerald-400 mb-3">
                <span className="w-4 h-px bg-emerald-500 dark:bg-emerald-400" />
                Full Stack Developer
              </span>
              <h1 className="font-acorn font-bold text-zinc-900 dark:text-white leading-tight mb-4">
                Gian Pierre
              </h1>
              <h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-200 mb-5">
                {t("about.roleTitle")}
              </h2>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed border-l-2 border-emerald-400/50 pl-4!">
              {t("about.intro1")}
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
              {t("about.intro2")}
            </p>

            {/* Tag strip */}
            <div className="flex flex-wrap gap-2 mt-2">
              {skills
                .filter((skill) => [3, 22, 7, 6, 5, 4, 28].includes(skill.id))
                .map((tag) => (
                  <span
                    key={tag.id}
                    className="flex gap-2 px-3! py-1! rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-500/20"
                  >
                    <tag.icon
                      stroke={2}
                      color={isDark ? "#b9ffee" : "#025a4e"}
                      size={14}
                    />
                    {tag.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {statItems.map((stat, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-3xl p-6!  backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className={`absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity blur-xl`}
            />
            <CountUp
              className={`bg-clip-text text-transparent bg-gradient-to-r ${stat.color} text-4xl font-black`}
              value={stat.value}
              suffix={stat.suffix}
            />
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-1 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── STACK ── */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-green-950 font-bold uppercase dark:text-white">
              {t("about.stack.eyebrow")}
            </span>
            <h2 className="text-h2 font-bold text-green-950 leading-12 mb-2 dark:text-[#b9ffee]">
              {t("about.stack.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                label: t("about.stack.frontend"),
                tech: "Vue · Tailwind · Vite · TS",
              },
              {
                label: t("about.stack.backend"),
                tech: "Python · Django",
              },
              {
                label: t("about.stack.mobile"),
                tech: "Flutter · Dart",
              },
              { label: t("about.stack.database"), tech: "PostgreSQL" },
            ].map((item) => (
              <div>
                <h4 className="dark:text-[#b9ffee]">{item.label}</h4>
                <p className="text-sm dark:text-white">▰▰▰▰▰ {item.tech}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Bento skill cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3!">
          {[
            {
              titleKey: "about.stack.coreTitle",
              descKey: "about.stack.coreDesc",
              ids: [22, 2, 23, 5, 28, 43, 44],
            },
            {
              titleKey: "about.stack.extraTitle",
              descKey: "about.stack.extraDesc",
              ids: [7, 8, 3, 4, 35, 34, 37],
            },
            {
              titleKey: "about.stack.dataTitle",
              descKey: "about.stack.dataDesc",
              ids: [36, 38, 45, 46, 47],
            },
          ].map((section) => (
            <div
              key={section.titleKey}
              className="group relative overflow-hidden rounded-3xl p-6!  backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-base font-bold text-zinc-800 dark:text-[#b9ffee] mb-1">
                {t(section.titleKey)}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-4">
                {t(section.descKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillsDeveloper(section.ids).map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-1.5 items-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 px-3! py-1! hover:scale-105 transition-transform"
                  >
                    <item.icon
                      stroke={2}
                      color={isDark ? "#b9ffee" : "#025a4e"}
                      size={14}
                    />
                    <span className="text-xs font-semibold text-[#025a4e] dark:text-[#b9ffee]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MESSENGER ── */}
      <div className="container-messenger mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/20">
            <IconPrompt size={24} className="text-white" stroke={2} />
          </div>
          <div>
            <h2 className="text-h2 font-bold text-green-950 dark:text-[#aee8df] flex items-center gap-2">
              {t("about.messenger.title")} <IconCode size={26} stroke={2} />
            </h2>
          </div>
        </div>

        <div className="container-chat grid grid-cols-1 lg:grid-cols-4 gap-4 rounded-3xl overflow-hidden border border-white/40 dark:border-white/10 shadow-sm bg-white/40 dark:bg-[#1a2f27]/60 backdrop-blur-xl">
          {/* CONTACTS SIDEBAR */}
          <div className="container-contacts border-r border-white/20 dark:border-white/5 p-4!">
            <div className="mb-4">
              <div className="headers mb-5 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  <IconMessageChatbot stroke={2} size={18} />
                  {t("about.messenger.allMessages")}
                </h2>
                <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                  <IconDotsVertical stroke={2} size={18} />
                </button>
              </div>
              <div className="container-tabs w-full">
                <Tabs
                  tabClassName="text-black"
                  className="tabs mb-8 text-black"
                  variant="underline"
                  tabs={[
                    {
                      id: "1",
                      label: t("about.messenger.openChat"),
                      content: () => (
                        <div>
                          <div className="container-search mt-5">
                            <div>
                              <div className="mt-2">
                                <TextField
                                  id="search"
                                  background="bg-black/10 dark:bg-white/10"
                                  placeholder={t(
                                    "about.messenger.searchPlaceholder",
                                  )}
                                  leftIcon={
                                    <IconSearch
                                      color={isDark ? "white" : "#bbbbbb"}
                                      stroke={2}
                                      size={20}
                                    />
                                  }
                                  rightAction={
                                    <button className="cursor-pointer text-[#bbbbbb]">
                                      <IconFilter2 stroke={2} size={20} />
                                    </button>
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: "2",
                      label: t("about.messenger.inProgress"),
                      disabled: true,
                      content: () => <div />,
                    },
                    {
                      id: "3",
                      label: t("about.messenger.closed"),
                      disabled: true,
                      content: () => <div />,
                    },
                  ]}
                />
                <div
                  className="mb-2"
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <Tabs
                    className="tabs"
                    variant="underline"
                    tabs={[
                      {
                        id: "1",
                        label: t("about.messenger.chatCount", { count: 15 }),
                        content: () => <div></div>,
                      },
                      {
                        id: "2",
                        label: t("about.messenger.emailCount", { count: 3 }),
                        disabled: true,
                        content: () => <div />,
                      },
                      {
                        id: "3",
                        label: t("about.messenger.inboxCount", { count: 5 }),
                        disabled: true,
                        content: () => <div />,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="contacts space-y-5!">
              {contacts.map((contact, index) => (
                <div
                  key={contact.id}
                  className={[
                    "rounded-2xl p-3! cursor-pointer relative transition-all duration-200",
                    contact.isActive
                      ? "bg-gradient-to-br from-[#4b604d] to-[#2f4232] shadow-lg"
                      : "bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 border border-white/30 dark:border-white/5",
                  ].join(" ")}
                  onClick={() => info(contact)}
                >
                  <div className="absolute bottom-3 right-3">
                    {contact.isActive ? (
                      <IconTransfer
                        className="text-white/60"
                        stroke={1.5}
                        size={14}
                      />
                    ) : null}
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative shrink-0!">
                      <img
                        src={contact.avatar}
                        alt={`contacto_${index + 1}`}
                        className="inline-block size-9 rounded-full object-cover ring-2 ring-white/30"
                      />
                      <span
                        className={[
                          "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-900",
                          contact.status === "online"
                            ? "bg-emerald-400"
                            : "bg-red-400",
                        ].join(" ")}
                      />
                    </div>
                    <div className="contact-info flex justify-between w-full min-w-0">
                      <div className="min-w-0">
                        <p
                          className={[
                            "text-xs font-semibold truncate",
                            contact.isActive
                              ? "text-white"
                              : "text-zinc-800 dark:text-zinc-100",
                          ].join(" ")}
                        >
                          {contact.name}
                        </p>
                        <p
                          className={[
                            "text-[10px]",
                            contact.isActive
                              ? "text-white/60"
                              : "text-zinc-400",
                          ].join(" ")}
                        >
                          ({contact.n_contacts})
                        </p>
                      </div>
                      <div className="flex items-end flex-col shrink-0 ml-1">
                        <IconChecks
                          className={
                            contact.isActive ? "text-white/60" : "text-zinc-400"
                          }
                          size={14}
                          stroke={contact.isActive ? 2.5 : 1.5}
                        />
                        <span
                          className={[
                            "text-[10px]",
                            contact.isActive
                              ? "text-white/60"
                              : "text-zinc-400",
                          ].join(" ")}
                        >
                          {contact.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p
                    className={[
                      "text-[11px] line-clamp-2 leading-relaxed",
                      contact.isActive
                        ? "text-white/80"
                        : "text-zinc-500 dark:text-zinc-400",
                    ].join(" ")}
                  >
                    {contact.lastMessage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MESSAGES PANEL */}
          <div className="container-messages lg:col-span-2! flex flex-col">
            <div className="flex-1 flex flex-col p-4!">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3! border-b border-white/20 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-9 rounded-full object-cover ring-2 ring-emerald-400/30"
                    />
                    <span
                      className={[
                        "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-900",
                        selectedContact?.status === "online"
                          ? "bg-emerald-400"
                          : "bg-red-400",
                      ].join(" ")}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-white">
                      {selectedContact?.name}
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      {t("about.messenger.lastSeen")}
                    </p>
                  </div>
                  <IconTransfer
                    className="text-zinc-400"
                    stroke={1}
                    size={16}
                  />
                </div>
                <div className="flex items-center gap-1">
                  {[
                    {
                      icon: <IconCancel size={16} stroke={1.5} />,
                      label: t("common.cancel"),
                    },
                    {
                      icon: <IconMessages size={16} stroke={1.5} />,
                      label: t("common.support"),
                    },
                    {
                      icon: <IconMessageCircleX size={16} stroke={1.5} />,
                      label: t("common.close"),
                    },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-zinc-500 dark:text-zinc-400 cursor-pointer transition-colors"
                    >
                      {btn.icon}
                      <span className="text-[9px]">{btn.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages body */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0 pt-2 pb-4 overflow-y-auto">
                {/* cliente */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-7 rounded-full object-cover"
                    />
                    <div className="flex items-center messenger gap-2">
                      <div className="bg-white dark:bg-[#64857ab3]! shadow-md px-4! py-2! rounded-2xl rounded-bl-sm max-w-[280px]">
                        <p className="text-zinc-700 dark:text-zinc-100 text-[12px] font-light">
                          {selectedContact?.lastMessage}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-9">
                    <p className="text-zinc-400 text-[10px]!">10:30 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* agent */}
                <div className="col-span-1 sm:col-span-2!">
                  <div className="flex items-end gap-2 mb-1">
                    <div className="flex items-center messenger gap-2">
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                      <div className="bg-gradient-to-br from-[#4b604d] to-[#2f4232] shadow-md px-4! py-2! rounded-2xl rounded-br-sm max-w-[280px]">
                        <p className="text-white text-[12px] font-light">
                          {t("about.messenger.agentAsk")}
                        </p>
                      </div>
                    </div>
                    <img
                      src={profile}
                      alt="contacto_agente"
                      className="inline-block size-7 rounded-full object-cover"
                    />
                  </div>
                  <div className="mr-9 flex justify-end">
                    <p className="text-zinc-400 text-[10px]">10:31 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* cliente */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-7 rounded-full object-cover"
                    />
                    <div className="flex items-center messenger gap-2">
                      <div className="bg-white dark:bg-[#64857ab3]! shadow-md px-4! py-2! rounded-2xl rounded-bl-sm max-w-[280px]">
                        <p className="text-zinc-700 dark:text-zinc-100 text-[12px] font-light">
                          {t("about.messenger.clientNeed")}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-9">
                    <p className="text-zinc-400 text-[10px]">10:32 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* agent */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <div className="flex items-center messenger gap-2">
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                      <div className="bg-gradient-to-br from-[#4b604d] to-[#2f4232] shadow-md px-4! py-2! rounded-2xl rounded-br-sm max-w-[280px]">
                        <p className="text-white text-[12px] font-light">
                          {t("about.messenger.agentClarify")}
                        </p>
                        <ol>
                          <li className="text-white text-[11px] font-light ml-4 list-decimal mb-1">
                            <p>{t("about.messenger.agentClarify1")}</p>
                          </li>
                          <li className="text-white text-[11px] font-light ml-4 list-decimal">
                            <p>{t("about.messenger.agentClarify2")}</p>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <img
                      src={profile}
                      alt="contacto_agente"
                      className="inline-block size-7 rounded-full object-cover"
                    />
                  </div>
                  <div className="mr-9 flex justify-end">
                    <p className="text-zinc-400 text-[10px]">10:33 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* cliente */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-7 rounded-full object-cover"
                    />
                    <div className="flex items-center messenger gap-2">
                      <div className="bg-white dark:bg-[#64857ab3]! shadow-md px-4! py-2! rounded-2xl rounded-bl-sm max-w-[280px]">
                        <p className="text-zinc-700 dark:text-zinc-100 text-[12px] font-light">
                          {t("about.messenger.clientStack")}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-9">
                    <p className="text-zinc-400 text-[10px]">10:34 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* agent */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <div className="flex items-center messenger gap-2">
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                      <div className="bg-gradient-to-br from-[#4b604d] to-[#2f4232] shadow-md px-4! py-2! rounded-2xl rounded-br-sm max-w-[280px]">
                        <p className="text-white text-[12px] font-light">
                          {t("about.messenger.agentProposal")}
                        </p>
                        <ol>
                          <li className="text-white text-[11px] font-light ml-4 list-disc mb-1">
                            <p>{t("about.messenger.agentProposal1")}</p>
                          </li>
                          <li className="text-white text-[11px] font-light ml-4 list-disc mb-1">
                            <p>{t("about.messenger.agentProposal2")}</p>
                          </li>
                          <li className="text-white text-[11px] font-light ml-4 list-disc mb-1">
                            <p>{t("about.messenger.agentProposal3")}</p>
                          </li>
                          <li className="text-white text-[11px] font-light ml-4 list-disc">
                            <p>{t("about.messenger.agentProposal4")}</p>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <img
                      src={profile}
                      alt="contacto_agente"
                      className="inline-block size-7 rounded-full object-cover"
                    />
                  </div>
                  <div className="mr-9 flex justify-end">
                    <p className="text-zinc-400 text-[10px]">10:35 AM</p>
                  </div>
                </div>
                {spanContainer()}

                {/* cliente final */}
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-end gap-2 mb-1">
                    <img
                      src={selectedContact?.avatar}
                      alt={`contacto_${selectedContact?.id}`}
                      className="inline-block size-7 rounded-full object-cover"
                    />
                    <div className="flex items-center messenger gap-2">
                      <div className="bg-white dark:bg-[#64857ab3]! shadow-md px-4! py-2! rounded-2xl rounded-bl-sm max-w-[280px]">
                        <p className="text-zinc-700 dark:text-zinc-100 text-[12px] font-light">
                          {t("about.messenger.clientFlow")}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 action-messenger">
                        <IconPin
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                        <IconMoodKid
                          className="text-zinc-400"
                          stroke={2}
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-9">
                    <p className="text-zinc-400 text-[10px]">10:36 AM</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="mt-2 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/40 dark:border-white/10 px-4! py-2!">
                <TextField
                  id="msg-reply"
                  background="bg-transparent"
                  placeholder={t("about.messenger.replyPlaceholder")}
                  leftIcon={
                    <div className="flex items-center gap-2 mr-2">
                      <button className="cursor-pointer text-zinc-400 hover:text-emerald-500 transition-colors">
                        <IconPlus stroke={2} size={18} />
                      </button>
                      <button className="cursor-pointer text-zinc-400 hover:text-emerald-500 transition-colors">
                        <IconMoodPlus stroke={2} size={18} />
                      </button>
                    </div>
                  }
                  rightAction={
                    <button className="cursor-pointer text-emerald-500 hover:text-emerald-400 transition-colors">
                      <IconSend2 stroke={2} size={18} />
                    </button>
                  }
                />
              </div>
            </div>
          </div>

          {/* INFO PANEL */}
          <div className="p-4! border-l border-white/20 dark:border-white/5!">
            <div className="flex items-center mb-5 justify-between">
              <div />
              <h2 className="text-sm font-bold text-zinc-800 dark:text-white">
                {t("common.information")}
              </h2>
              <IconX
                className="text-zinc-400 dark:text-zinc-500 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                stroke={2}
                size={16}
              />
            </div>

            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
              {t("about.messenger.aboutClient")}
            </h3>

            <div className="flex items-center justify-between gap-3 mb-6 p-3! rounded-2xl bg-white/40 dark:bg-white/5! border border-white/30 dark:border-white/5!">
              <div className="flex items-center gap-3">
                <img
                  src={selectedContact?.avatar}
                  alt={`contacto_${selectedContact?.id}`}
                  className="inline-block size-10 rounded-full object-cover ring-2 ring-emerald-400/20"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-white truncate">
                    {selectedContact?.name}
                  </p>
                  <p className="text-[10px] text-zinc-400">
                    {t("about.messenger.visits", {
                      count: selectedContact?.unread ?? 0,
                    })}
                  </p>
                </div>
              </div>
              <IconRosetteDiscountCheckFilled
                className="text-emerald-500 shrink-0"
                size={18}
              />
            </div>

            <div className="space-y-4!">
              {[
                {
                  icon: <IconPhone size={14} />,
                  label: t("about.messenger.phoneLabel"),
                  value: selectedContact?.n_contacts,
                },
                {
                  icon: <IconMail size={14} />,
                  label: t("about.messenger.emailLabel"),
                  value: selectedContact?.email,
                },
              ].map((row) => (
                <div key={String(row.label)}>
                  <p className="text-[10px] text-zinc-400 font-medium mb-1">
                    {row.label}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {row.icon}
                    </span>
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 truncate">
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: t("about.messenger.dateLabel"),
                    value: selectedContact?.date,
                  },
                  {
                    label: t("about.messenger.timeLabel"),
                    value: selectedContact?.time,
                  },
                  {
                    label: t("about.messenger.channelLabel"),
                    value: t("about.messenger.channelValue"),
                  },
                  {
                    label: t("about.messenger.browserLabel"),
                    value: getBrowser(),
                  },
                ].map((item) => (
                  <div key={String(item.label)}>
                    <p className="text-[10px] text-zinc-400 font-medium">
                      {item.label}
                    </p>
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 truncate">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOCUS / VISION / MISSION ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2! gap-8 mb-10">
        {/* Left: description */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
              {t("about.focus.eyebrow")}
            </span>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-[#b9ffee] mt-2 leading-snug">
              {t("about.focus.title")}
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-100 text-base leading-relaxed">
            {t("about.focus.description")}
          </p>
          {/* Approach list */}
          <div className="space-y-3!">
            {[
              t("about.focus.approach1"),
              t("about.focus.approach2"),
              t("about.focus.approach3"),
              t("about.focus.approach4"),
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0! mt-1! w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-zinc-600 dark:text-zinc-100">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Vision / Mission / Approach cards */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: <IconGitBranch stroke={2} size={20} />,
              titleKey: "about.focus.visionTitle",
              bodyKey: "about.focus.visionBody",
              gradient: "from-emerald-400 to-teal-500",
            },
            {
              icon: <IconCategory2 stroke={2} size={20} />,
              titleKey: "about.focus.missionTitle",
              bodyKey: "about.focus.missionBody",
              gradient: "from-sky-400 to-blue-500",
            },
          ].map((card) => (
            <div
              key={card.titleKey}
              className="group p-5! rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg`}
                >
                  {card.icon}
                </div>
                <h3 className="font-bold text-zinc-800 dark:text-[#b9ffee]">
                  {t(card.titleKey)}
                </h3>
              </div>
              {card.bodyKey && (
                <p className="text-sm text-zinc-600 dark:text-zinc-100 leading-relaxed">
                  {t(card.bodyKey)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
