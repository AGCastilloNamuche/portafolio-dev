import { companies } from "../../lib/db/company";
import { workExperience } from "../../lib/db/type_experience";
import { experience, schedule } from "../../lib/db/experience";
import dayjs from "dayjs";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Skill = () => {
  const { t, i18n } = useTranslation();
  const localizedExperience = useMemo(
    () =>
      experience.map((exp) => ({
        ...exp,
        title: t(`skill.items.${exp.id}.title`, { defaultValue: exp.title }),
        description: t(`skill.items.${exp.id}.description`, {
          defaultValue: exp.description,
        }),
      })),
    [i18n.resolvedLanguage, t],
  );

  return (
    <div className="content">
      <div className="block m-auto text-center w-full container-title">
        <h1 className="letter-spacing-1">{t("skill.title")}</h1>
      </div>

      <div className="grid grid-cols-1 lg:place-items-start  lg:grid-cols-4 gap-5">
        <div className="flex flex-wrap  justify-center gap-8  lg:gap-5!">
          <div className="flex flex-col">
            <h3 className="text-lg text-[#025a4e] dark:text-[#b9ffee]">
              {t("skill.typeLabel")}
            </h3>
            <span className="dark:text-white">{t("skill.workType")}</span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg text-[#025a4e] dark:text-[#b9ffee]">
              {t("skill.scheduleLabel")}
            </h3>
            <span className="dark:text-white">{schedule()}</span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg text-[#025a4e] dark:text-[#b9ffee]">
              {t("skill.companiesLabel")}
            </h3>
            <span className="flex gap-3 dark:text-white">
              {companies.map((comp) => {
                if (comp.isImg) {
                  return (
                    <div
                      key={comp.id}
                      className="flex items-center justify-center size-8 rounded-full"
                    >
                      <img
                        className="w-full h-full object-contain"
                        src={comp.img}
                        alt="logo-microcash"
                      />
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={comp.id}
                      dangerouslySetInnerHTML={{ __html: comp.img }}
                      className="flex items-center justify-center size-8 rounded-full company-icon"
                    ></div>
                  );
                }
              })}
            </span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col gap-5">
            {localizedExperience
              .filter((exp) => exp.typeExperience === workExperience)
              .map((exp) => {
                return (
                  <div key={exp.id} className="card !bg-transparent card-flat">
                    <div className="grid grid-cols-5">
                      <div className="col-span-5 md:col-span-1 text-sm text-[#025a4e] dark:text-[#defdf5] uppercase mt-3">
                        {dayjs(exp.start_date).format(t("formats.monthYear"))} -{" "}
                        <span>
                          {" "}
                          {exp.is_active
                            ? t("skill.present")
                            : dayjs(exp.end_date).format(
                                t("formats.monthYear"),
                              )}{" "}
                        </span>
                      </div>
                      <div className="col-span-5 md:col-span-4">
                        <h3 className="text-lg text-[#025a4e] dark:text-[#b9ffee] leading-8">
                          {exp.title} - {exp.company}
                        </h3>
                        <p className="text-[14px] dark:text-white mb-3">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {exp.skills.map((s) => (
                            <div
                              key={s.id}
                              className="flex gap-1 items-center justify-center rounded-3xl bg-[#025a4e1c] dark:bg-[#b9ffed1e] !px-3 !py-1"
                            >
                              <s.icon stroke={2} color="#025a4e" size={18} />
                              <span className="text-xs font-bold text-[#025a4e] dark:text-[#b9ffee]">
                                {s.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
