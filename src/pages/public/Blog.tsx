import React, { useMemo } from "react";
import { Tabs } from "../../components";
import { category } from "../../lib/db/category";
import { articles, type Article } from "../../lib/db/blog";
import { useTranslation } from "react-i18next";

const ARTICLES_BY_KEY: Record<string, Article[]> = articles.reduce(
  (acc, ar) => {
    const k = ar.category.key;
    (acc[k] ??= []).push(ar);
    return acc;
  },
  {} as Record<string, Article[]>,
);

const TAB_LIST_CLASS =
  "bg-[#ffffff4f] dark:bg-[#233831b3] border border-[#FFFFFF0F] gap-2 rounded-[2rem] backdrop-blur-[20px] !px-2 !py-2";

const ArticleGrid = React.memo(function ArticleGrid({
  items,
}: {
  items: ReadonlyArray<Article>;
}) {
  const { t } = useTranslation();

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:!grid-cols-3">
      {items.map((ar) => {
        const articleTitle = t(`articles.${ar.id}.title`, {
          defaultValue: ar.title,
        });

        return (
          <a className="cursor-pointer" key={ar.id} href={`/blog/${ar.id}`}>
            <article>
              <div className="card p-0 !bg-transparent !shadow-none">
                <figure className="w-100 overflow-hidden rounded-3xl h-56">
                <img
                  className="object-cover w-full h-full rounded-3xl transition-all duration-300 transform hover:scale-[1.1]"
                  src={ar.image}
                  alt={articleTitle}
                  loading="lazy"
                  decoding="async"
                />
                </figure>

                <div className="card-body !px-4 !py-4">
                  <h2 className="card-title text-[#13765e] dark:text-[#b9ffee] line-clamp-2">
                    {articleTitle}
                  </h2>
                  <div className="flex justify-between items-center mt-2">
                    <p className="dark:text-white text-sm text-gray-500">
                      {t(`categories.${ar.category.key}`)}
                    </p>
                    <p className="dark:text-gray-400 text-xs">{ar.date}</p>
                  </div>
                  <p className="dark:text-gray-300 text-gray-600 mt-2 text-sm line-clamp-3">
                    {t(`articles.${ar.id}.description`, {
                      defaultValue: ar.description,
                    })}
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

const Blog = () => {
  const { t, i18n } = useTranslation();

  const tabs = useMemo(
    () => [
      {
        label: t("common.all"),
        id: "all",
        content: () => <ArticleGrid items={articles} />,
      },
      ...category.map((ct) => ({
        label: t(`categories.${ct.key}`),
        id: ct.key,
        content: () => <ArticleGrid items={ARTICLES_BY_KEY[ct.key] ?? []} />,
      })),
    ],
    [i18n.resolvedLanguage, t],
  );

  return (
    <div className="content">
      <div className="block m-auto text-center w-full container-title">
        <h1 className="mb-5">{t("blog.title")}</h1>

        <div className="grid grid-cols-[1fr_min(65ch,100%)_1fr]">
          <div className="col-2 text-center">
            <p className="text-center subtitle">{t("blog.subtitle")}</p>
          </div>
        </div>
      </div>

      <Tabs tabListClassName={TAB_LIST_CLASS} variant="pills" tabs={tabs} />
    </div>
  );
};

export default Blog;
