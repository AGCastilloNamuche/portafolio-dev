import { findValue } from "../util/config";
import { category, type Category } from "./category";

export type Article = {
    id: string;
    title: string;
    image: string;
    category: Category;
    author: string;
    description: string;
    content: string;
    date: string;
}

export const articles: ReadonlyArray<Article> = [
    {
        id: "1",
        title: "Optimizando React con useMemo y useCallback",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name", isReturn: false }),
        author: "Gianpierre",
        description: "Una guía completa sobre cómo mejorar el rendimiento de tus aplicaciones React evitando renderizados innecesarios en árboles de componentes muy profundos.",
        date: "2023-10-15",
        content: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  Por qué optimizar
                </span>
                <span class="font-acorn dark:text-white">el rendimiento</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[15px] dark:text-white text-justify">
                  El rendimiento en aplicaciones complejas de React a menudo sufre debido a re-renderizados innecesarios. La regla básica es que todo componente de React se actualizará en la pantalla tan pronto como lo haga su padre. Al utilizar hooks como <code>useMemo</code> y <code>useCallback</code>, podemos memorizar variables de alto procesamiento y funciones, garantizando que el motor de JS de nuestro cliente no colapse al no volver a calcularse si las dependencias no cambian.
                </p>
            </div>

            <div class="!p-6 rounded-[2rem] bg-[#025a4e0a] dark:bg-[#b9ffee0a] border border-[#025a4e20] dark:border-[#b9ffee20] mb-8 mt-4 relative overflow-hidden">
                <div class="absolute w-1 h-full bg-emerald-500 left-0 top-0"></div>
                <p class="text-sm md:text-[15px] text-gray-700 dark:text-gray-300 italic mb-0">
                  "La optimización prematura es la raíz de todos los males. Solo memoriza cuando las métricas o los Profilers de las DevTools te indiquen estrictamente la existencia de un cuello de botella."
                </p>
            </div>

            <h2 class="text-2xl uppercase mb-4 mt-6">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  Casos de Uso
                </span>
                <span class="font-acorn dark:text-white">
                Comunes
                </span>
            </h2>

            <div class="flex flex-col gap-6">
                <div class="flex flex-col">
                    <h3 class="text-base text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                        1. Filtrado de Tablas de Alta Densidad (useMemo):
                    </h3>
                    <p class="text-[15px] text-justify mb-2 text-gray-800 dark:text-gray-200">
                       Ideal para cálculos pesados que no deberían ejecutarse en cada render. Imagina que tienes un DataGrid con 10,000 registros traídos de la base de datos y además posees inputs de filtros iterando sobre este bloque. Un solo tipeo de input bloquearía el <i>DOM Event Loop</i>. Aplicar <code>useMemo</code> al arregro filtrado solucionaría este pico temporal.
                    </p>
                </div>
                
                <div class="flex flex-col">
                    <h3 class="text-base text-emerald-800 dark:text-emerald-300 font-bold mb-2">
                        2. Funciones Clave en Referencias Hijas (useCallback):
                    </h3>
                    <p class="text-[15px] text-justify mb-2 text-gray-800 dark:text-gray-200">
                       A menudo pasamos funciones como <code class="bg-gray-100 dark:bg-gray-800 !px-1 !py-0.5 rounded text-sm">onChange={handleClick}</code> hacia componentes Hijos grandes. Si tu componente hijo está optimizado con <code>React.memo</code>, este se romperá si envías funciones regulares porque, para JavaScript, cada nueva función en memoria es distinta. Para retener la identidad de la función, las englobas en un generoso bloque <code>useCallback</code>.
                    </p>
                </div>
            </div>
            
            <p class="text-[15px] dark:text-white text-justify mt-5">
              ¡Entendiendo el modelo mental en el que se basa esto, dominarás cualquier proyecto Frontend con confianza brutal!
            </p>
        `
    },
    {
        id: "2",
        title: "Arquitectura limpia orientada a dominio en Node.js",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name", isReturn: false }),
        author: "Gianpierre",
        description: "Descubre cómo estructurar proyectos backend robustos, modulares y escalables separando rigurosamente las capas físicas de Controladores y Repositorios.",
        date: "2023-11-02",
        content: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  Separación de
                </span>
                <span class="font-acorn dark:text-white">Responsabilidades</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[15px] dark:text-white text-justify">
                  Programar en un solo gran monolito sobre <code>Express.js</code> y <code>Mongoose / TypeORM</code> es tentador cuando el proyecto es enano. ¿Pero qué pasa al llegar a las 100 tablas en DB? Mantener un backend escalable requiere separar categóricamente nuestra lógica.
                </p>
            </div>
            
            <h3 class="text-xl uppercase mb-4 mt-6">
                <span class="font-acorn dark:text-white">
                Construcción de Capas (N-Layers)
                </span>
            </h3>

            <ul class="flex flex-col gap-4 list-disc pl-5 mb-8">
                <li class="text-[15px] dark:text-white">
                    <strong class="text-emerald-700 dark:text-emerald-400">Controllers (Capa de Presentación):</strong> 
                    Reciben el Body (la petición HTTP), leen el parámetro de url y delegan el trabajo sucio. Jamás tocan la base de datos de manera directa.
                </li>
                <li class="text-[15px] dark:text-white">
                    <strong class="text-emerald-700 dark:text-emerald-400">Services (Capa de Negocio):</strong> 
                    El corazón de la empresa. Algoritmos, cobros de tarjeta, condiciones "if" pesadas sobre lo que puede tener o no un cliente VIP.
                </li>
                <li class="text-[15px] dark:text-white">
                    <strong class="text-emerald-700 dark:text-emerald-400">Repositories (Capa de Acceso a Datos):</strong> 
                    Comandos de SQL, inyecciones de queries crudos. Este componente no sabe para qué sirve lo que lee, solo lo lee. Si un día tu empresa migra de MySQL a PostgreSQL, solo debes modificar tu carpeta Repositories sin miedo a malograr lógica de mercado.
                </li>
            </ul>

            <h2 class="text-2xl uppercase mb-3 mt-4">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  Inyección de
                </span>
                <span class="font-acorn dark:text-white">Dependencias</span>
            </h2>
            <p class="text-[15px] dark:text-white text-justify mb-5">
                Pasar dependencias por el constructor permite hacer Unit Testing purista, inyectando la información estática. Patrones de gran utilidad para equipos medianos y grandes que trabajan bajo el paradigma de TypeScript y un riguroso nivel de cobertura de pruebas y linter automatizado.
            </p>
        `
    },
    {
        id: "3",
        title: "El Poder de PostGIS: Análisis Geoespacial Avanzado",
        image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=800&auto=format&fit=crop",
        category: findValue({ array: category, key: "id", value: 3, returnkey: "name", isReturn: false }),
        author: "Gianpierre",
        description: "PostGIS no es simplemente una base de datos más; es una suite completa capaz de descifrar problemas satelitales directamente de tu base de código PostgreSQL.",
        date: "2023-12-10",
        content: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  Introducción a
                </span>
                <span class="font-acorn dark:text-white">PostGIS</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[15px] dark:text-white text-justify">
                  El mundo agroindustrial actual se mueve por satélites y coordenadas cartográficas. No basta con almacenar <i>(latitud, longitud)</i> pasivamente; necesitamos saber si un punto está dentro de la parcela de arándanos número 40B, calculando itersecciones exactas y márgenes de error de forma automática. 
                </p>
                <p class="text-[15px] dark:text-white text-justify mt-3">
                  PostGIS hace a PostgreSQL capaz de devorar algoritmos matemáticos en tiempo récord con una amplia gama de funciones <code class="text-emerald-600">ST_</code> listas para ser usadas.
                </p>
            </div>
            
            <h2 class="text-2xl uppercase mb-3 mt-6">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  Geometría vs
                </span>
                <span class="font-acorn dark:text-white">Geografía</span>
            </h2>
            
            <p class="text-[15px] dark:text-white text-justify mb-5">
                Al inicializar datos en el mundo de los mapas te encontrarás con el famoso <strong>SRID 4326</strong>. Cuando usamos el tipo "Geometry", calculamos mediante coordenadas proyectadas directas, la tierra de pronto resulta plana. Si requieres extrema precisión espacial que calque la curvatura de la tierra entonces requerimos el casteo robusto a tipo "Geography" consumiendo así algo más de recursos de base de datos a cambio de un realismo increíble a nivel mundial.
            </p>
            
            <h3 class="text-[17px] font-bold dark:text-emerald-400 !mb-5 mt-4 mt-6">
                Funciones Destacadas para Agricultura:
            </h3>
            
            <ul class="flex flex-col gap-4 pl-0 list-none mb-8">
                <li class="bg-[#025a4e0a] dark:bg-[#ffffff10] rounded-2xl !p-4 flex flex-col gap-1 shadow-sm">
                    <strong class="text-emerald-700 dark:text-emerald-300 font-acorn text-lg">ST_Intersects</strong> 
                    <p class="text-[14px] text-gray-700 dark:text-gray-300">Crucial para validar si una plaga ha entrado al perímetro de un lote específico, permitiendo emitir alertas rápidas.</p>
                </li>
                <li class="bg-[#025a4e0a] dark:bg-[#ffffff10] rounded-2xl !p-4 flex flex-col gap-1 shadow-sm">
                    <strong class="text-emerald-700 dark:text-emerald-300 font-acorn text-lg">ST_Area y ST_Length</strong> 
                    <p class="text-[14px] text-gray-700 dark:text-gray-300">El pan de cada día: Calcula instantáneamente el hectareaje productivo en base a los puntos recolectados de un dron o archivo TIF.</p>
                </li>
                <li class="bg-[#025a4e0a] dark:bg-[#ffffff10] rounded-2xl !p-4 flex flex-col gap-1 shadow-sm">
                    <strong class="text-emerald-700 dark:text-emerald-300 font-acorn text-lg">ST_Buffer</strong> 
                    <p class="text-[14px] text-gray-700 dark:text-gray-300">Genera áreas de rango dinámicas para respetar zonas de exclusión o riachuelos ante maquinarias pesadas y toxinas en campos abiertos.</p>
                </li>
            </ul>
        `
    },
    {
        id: "4",
        title: "Gestores de Estado globales en React: Zustand vs Redux Toolkit",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name", isReturn: false }),
        author: "Gianpierre",
        description: "Un vistazo exhaustivo al ecosistema moderno de Manejo de Estados en React. ¿Aún es estrictamente necesario Redux hoy en día?",
        date: "2024-01-20",
        content: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  La evolución de
                </span>
                <span class="font-acorn dark:text-white">Redux</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[15px] dark:text-white text-justify">
                  Durante varios años, Redux fue el absoluto titán para mover un string desde la barra lateral hasta un mini-componente encapsulado en diez ramas inferiores sin morir por prop-drilling en el intento. Desafortunadamente, el fuerte boilerplate en <i>actions, reducers, store</i> alejó a muchos. <strong>Zustand</strong> entra al campo como su contracara, apostando por APIs ridículamente limpias con su filosofía del Hook.
                </p>
            </div>
            
            <h3 class="text-xl uppercase mb-4 mt-8">
                <span class="font-acorn dark:text-white">
                El Modelo Mental de Zustand
                </span>
            </h3>

            <p class="text-[15px] dark:text-white text-justify mb-5">
               Con Zustand, tu "Store" es un Custom Hook glorificado con esteroides; puedes accederlo de cualquier parte simplemente importándolo sin englobar toda tu app dentro de un Provider monolítico del App.tsx general.
            </p>

            <div class="!p-6 rounded-[2rem] bg-[#025a4e0a] dark:bg-[#b9ffee05] border border-gray-200 dark:border-[#b9ffee20] mb-8">
<pre class="overflow-auto bg-gray-900 text-gray-100 !p-4 rounded-xl text-sm leading-relaxed">
<code>import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))</code>
</pre>
            </div>

            <h2 class="text-2xl uppercase mb-3 mt-4">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  ¿Cuándo elegir
                </span>
                <span class="font-acorn dark:text-white">cuál?</span>
            </h2>
            <p class="text-[15px] dark:text-white text-justify mb-5">
                <strong>Redux Toolkit (RTK)</strong> incorporó APIs masivas que le dieron una segunda vida de enorme calidad para grandes aplicaciones empresariales junto a su RTK Query interconectado con cachés complejas estilo SWR y Axios. <br/><br/>
                Como mantra personal para las interfaces: Si el estado global de tu aplicación se reduce a cosas UI superficiales (Modal Abierto, Theme Oscuro, ID de Item Seleccionado), <strong class="text-emerald-600">Zustand</strong> brinda una DX (Experiencia del Desarrollador) magnífica. Si el proyecto mueve enormes lógicas de transacciones, dependencias en vivo, Websockets con caché en vivo, <strong class="text-emerald-600">RTK</strong> sigue siendo robusto.
            </p>
        `
    },
    {
        id: "5",
        title: "Interfaces Móviles Nativas con React Native y Expo Flexbox",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
        category: findValue({ array: category, key: "id", value: 2, returnkey: "name", isReturn: false }),
        author: "Gianpierre",
        description: "¿Es posible crear interfaces que se sientan verdaderamente nativas sin aprender Swift ni Kotlin? Una inmersión al ecosistema actual de Expo y RN.",
        date: "2024-03-05",
        content: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  Desmitificando el
                </span>
                <span class="font-acorn dark:text-white">rendimiento Híbrido</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[15px] dark:text-white text-justify">
                  El diseño del lado del móvil siempre intimida. Históricamente existieron problemas de latencia al invocar eventos pesados asíncronos en aplicaciones compiladas híbridas. Hoy, la nueva arquitectura sin puente (Bridge) y el compilado de JS Turbo de <strong>React Native</strong> acercan dramáticamente la reactividad de Javascript al código objeto nativo de los celulares iOS y Android de manera simultánea usando estilos base como flexbox.
                </p>
            </div>
            
            <h3 class="text-xl uppercase mb-4 mt-8">
                <span class="font-acorn dark:text-white">
                Flexbox y Reanimated
                </span>
            </h3>

            <p class="text-[15px] dark:text-white text-justify mb-5">
                RN traduce las hojas CSS y sus lógicas al "Macho CSS" nativo. Aunque se pierde Float y Position: absoluto de PC, el soporte de <strong>Flexbox</strong> es maravilloso y te hace sentir en casa. Por otra parte, para que las animaciones de un Modal o Deslizamientos no bloqueen o provoquen stuttering, delegamos a librerías maduras como <code class="bg-[#b9ffee20] px-1 rounded">React Native Reanimated</code>, que mandan el bucle de render por completo a un Hilo Nativo separado (UI Thread), ajeno a si JS está procesando alguna respuesta larga o costosa. ¡Una de cal y una de arena!
            </p>

            <h2 class="text-2xl uppercase mb-3 mt-6">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  El Renacer
                </span>
                <span class="font-acorn dark:text-white">con Expo</span>
            </h2>
            <p class="text-[15px] dark:text-white text-justify mb-5">
                Construir perfiles binarios (APKs y pasarlos por XCode) ya es cosa del pasado doloroso que muchos padecieron hace años. El framework <strong>Expo</strong> hoy automatiza e inyecta dependencias nativas a la nube, enviándote un hermoso QR para tu Expo-Go en tiempo récord y logrando despliegues continuos envidiables (Over The Air Updates - EAS) sin obligar a tus usuarios a bajar nuevas descargas pesadas desde la Google Play o el iOS AppStore a cada parche menor. Es magia pura para Startups ágiles.
            </p>
        `
    },
    {
        id: "6",
        title: "La Revolución de la IA y los Agentes en el Desarrollo de Software",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
        category: findValue({ array: category, key: "id", value: 1, returnkey: "name", isReturn: false }),
        author: "Gianpierre",
        description: "Cómo los Large Language Models y los agentes autónomos de Inteligencia Artificial están transformando drásticamente el flujo de trabajo de programación.",
        date: "2024-04-12",
        content: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-indigo-500">
                  El Nuevo Paradigma
                </span>
                <span class="font-acorn dark:text-white">de Programación</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[15px] dark:text-white text-justify">
                  Hasta hace poco, el flujo de desarrollo consistía en leer interminables páginas de documentación o navegar foros en Stack Overflow buscando una solución específica a un problema oscuro. Hoy en día, la Inteligencia Artificial (IA) generativa y los <b>Large Language Models (LLMs)</b> han introducido una era donde el conocimiento se sintetiza bajo demanda. Modelos como <code class="text-indigo-600 dark:text-indigo-400">GPT-4, Claude 3 y Gemini 1.5 Pro</code> entienden repositorios enteros en segundos y devuelven código casi listo para producción.
                </p>
            </div>
            
            <h3 class="text-xl uppercase mb-4 mt-8">
                <span class="font-acorn dark:text-white">
                De Asistentes a Agentes Autónomos
                </span>
            </h3>

            <p class="text-[15px] dark:text-white text-justify mb-5">
               Un asistente tipo chatbot es excelente para generar "boilerplate" (plantillas), pero el verdadero punto de inflexión son los <strong>Agentes de Desarrollo</strong>. A diferencia del chat pasivo, un Agente tiene la directiva y <i>las herramientas</i> para analizar, estructurar un plan de acción, iterar por cuenta propia en la consola (bash) de tu terminal e incluso ejecutar y pasar pruebas unitarias. Analiza el error, lo entiende, propone un parche, lo reescribe, lo compila y finalmente te presenta el <i>commit</i> terminado. Esto no reemplaza al Ingeniero de Software, sino que lo eleva a un rol gerencial de <strong class="text-purple-600 dark:text-purple-400">Arquitecto y Director de Orquesta</strong>.
            </p>

            <div class="p-6 rounded-[2rem] bg-gray-50 dark:bg-[#b9ffee05] border border-gray-200 dark:border-[#b9ffee20] mb-8 relative overflow-hidden">
                <div class="absolute w-1 h-full bg-indigo-500 left-0 top-0"></div>
                <h4 class="text-[16px] text-gray-800 dark:text-gray-200 font-bold mb-4">
                    Beneficios inmediatos en equipos de trabajo:
                </h4>
                <ul class="flex flex-col gap-3 list-none pl-0">
                  <li class="text-[14px] text-gray-700 dark:text-gray-300">
                    📉 <b>Reducción de Deuda Técnica:</b> Los agentes pueden escanear sistemáticamente todo el código buscando y eliminando variables no utilizadas, optimizando tipos de TypeScript sueltos y actualizando librerías deprecadas pacientemente.
                  </li>
                  <li class="text-[14px] text-gray-700 dark:text-gray-300">
                    ⚡ <b>Prototipado ultrarrápido:</b> Levantar contenedores Docker, bases de datos o middlewares para pruebas de concepto tardaban días; hoy un agente puede orquestar la infraestructura casi sin fricción.
                  </li>
                  <li class="text-[14px] text-gray-700 dark:text-gray-300">
                    📖 <b>Documentación Viva:</b> A casi nadie le entusiasma redactar un largo <code>README.md</code>, pero los agentes pueden leer arquitecturas complejas y generar la documentación en markdown sobre la marcha analizando el AST del código vivo.
                  </li>
                </ul>
            </div>

            <p class="text-[15px] dark:text-white text-justify mt-5">
              Acoplar estas herramientas al flujo de CI/CD dejará de ser opcional a mediano plazo. Las empresas y los ingenieros más rápidos e innovadores serán aquellos que logren una sinergia fluida delegando el trabajo repetitivo a sus agentes algorítmicos.
            </p>
        `
    },
    {
        id: "7",
        title: "Analizando Imágenes Satelitales con Vue, Python y GDAL",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        category: findValue({ array: category, key: "id", value: 3, returnkey: "name", isReturn: false }),
        author: "Gianpierre",
        description: "Aprende cómo procesar imágenes satelitales en el backend para calcular índices como NDVI, GCI o NDMI usando GDAL y Python, presentándolos visualmente con Vue.",
        date: "2024-05-20",
        content: `
            <h2 class="text-3xl uppercase mb-3">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  Análisis Geoespacial
                </span>
                <span class="font-acorn dark:text-white">con GDAL y Python</span>
            </h2>

            <div class="flex flex-col mb-5">
                <p class="text-[15px] dark:text-white text-justify">
                  El análisis de imágenes satelitales nos permite calcular índices vegetativos cruciales como NDVI (Índice de Vegetación de Diferencia Normalizada), GCI, NDMI, FCI, entre otros. Al combinar un frontend interactivo en <strong>Vue.js</strong> con un backend algorítmico en <strong>Python</strong> apoyado en la poderosa librería <strong>GDAL</strong>, logramos orquestar plataformas donde procesamos pesados datos rasterizados, detectamos clasificaciones en los lotes agrícolas y terminamos dibujándolos en mapas vectoriales sobre el navegador.
                </p>
            </div>

            <div class="!p-6 rounded-[2rem] bg-[#025a4e0a] dark:bg-[#b9ffee0a] border border-[#025a4e20] dark:border-[#b9ffee20] mb-8 mt-4 relative overflow-hidden">
                <div class="absolute w-1 h-full bg-emerald-500 left-0 top-0"></div>
                <p class="text-sm md:text-[15px] text-gray-700 dark:text-gray-300 italic mb-0">
                  "Las imágenes satelitales (TIF) son matrices numéricas. GDAL nos brinda funciones de C++ empaquetadas en Python, permitiéndonos leer cada bit de información a nivel de píxel, clasificar áreas, limpiar ruido y crear polígonos OGR exactos."
                </p>
            </div>

            <h2 class="text-2xl uppercase mb-4 mt-6">
                <span class="font-acorn bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-sky-500">
                  Transformación
                </span>
                <span class="font-acorn dark:text-white">
                Raster a Vector (Polygonize)
                </span>
            </h2>

            <p class="text-[15px] dark:text-white text-justify mb-5">
                Una vez nuestro algoritmo extrae los valores numéricos correspondientes al ensayo dentro del polígono del cliente, procedemos a determinar "quiebres naturales" con métodos estadísticos <em>(Natural Breaks / Jenks)</em> para agrupar las condiciones del cultivo en diferentes niveles. Luego, construimos un raster temporal en memoria y lo poligonizamos como geometrías útiles para base relacional (PostGIS).
            </p>

            <div class="!p-6 rounded-[2rem] bg-[#000000] dark:bg-[#1a1a1a] shadow-xl border border-gray-800 mb-8">
<pre class="overflow-x-auto text-[#f8f8f2] text-sm leading-relaxed p-2">
<code class="language-python"># Fragmento clave para la poligonización y cálculo
import gdal
import ogr
import mapclassify

def generateIndexTrial(outDs, arrayIndex, mappings, indexId, currentDate, jobId):
    # [...] Lógica de máscaras, validación y recorte matricial
    
    # 1. Determinamos los Natural Breaks estadísticamente
    jenks = mapclassify.NaturalBreaks(vals, k=kEff)
    breaks = jenks.bins
    classArr = classifyArrayByBreaks(arrTrial, breaks)
    
    # 2. Generamos el raster clasificado en Memoria
    drvMemR = gdal.GetDriverByName("MEM")
    srcDs = drvMemR.Create("", cols, rows, 1, gdal.GDT_Byte)
    band = srcDs.GetRasterBand(1)
    band.WriteArray(classCrop)
    
    # 3. Creamos una capa vectorial virtual para guardar la salida
    drvVec = ogr.GetDriverByName("Memory")
    memDs = drvVec.CreateDataSource("")
    layer = memDs.CreateLayer("clases", srs=srs, geom_type=ogr.wkbPolygon)
    layer.CreateField(ogr.FieldDefn("level", ogr.OFTInteger))
    idxLevel = layer.GetLayerDefn().GetFieldIndex("level")
    
    # 4. Magia Pura: Convertimos nuestra matriz rasterizada a geometrías poligonales
    gdal.Polygonize(band, band.GetMaskBand(), layer, idxLevel, [])
    
    # Posteriormente agrupamos, unificamos con UnionCascaded y registramos en la DB
    return { "is_error": False, "rows_saved": len(summaryToJSON), "bbox": bbox }
</code>
</pre>
            </div>

            <h3 class="text-xl uppercase mb-4 mt-8">
                <span class="font-acorn dark:text-white">
                El Rol de Vue.js en el Cliente
                </span>
            </h3>

            <p class="text-[15px] dark:text-white text-justify mb-5">
                Luego de realizar el cálculo pesado asíncrono en Python, mandamos los multipolígonos resultantes a través de la API REST hacia el panel de cliente. Aquí es donde brilla <strong>Vue.js</strong> consumiendo el resultado junto con un visor cartográfico (como <em>Mapbox GL JS</em> o <em>Leaflet</em>). Convertimos los objetos WKT a GeoJSON nativos y pintamos colores diferenciadores dependiendo si un área presenta buen vigor vegetativo (verde oscuro) o pánico por sequía (rojo/amarillo intenso). Así completamos el ciclo: del satélite a los ojos del agricultor, en segundos.
            </p>
        `
    }
];
