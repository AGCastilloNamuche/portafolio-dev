import React, { useMemo } from "react";
import { Tabs } from "../../components";
import { category } from "../../lib/db/category";
import { projects, type Projects } from "../../lib/db/projects";

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
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:!grid-cols-3">
      {items.map((pr) => (
        <a className="cursor-pointer" key={pr.id} href={`projects/${pr.id}`}>
          <article>
            <div className="card p-0 !bg-transparent !shadow-none">
              <figure className="w-100 overflow-hidden rounded-3xl">
                <img
                  className="object-cover rounded-3xl transition-all duration-300 transform hover:scale-[1.1]"
                  src={pr.images[0]}
                  alt={pr.title}
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className="card-body !px-4 !py-4">
                <h2 className="card-title text-[#13765e] dark:text-[#b9ffee]">
                  {pr.title}
                </h2>
                <p className="dark:text-white">{pr.category.name}</p>
              </div>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
});

const Project = () => {
  const tabs = useMemo(
    () => [
      {
        label: "Todo",
        id: "all",
        content: () => <ProjectGrid items={projects} />,
      },
      ...category.map((ct) => ({
        label: ct.name,
        id: ct.key,
        content: () => <ProjectGrid items={PROJECTS_BY_KEY[ct.key] ?? []} />,
      })),
    ],
    [],
  );

  return (
    <div className="content">
      <div className="block m-auto text-center w-full container-title">
        <h1 className="mb-5">Proyectos</h1>

        <div className="grid grid-cols-[1fr_min(65ch,100%)_1fr]">
          <div className="col-2 text-center">
            <p className="text-center subtitle">
              Trabajos reales que muestran cómo convierto ideas en productos web
              y móviles listos para producción.
            </p>
          </div>
        </div>
      </div>

      <Tabs tabListClassName={TAB_LIST_CLASS} variant="pills" tabs={tabs} />
    </div>
  );
};

export default Project;
