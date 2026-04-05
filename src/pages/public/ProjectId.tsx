import { useParams } from "react-router";
import { projects } from "../../lib/db/projects";
import { IconX } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../../layouts/ThemeContext";
import { Breadcrumbs } from "../../components";
import { useTranslation } from "react-i18next";
import { normalizeLanguage } from "../../lib/localization";

const ProjectId = () => {
  const { id } = useParams();
  const { isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const project = projects.find((p) => p.id === id);
  const projectTitle = project
    ? t(`projects.${project.id}.title`, { defaultValue: project.title })
    : "";
  const isSpanish = normalizeLanguage(i18n.resolvedLanguage) === "es";

  // ESTADO PARA EL LIGHTBOX
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Función para cerrar el lightbox
  const closeLightbox = () => setSelectedImage(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);
  return (
    <div className="w-full h-full">
      <div className="block mx-auto max-w-6xl m-auto text-center w-full container-title !mb-0 px-4 md:px-0">
        <h1 className="mb-5 sm:!text-8xl uppercase">{projectTitle}</h1>
        <div className="grid grid-cols-[1fr_min(65ch,100%)_1fr]">
          <div className="col-2 text-center">
            <Breadcrumbs
              items={[
                { label: t("projectDetail.breadcrumb"), href: "/projects" },
                { label: projectTitle },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto px-3">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 md:col-span-4 md:sticky md:top-24 md:self-start">
            <div className="card overflow-hidden p-0  w-full !shadow-none !bg-[#ffffff44] backdrop: dark:!bg-[#23383144] dark:backdrop-blur-[20px] dark:backdrop-saturate-[1.7] mb-8">
              <div className="!p-3">
                <h3 className="text-1xl dark:text-white font-bold uppercase">
                  {t("projectDetail.infoTitle")}
                </h3>
              </div>
              <div className="border-b-1 border-[#ffffff4a]"></div>
              <div className="!p-[20px] d-flex flex-col">
                <div className="flex flex-col">
                  <ul>
                    <li className="!pb-[calc(40px/2)]">
                      <div className="flex items-center gap-8">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors">
                          {t("projectDetail.categoryLabel")}:
                        </span>
                        <span className="text-sm dark:text-white">
                          {project
                            ? t(`categories.${project.category.key}`)
                            : ""}
                        </span>
                      </div>
                    </li>

                    <li className="!pb-[calc(40px/2)] !pt-[calc(40px/2)] ">
                      <div className="flex items-center gap-15">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors">
                          {t("projectDetail.clientLabel")}:
                        </span>
                        <span className="text-sm flex items-center gap-2 dark:text-white">
                          <div className="flex items-center justify-center size-9 !p-1 bg-[#ffffffc1] dark:bg-[#233831b3] rounded-full company-icon">
                            {project?.client.isImg ? (
                              <img
                                src={project?.client.img}
                                alt="logo-client"
                              />
                            ) : (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: project?.client.img ?? "",
                                }}
                              ></div>
                            )}
                          </div>
                          {project?.client.name}
                        </span>
                      </div>
                    </li>
                    <li className="!pb-[calc(40px/2)] !pt-[calc(40px/2)]">
                      <div className="flex items-center gap-16">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors">
                          {t("projectDetail.dateLabel")}:
                        </span>
                        <span className="text-sm dark:text-white">
                          {dayjs(project?.date).format(t("formats.longDate"))}
                        </span>
                      </div>
                    </li>
                    <li className="!pb-[calc(40px/2)] !pt-[calc(40px/2)]">
                      <div className="flex items-center gap-20">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors">
                          {t("projectDetail.roleLabel")}:
                        </span>
                        <span className="text-sm line-clamp-1 dark:text-white">
                          {project?.role}
                        </span>
                      </div>
                    </li>

                    <li className="!pt-[calc(40px/2)]">
                      <div className="flex items-center gap-20">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors">
                          {t("projectDetail.urlLabel")}:
                        </span>
                        <span className="text-sm line-clamp-1 dark:text-white">
                          <a
                            href={project?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dark:!text-white"
                          >
                            {project?.link}
                          </a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden p-0 w-full !shadow-none !bg-[#ffffff44] backdrop: dark:!bg-[#23383144] dark:backdrop-blur-[20px] dark:backdrop-saturate-[1.7]">
              <div className="!p-3">
                <h3 className="text-1xl dark:text-white font-bold uppercase">
                  {t("projectDetail.techTitle")}
                </h3>
              </div>
              <div className="border-b-1 border-[#ffffff90]"></div>
              <div className="!p-[20px] d-flex flex-col">
                <div className="flex flex-col">
                  <ul>
                    <li className="!pb-[calc(40px/2)]">
                      <div className="flex flex-col gap-2">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors">
                          {t("projectDetail.frontendLabel")}:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {project?.frontend.map((item) => (
                            <div
                              key={item.id}
                              className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] dark:bg-[#b9ffed1e] !px-3 !py-1"
                            >
                              <item.icon
                                stroke={2}
                                color={isDark ? "#b9ffee" : "#025a4e"}
                                size={18}
                              />
                              <span className="text-xs font-bold text-[#025a4e] dark:text-[#b9ffee]">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li className="!pb-[calc(40px/2)] !pt-[calc(40px/2)]">
                      <div className="flex flex-col gap-2">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors">
                          {t("projectDetail.backendLabel")}:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {project?.backend.map((item) => (
                            <div
                              key={item.id}
                              className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] dark:bg-[#b9ffed1e] !px-3 !py-1"
                            >
                              <item.icon
                                stroke={2}
                                color={isDark ? "#b9ffee" : "#025a4e"}
                                size={18}
                              />
                              <span className="text-xs font-bold text-[#025a4e] dark:text-[#b9ffee]">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li className="!pb-[calc(40px/2)] !pt-[calc(40px/2)]">
                      <div className="flex flex-col gap-2">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors">
                          {t("projectDetail.databaseLabel")}:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {project?.db.map((item) => (
                            <div
                              key={item.id}
                              className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] dark:bg-[#b9ffed1e] !px-3 !py-1"
                            >
                              <item.icon
                                stroke={2}
                                color={isDark ? "#b9ffee" : "#025a4e"}
                                size={18}
                              />
                              <span className="text-xs font-bold text-[#025a4e] dark:text-[#b9ffee]">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>

                    <li className="!pt-[calc(40px/2)]">
                      <div className="flex flex-col gap-2">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors">
                          {t("projectDetail.infrastructureLabel")}:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {project?.infraestructura.map((item) => (
                            <div
                              key={item.id}
                              className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] dark:bg-[#b9ffed1e] !px-3 !py-1"
                            >
                              <item.icon
                                stroke={2}
                                color={isDark ? "#b9ffee" : "#025a4e"}
                                size={18}
                              />
                              <span className="text-xs font-bold text-[#025a4e] dark:text-[#b9ffee]">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-8">
            <div className="card p-0 overflow-hidden !rounded-[3rem] !bg-transparent !shadow-none mb-8">
              <img
                src={project?.images[0]}
                alt={projectTitle}
                className="w-full object-cover transition-all duration-300 transform scale-[1.02]"
              />
            </div>

            {!isSpanish && project?.acerca_de ? (
              <div className="mb-6 rounded-3xl border border-[#025a4e20] bg-[#025a4e0a] dark:border-[#b9ffee20] dark:bg-[#b9ffee0a] !px-5 !py-4">
                <p className="dark:text-white text-sm">
                  {t("projectDetail.originalContentNotice")}
                </p>
              </div>
            ) : null}

            <div
              className="flex flex-col"
              dangerouslySetInnerHTML={{ __html: project?.acerca_de ?? "" }}
            ></div>

            {/* GALERÍA DE IMÁGENES */}
            {project?.images && project.images.length > 1 && (
              <div className="mt-8">
                <h2 className="text-2xl uppercase mb-6 font-bold">
                  <span className="font-acorn bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                    {t("projectDetail.galleryPrefix")}
                  </span>{" "}
                  <span className="font-acorn dark:text-white">
                    {t("projectDetail.gallerySuffix")}
                  </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.slice(1).map((imgUrl, index) => (
                    <div
                      key={index}
                      className="rounded-2xl cursor-pointer overflow-hidden border border-[#FFFFFF0F] group"
                      onClick={() => setSelectedImage(imgUrl)}
                    >
                      <img
                        src={imgUrl}
                        alt={t("projectDetail.screenshotAlt", {
                          index: index + 1,
                          title: projectTitle,
                        })}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* COMPONENTE LIGHTBOX */}
      {selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-emerald-400 z-[100000] bg-white/10 hover:bg-white/20 rounded-full !p-2 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label={t("projectDetail.closeExpandedView")}
            >
              <IconX size={18} stroke={2} />
            </button>

            {/* CONTENEDOR */}
            <div
              className="
          w-full max-w-[1100px]
          max-h-[92vh]
          flex flex-col gap-0
        "
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGEN PRINCIPAL (responsiva) */}
              <div
                className="
            relative w-full
            rounded-xl overflow-hidden
            flex flex-col items-end justify-center
            h-[60vh] sm:h-[68vh] md:h-[72vh]
          "
              >
                <img
                  src={selectedImage}
                  alt={t("projectDetail.expandedViewAlt")}
                  className="w-full h-full !rounded-[2rem] object-contain"
                  draggable={false}
                />
                <span className="absolute bottom-5 right-5 text-white text-end text-sm">
                  {(project?.images || []).indexOf(selectedImage) + 1} /{" "}
                  {project?.images?.length}
                </span>
                <div className="absolute bottom-5 left-[50%] translate-x-[-50%] flex gap-2">
                  {project?.images?.map((imgUrl) => {
                    const active = selectedImage === imgUrl;
                    return (
                      <button
                        key={imgUrl}
                        className={`border-1 shadow-lg cursor-pointer border-white w-[10px] h-[10px] rounded-full ${active ? "bg-white" : "bg-transparent"}`}
                        onClick={() => setSelectedImage(imgUrl)}
                      ></button>
                    );
                  })}
                </div>
              </div>

              {/* THUMBNAILS (scroll horizontal responsivo) */}
              <div className="w-full">
                <div
                  className="
              flex gap-2 sm:gap-3
              overflow-x-auto
              pb-2
              snap-x snap-mandatory
              [-webkit-overflow-scrolling:touch]
            "
                >
                  {project?.images?.map((imgUrl, index) => {
                    const active = selectedImage === imgUrl;
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedImage(imgUrl)}
                        className={`
                    snap-start shrink-0
                    rounded-lg overflow-hidden
                    border-[1.5px] cursor-pointer transition-all
                    ${active ? "border-emerald-400 ring-2 ring-emerald-400/30" : "border-white/10 hover:border-white/30"}
                    w-[84px] h-[56px]
                    sm:w-[110px] sm:h-[72px]
                    md:w-[130px] md:h-[86px]
                  `}
                        aria-label={t("projectDetail.viewImage", {
                          index: index + 1,
                        })}
                      >
                        <img
                          src={imgUrl}
                          alt={t("projectDetail.thumbnailAlt", {
                            index: index + 1,
                          })}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          draggable={false}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default ProjectId;
