import { LiveEditor, UniverseSkills } from "../../components";

const Tools = () => {
  return (
    <div className="content">
      <div className="block m-auto text-center w-full container-title pb-10">
        <h1 className="letter-spacing-1 font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
          Desarrollo
        </h1>
        <div className="grid grid-cols-[1fr_min(65ch,100%)_1fr] text-center px-4">
          <div className="col-2 text-center">
            <p className="subtitle text-center mx-auto max-w-xl text-gray-600">
              Un recorrido interactivo por el ecosistema de herramientas y
              lenguajes que utilizo para materializar ideas complejas en
              productos digitales de alto rendimiento.
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor del Editor con título amigable */}
      <div className="flex flex-col gap-5 mb-10">
        <div className="flex flex-col">
          <h2 className="text-h2 text-[#025a4e] dark:text-[#b9ffee] !space-x-2 leading-13">
            Pon a prueba mi editor{" "}
            <span className="font-light text-gray-500 dark:text-white">
              HTML/CSS en vivo
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Modifica el código y mira el resultado al instante
          </p>
        </div>
        <div className="editor-wrapper">
          <LiveEditor />
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-20">
        <div className="flex flex-col">
          <h2 className="text-h2 text-[#025a4e] dark:text-[#b9ffee] leading-tight">
            Mi Stack de{" "}
            <span className="font-light text-gray-500 dark:text-white">
              Habilidades
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Explora de forma inmersiva las tecnologías y lenguajes que
            constituyen mi núcleo profesional. Visualiza cómo cada herramienta
            orbita e interactúa en mi flujo de trabajo para materializar
            soluciones digitales de alto rendimiento.
          </p>
        </div>
        <UniverseSkills />
      </div>
    </div>
  );
};

export default Tools;
