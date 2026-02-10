import React, { useMemo, useState } from "react";

export type TabsVariant = "underline" | "pills" | "boxed";

export type TabItem<TId extends string = string> = {
  id: TId;
  label: React.ReactNode;
  content: React.ReactNode | (() => React.ReactNode); // permite render lazy
  disabled?: boolean;
};

type TabsProps<TId extends string = string> = {
  tabs: TabItem<TId>[];

  /** Uncontrolled */
  defaultValue?: TId;

  /** Controlled */
  value?: TId;
  onChange?: (id: TId) => void;

  variant?: TabsVariant;

  className?: string;
  tabListClassName?: string;
  tabClassName?: string;
  panelClassName?: string;

  fullWidth?: boolean;
};

const cx = (...classes: Array<string | undefined | false | null>) =>
  classes.filter(Boolean).join(" ");

export function Tabs<TId extends string = string>({
  tabs,
  defaultValue,
  value,
  onChange,
  variant = "underline",
  className,
  tabListClassName,
  tabClassName,
  panelClassName,
  fullWidth = true,
}: TabsProps<TId>) {
  const firstEnabled = useMemo(() => tabs.find((t) => !t.disabled)?.id, [tabs]);

  const isControlled = value !== undefined;

  const [internal, setInternal] = useState<TId>(
    (defaultValue ?? firstEnabled ?? tabs[0]?.id) as TId,
  );

  const activeId = (isControlled ? value : internal) as TId;

  const activeTab = useMemo(
    () => tabs.find((t) => t.id === activeId) ?? tabs[0],
    [tabs, activeId],
  );

  const setActive = (id: TId) => {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  };

  // ====== Estilos por variante (Tailwind) ======
  const styles = {
    underline: {
      btnBase:
        "relative -mb-px px-3 py-2 text-sm font-medium transition focus:outline-none  focus:ring-gray-300",
      btnActive: "border-b-2 border-gray-200 text-white",
      btnInactive: "text-gray-600 hover:text-gray-900",
      btnDisabled: "text-gray-400 cursor-not-allowed",
      panel: "pt-4",
    },
    pills: {
      btnBase:
        "rounded-[1rem] relative inline-flex justify-center overflow-hidden !px-4 !py-2 text-sm font-medium transition-all group hover:bg-white",
      btnActive: "bg-white text-gray-900 shadow",
      btnInactive: "text-gray-600 hover:bg-white/60 hover:text-gray-900",
      btnDisabled: "text-gray-400 cursor-not-allowed",
      panel: "mt-4 rounded-xl p-5",
    },
    boxed: {
      list: "inline-flex overflow-hidden rounded-xl border border-gray-200 bg-white",
      btnBase:
        "px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-gray-300",
      btnActive: "border border-gray-200 text-white",
      btnInactive: "text-gray-700 hover:bg-gray-50",
      btnDisabled: "text-gray-400 cursor-not-allowed bg-gray-50",
      panel: "mt-4 rounded-xl border border-gray-200 bg-white p-5",
    },
  } as const;

  const s = styles[variant];

  return (
    <div className={cx("w-full", className)}>
      <div
        role="tablist"
        aria-label="Tabs"
        className={cx(
          fullWidth ? "flex w-full" : "inline-flex",
          tabListClassName,
        )}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          const isDisabled = !!tab.disabled;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              disabled={isDisabled}
              onClick={() => !isDisabled && setActive(tab.id)}
              className={cx(
                s.btnBase,
                fullWidth ? "flex-1" : "",
                isDisabled
                  ? s.btnDisabled
                  : isActive
                    ? s.btnActive
                    : s.btnInactive,
                tabClassName,
                "cursor-pointer",
              )}
            >
              {variant === "pills" && (
                <span className="w-56 h-100 rounded bg-gradient-to-r from-[#13765e] to-[#6BFDD9] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              )}
              {variant === "pills" && (
                <span className="relative w-full text-center text-#13765e transition-colors duration-300 ease-in-out group-hover:text-white">
                  {tab.label}
                </span>
              )}
              {variant !== "pills" && tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab.id}`}
        aria-labelledby={`tab-${activeTab.id}`}
        className={cx(s.panel, panelClassName)}
      >
        {typeof activeTab.content === "function"
          ? activeTab.content()
          : activeTab.content}
      </div>
    </div>
  );
}
