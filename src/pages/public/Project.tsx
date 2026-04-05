import React, { useMemo } from "react";
import { Tabs } from "../../components";
import { category } from "../../lib/db/category";
import { projects } from "../../lib/db/projects";
import { useTranslation } from "react-i18next";

// ===== pre-index fuera del componente (se calcula 1 vez por carga del módulo) =====
type ProjectType = (typeof projects)[number];

const PROJECTS_BY_KEY: Record<string, ProjectType[]> = projects.reduce(
  (acc, pr) => {
    const k = pr.category.key;
    (acc[k] ??= []).push(pr);
    return acc;
  },
  {} as Record<string, ProjectType[]>,
);

const TAB_LIST_CLASS =
  "bg-[#ffffff4f] dark:bg-[#233831b3] border border-[#FFFFFF0F] gap-2 rounded-[2rem] backdrop-blur-[20px] !px-2 !py-2";

const ProjectGrid = React.memo(function ProjectGrid({
  items,
}: {
  items: ReadonlyArray<ProjectType>;
}) {
  const { t } = useTranslation();

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:!grid-cols-3">
      {items.map((pr) => {
        const projectTitle = t(`projects.${pr.id}.title`, {
          defaultValue: pr.title,
        });

        return (
          <a className="cursor-pointer" key={pr.id} href={`/projects/${pr.id}`}>
            <article>
              <div className="card p-0 !bg-transparent !shadow-none">
                <figure className="w-100 overflow-hidden rounded-3xl">
                  <img
                    className="object-cover rounded-3xl transition-all duration-300 transform hover:scale-[1.1]"
                    src={pr.images[0]}
                    alt={projectTitle}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <div className="card-body !px-4 !py-4">
                  <h2 className="card-title text-[#13765e] dark:text-[#b9ffee]">
                    {projectTitle}
                  </h2>
                  <p className="dark:text-white">
                    {t(`categories.${pr.category.key}`)}
                  </p>
                </div>
              </div>
            </article>
          </a>
        );
      })}
    </div>
  );
});

const Project = () => {
  const { t, i18n } = useTranslation();

  const tabs = useMemo(
    () => [
      {
        label: t("common.all"),
        id: "all",
        content: () => <ProjectGrid items={projects} />,
      },
      ...category.map((ct) => ({
        label: t(`categories.${ct.key}`),
        id: ct.key,
        content: () => <ProjectGrid items={PROJECTS_BY_KEY[ct.key] ?? []} />,
      })),
    ],
    [i18n.resolvedLanguage, t],
  );

  return (
    <div className="content">
      <div className="block m-auto text-center w-full container-title">
        <h1 className="mb-5">{t("projectsPage.title")}</h1>

        <div className="grid grid-cols-[1fr_min(65ch,100%)_1fr]">
          <div className="col-2 text-center">
            <p className="text-center subtitle">{t("projectsPage.subtitle")}</p>
          </div>
        </div>
      </div>

      <Tabs tabListClassName={TAB_LIST_CLASS} variant="pills" tabs={tabs} />
    </div>
  );
};

export default Project;
