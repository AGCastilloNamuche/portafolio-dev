import { useParams } from "react-router";
import { articles } from "../../lib/db/blog";
import dayjs from "dayjs";
import { Breadcrumbs } from "../../components";
import { useTranslation } from "react-i18next";
import { normalizeLanguage } from "../../lib/localization";

const BlogId = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const article = articles.find((a) => a.id === id);
  const articleTitle = article
    ? t(`articles.${article.id}.title`, { defaultValue: article.title })
    : "";
  const articleDescription = article
    ? t(`articles.${article.id}.description`, {
        defaultValue: article.description,
      })
    : "";
  const isSpanish = normalizeLanguage(i18n.resolvedLanguage) === "es";

  if (!article) {
    return (
      <div className="w-full h-full flex items-center justify-center p-10">
        <h1 className="text-4xl text-white">{t("blogDetail.notFound")}</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full pb-20">
      <div className="block mx-auto max-w-6xl m-auto text-center w-full container-title !mb-0 px-4 md:px-0">
        <h1 className="sm:!text-6xl lg:!text-8xl ">{articleTitle}</h1>
        <Breadcrumbs
          items={[
            { label: t("blogDetail.breadcrumb"), href: "/blog" },
            { label: articleTitle },
          ]}
        />
      </div>

      <div className="mx-auto px-3">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 md:col-span-4 md:sticky md:top-24 md:self-start">
            <div className="card overflow-hidden p-0 w-full !shadow-none !bg-[#ffffff44] backdrop: dark:!bg-[#23383144] dark:backdrop-blur-[20px] dark:backdrop-saturate-[1.7] mb-8">
              <div className="!p-3">
                <h3 className="text-1xl dark:text-white font-bold uppercase">
                  {t("blogDetail.detailsTitle")}
                </h3>
              </div>
              <div className="border-b-1 border-[#ffffff4a]"></div>
              <div className="!p-[20px] d-flex flex-col">
                <div className="flex flex-col">
                  <ul>
                    <li className="!pb-[calc(40px/2)]">
                      <div className="flex items-center gap-8">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors whitespace-nowrap">
                          {t("blogDetail.categoryLabel")}:
                        </span>
                        <span className="text-sm dark:text-white">
                          {t(`categories.${article.category.key}`)}
                        </span>
                      </div>
                    </li>

                    <li className="!pb-[calc(40px/2)] !pt-[calc(40px/2)] ">
                      <div className="flex items-center gap-8">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors whitespace-nowrap">
                          {t("blogDetail.authorLabel")}:
                        </span>
                        <span className="text-sm dark:text-white">
                          {article.author}
                        </span>
                      </div>
                    </li>
                    <li className="!pt-[calc(40px/2)]">
                      <div className="flex items-center gap-8">
                        <span className="text-[#306e5f] dark:text-[#b9ffee] text-sm uppercase font-[600] transition-colors whitespace-nowrap">
                          {t("blogDetail.publishedLabel")}:
                        </span>
                        <span className="text-sm dark:text-white">
                          {dayjs(article.date).format(t("formats.longDate"))}
                        </span>
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
                src={article.image}
                alt={articleTitle}
                className="w-full h-[400px] object-cover transition-all duration-300 transform scale-[1.02] rounded-[3rem]"
              />
            </div>

            {!isSpanish && (
              <div className="mb-6 rounded-3xl border border-[#025a4e20] bg-[#025a4e0a] dark:border-[#b9ffee20] dark:bg-[#b9ffee0a] !px-5 !py-4">
                <p className="dark:text-white text-sm">{t("blogDetail.originalContentNotice")}</p>
              </div>
            )}

            {!isSpanish && articleDescription ? (
              <p className="dark:text-gray-300 text-gray-600 text-lg mb-6">
                {articleDescription}
              </p>
            ) : null}

            <div
              className="flex flex-col dark:text-gray-200 text-gray-800 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: article.content ?? "" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogId;
