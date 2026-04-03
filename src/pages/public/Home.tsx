import { Link } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import iconPc from "../../assets/images/computer-pc.svg??raw";
import iconUserExperience from "../../assets/images/user-experience.svg??raw";
import iconReact from "../../assets/images/react.svg??raw";
import iconVue from "../../assets/images/vue.svg??raw";
import iconPython from "../../assets/images/python.svg??raw";
import iconDart from "../../assets/images/dart.svg??raw";
import iconTs from "../../assets/images/ts.svg??raw";
import iconFlutter from "../../assets/images/flutter.svg??raw";
import iconCodingGear from "../../assets/images/coding-gear.svg??raw";
import iconDocs from "../../assets/images/card_docs_icon_02.svg??raw";
import iconDocs2 from "../../assets/images/card_docs_icon_03.svg??raw";
import iconBlog from "../../assets/images/card_figma_icon_01.svg??raw";
import iconBlog2 from "../../assets/images/card_figma_icon_02.svg??raw";
import dash from "../../assets/images/dash.svg??raw";
import website from "../../assets/animation/modules.lottie";
import devAgx from "../../assets/animation/dev_agx.lottie";
import blog from "../../assets/animation/website-development.lottie";
import { IconBulb, IconPalette } from "@tabler/icons-react";
import { EditWell } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import { companies } from "../../lib/db/company";
import { useTheme } from "../../layouts/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();
  return (
    <div className="content">
      <div className="d-block m-auto text-center w-100 container-title mb-15">
        <h1 className="position-relative">
          <span className="absolute bottom-2 left-0 hidden md:block">
            <IconBulb size={90} color={isDark ? "#ffff" : "#4c6763"} />
          </span>
          <span className="flex justify-center relative font-acorn">
            Hola. Soy
          </span>
          <span className="flex justify-center relative font-acorn">
            Gian Pierre
          </span>
          <span className="absolute top-0 right-0">
            <IconPalette
              className="hidden md:block"
              size={90}
              color={isDark ? "#ffff" : "#4c6763"}
            />
          </span>
        </h1>
        <div className="wrapper">
          <p className="text-center grid-column-2 subtitle">
            Ingeniero de sistemas y desarrollador full stack (web y móvil). Me
            apasiona crear experiencias atractivas, accesibles y centradas en el
            usuario.
          </p>
        </div>
      </div>
      {/* Container de información */}
      <div className="container-inf mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-1 space-y-6">
            <Link to="/skill">
              <div className="card border-radius-flat p-0 card-flat bg-mint card-link">
                <div className="card-flouris">
                  <div className="card-icon-svg">
                    <div className="d-flex align-center justify-space-between gap-4">
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconPc }}
                      ></div>
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconUserExperience }}
                      ></div>
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconCodingGear }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="card-header mb-5">
                  <h3 className="card-subtitle text-right">Trayectoria</h3>
                  <h2 className="card-title text-right">Mi Experiencia</h2>
                </div>
                <EditWell />
              </div>
            </Link>
          </div>

          <div className="lg:col-span-2 space-y-6 h-100">
            <div className="card border-radius-flat p-0 card-flat bg-pink card-link h-100">
              <Link to="/projects">
                <div className="card-flouris">
                  <div className="card-icon-svg">
                    <div className="d-flex align-center justify-space-between gap-4">
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconDocs }}
                      ></div>
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconDocs2 }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="card-header mb-5">
                  <h3 className="card-subtitle text-right">Mi portafolio</h3>
                  <h2 className="card-title text-right">Mis Proyectos</h2>
                </div>
                <div className="main-area-inner">
                  <div
                    className="img-inner"
                    dangerouslySetInnerHTML={{ __html: dash }}
                  ></div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Link to="/tools">
              <div className="card card-flat border-radius-flat p-0 bg-babyblue card-link">
                <div className="card-flouris">
                  <div className="card-icon-svg">
                    <div className="d-flex align-center justify-space-between gap-4">
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconDart }}
                      ></div>
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconReact }}
                      ></div>
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconVue }}
                      ></div>
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconTs }}
                      ></div>
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconFlutter }}
                      ></div>
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconPython }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="card-header mb-5">
                  <h3 className="card-subtitle text-right">Herramientas</h3>
                  <h2 className="card-title text-right">
                    Diseñar y desarrollar
                  </h2>
                </div>
                <div className="d-flex">
                  <DotLottieReact
                    width={500}
                    height={500}
                    src={website}
                    loop
                    autoplay
                  />
                  <DotLottieReact
                    width={500}
                    height={500}
                    src={devAgx}
                    loop
                    autoplay
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="card card-flat border-radius-flat p-0 bg-rust card-link h-100">
              <Link to="/blog">
                <div className="card-flouris">
                  <div className="card-icon-svg">
                    <div className="d-flex align-center justify-space-between gap-4">
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconBlog }}
                      ></div>
                      <div
                        className="icon-svg"
                        dangerouslySetInnerHTML={{ __html: iconBlog2 }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="card-header mb-5">
                  <h3 className="card-subtitle text-right">Blog</h3>
                  <h2 className="card-title text-right">Artículos</h2>
                </div>
                <div className="d-flex align-center justify-center ">
                  <DotLottieReact
                    src={blog}
                    width={500}
                    height={500}
                    loop
                    autoplay
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Flujo de trabajo */}
      <div className="container-workflow mb-10">
        <h2 className="text-center text-h1 dark:text-[#b9ffee] line-height-1">
          Flujo de trabajo
        </h2>
        <div className="wrapper mb-15">
          <p className="text-center grid-column-2 subtitle">
            Desarrollador full-stack. Creo experiencias atractivas, accesibles y
            centradas en el usuario. Con pasión por la creatividad y un ojo
            meticuloso para los detalles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="card !rounded-[64px] !px-7 !py-7 card-wrap card-flat card-link bg-dark-white30">
            <h1 className="count text-right text-green-300">01</h1>
            <h3 className="card-subtitle text-right">
              Requisitos con el usuario
            </h3>
            <h2 className="card-title text-right mb-2">Planificación</h2>

            <p className="text-justify">
              Alineamos objetivos y alcance mediante entrevistas breves e
              investigación, definiendo requisitos y criterios de éxito.
            </p>
          </div>

          <div className="card card-wrap !rounded-[64px] !px-7 !py-7 card-flat card-link bg-white30">
            <h1 className="count text-right text-green-300">02</h1>
            <h3 className="card-subtitle text-right">UI/UX + ARQUITECTURA</h3>
            <h2 className="card-title text-right mb-2">Diseño</h2>

            <p className="text-justify">
              Transformo los requisitos en interfaces claras y una arquitectura
              sólida antes de empezar a construir.
            </p>
          </div>

          <div className="card card-wrap !rounded-[64px] !px-7 !py-7 card-flat card-link bg-rust30">
            <h1 className="count text-right text-green-300">03</h1>
            <h3 className="card-subtitle text-right">
              IMPLEMENTACIÓN FULL-STACK
            </h3>
            <h2 className="card-title text-right mb-2">Desarrollo</h2>

            <p className="text-justify">
              Construyo de punta a punta: front-end, APIs, base de datos e
              integraciones, con entregas iterativas.
            </p>
          </div>

          <div className="card card-wrap !rounded-[64px] !px-7 !py-7 card-flat card-link bg-pink30">
            <h1 className="count text-right text-green-300">04</h1>
            <h3 className="card-subtitle text-right">QA + VALIDACIÓN</h3>
            <h2 className="card-title text-right mb-2">Pruebas</h2>

            <p className="text-justify">
              Pruebo calidad, rendimiento y seguridad, corrigiendo errores y
              validando con escenarios reales.
            </p>
          </div>

          <div className="card card-wrap !rounded-[64px] !px-7 !py-7 card-flat card-link bg-babyblue30">
            <h1 className="count text-right text-green-300">05</h1>
            <h3 className="card-subtitle text-right">LANZAMIENTO + SOPORTE</h3>
            <h2 className="card-title text-right mb-2">Entrega</h2>

            <p className="text-justify">
              Despliego el producto, documento lo esencial y doy soporte con
              mejoras continuas según feedback.
            </p>
          </div>

          <div className="card card-wrap !rounded-[64px] !px-7 !py-7  card-flat card-link bg-dark-white50">
            <h1 className="count text-right text-green-300">06</h1>
            <h3 className="card-subtitle text-right">PROTOTIPADO + MVP</h3>
            <h2 className="card-title text-right mb-2">Iteración</h2>

            <p className="text-justify">
              Creo prototipos y un MVP para validar rápido, ajustar con feedback
              y priorizar lo que más impacta.
            </p>
          </div>
        </div>
      </div>
      {/* Colaboración */}
      <div className="container-business">
        <h2 className="text-center text-h1 dark:text-[#b9ffee] line-height-1">
          Colaboraciones
        </h2>
        <div className="wrapper mb-15">
          <p className="text-center grid-column-2 subtitle">
            He trabajado con empresas increíbles, creando soluciones digitales
            para web y móvil.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            modules={[Autoplay, Grid]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {companies.map((company) => (
              <SwiperSlide>
                {company.isImg ? (
                  <div className="flex items-center gap-5">
                    <img src={company.img} alt={company.name} />
                  </div>
                ) : (
                  <div className="flex items-center gap-5">
                    <div
                      className="icon-slide"
                      dangerouslySetInnerHTML={{ __html: company.img }}
                    ></div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
