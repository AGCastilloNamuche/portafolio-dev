import { Tabs } from "../../components";

const Project = () => {
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

      <div className="grid grid-cols-[1fr_min(65ch,100%)_1fr] ">
        <div className="col-2 ">
          <Tabs
            tabListClassName="bg-[#ffffff4f] border border-[#aeabab59] gap-2 rounded-[2rem] backdrop-blur-[200px] border border-[#FFFFFF0F] !px-2 !py-2"
            variant="pills"
            tabs={[
              {
                label: "Todo",
                id: "all",
                content: (
                  <div>
                    <h1>Todo</h1>
                  </div>
                ),
              },
              {
                label: "Desarrollo Web",
                id: "web-development",
                content: (
                  <div>
                    <h1>Desarrollo Web</h1>
                  </div>
                ),
              },
              {
                label: "Desarrollo Movil",
                id: "mobile-development",
                content: (
                  <div>
                    <h1>Desarrollo Movil</h1>
                  </div>
                ),
              },
              {
                label: "Analisis de datos",
                id: "data-analysis",
                content: (
                  <div>
                    <h1>Analisis de datos</h1>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
