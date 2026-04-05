import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { t } = useTranslation();

  return (
    <nav
      className="flex items-center text-sm mb-6 mt-4 w-full justify-center"
      aria-label={t("accessibility.breadcrumb")}
    >
      <div className="flex items-center space-x-1 sm:space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center">
              {item.href ? (
                <Link
                  to={item.href}
                  className="!px-3 !py-1.5 text-[clamp(1rem,0.8852rem+0.4898vw,1.375rem)] rounded-full !text-[#025a4e] hover:text-[#13765e] hover:bg-white/60 dark:!text-[#b9ffee] dark:!hover:text-white dark:!hover:bg-white/10 font-[400] transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#13765e] dark:focus-visible:ring-[#b9ffee]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="!px-3 !py-1.5 text-[clamp(1rem,0.8852rem+0.4898vw,1.375rem)] text-gray-800 dark:text-gray-300 font-[400] tracking-wide line-clamp-1 max-w-[150px] sm:max-w-none">
                  {item.label}
                </span>
              )}
              {!isLast && <span>#</span>}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
