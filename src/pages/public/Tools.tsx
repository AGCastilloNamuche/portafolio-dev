import { LiveEditor, UniverseSkills } from "../../components";
import { useTranslation } from "react-i18next";

const Tools = () => {
  const { t } = useTranslation();

  return (
    <div className="content">
      <div className="block m-auto text-center w-full container-title pb-10">
        <h1 className="letter-spacing-1 font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
          {t("tools.title")}
        </h1>
        <div className="grid grid-cols-[1fr_min(65ch,100%)_1fr] text-center px-4">
          <div className="col-2 text-center">
            <p className="subtitle text-center mx-auto max-w-xl text-gray-600">
              {t("tools.subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 mb-10">
        <div className="flex flex-col">
          <h2 className="text-h2 text-[#025a4e] dark:text-[#b9ffee] !space-x-2 leading-13">
            {t("tools.editorTitle")}{" "}
            <span className="font-light text-gray-500 dark:text-white">
              {t("tools.editorHighlight")}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("tools.editorDescription")}
          </p>
        </div>
        <div className="editor-wrapper">
          <LiveEditor />
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-20">
        <div className="flex flex-col">
          <h2 className="text-h2 text-[#025a4e] dark:text-[#b9ffee] leading-tight">
            {t("tools.stackTitle")}{" "}
            <span className="font-light text-gray-500 dark:text-white">
              {t("tools.stackHighlight")}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            {t("tools.stackDescription")}
          </p>
        </div>
        <UniverseSkills />
      </div>
    </div>
  );
};

export default Tools;
