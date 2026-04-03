import React, { useCallback, useEffect, useMemo, useState } from "react";

export type TabsVariant = "underline" | "pills" | "boxed";

export type TabItem<TId extends string = string> = {
  id: TId;
  label: React.ReactNode;
  content: React.ReactNode | (() => React.ReactNode); // lazy
  disabled?: boolean;
};

type TabsProps<TId extends string = string> = {
  tabs: TabItem<TId>[];

  defaultValue?: TId;

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

const STYLES = {
  underline: {
    btnBase:
      "relative -mb-px px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-gray-300",
    btnActive:
      "border-b-2 border-gray-500 dark:border-gray-200 text-black dark:text-white",
    btnInactive: "text-gray-600 hover:text-gray-900",
    btnDisabled: "text-gray-400 cursor-not-allowed",
    panel: "pt-4",
  },
  pills: {
    btnBase:
      "rounded-[1rem] relative inline-flex justify-center overflow-hidden !px-4 !py-2 text-sm font-medium transition-all group",
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

  const initial = useMemo(() => {
    const dv = defaultValue;
    const dvOk = dv && tabs.some((t) => t.id === dv && !t.disabled);
    return (dvOk ? dv : (firstEnabled ?? tabs[0]?.id)) as TId;
  }, [defaultValue, firstEnabled, tabs]);

  const [internal, setInternal] = useState<TId>(initial);
  const activeId = (isControlled ? value : internal) as TId;

  // Si cambian tabs y el activeId queda inválido/disabled → fallback
  useEffect(() => {
    const ok = tabs.some((t) => t.id === activeId && !t.disabled);
    if (!ok) {
      const next = (firstEnabled ?? tabs[0]?.id) as TId;
      if (!isControlled) setInternal(next);
      onChange?.(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs, firstEnabled]);

  const activeTab = useMemo(
    () => tabs.find((t) => t.id === activeId) ?? tabs[0],
    [tabs, activeId],
  );

  const setActive = useCallback(
    (id: TId) => {
      if (!isControlled) setInternal(id);
      onChange?.(id);
    },
    [isControlled, onChange],
  );

  const s = STYLES[variant];

  return (
    <div className={cx("w-full", className)}>
      <div
        className={
          variant === "pills" ? "grid grid-cols-[1fr_min(65ch,100%)_1fr]" : ""
        }
      >
        <div className={variant === "pills" ? "col-2" : ""}>
          <div
            role="tablist"
            aria-label="Tabs"
            className={cx(
              fullWidth ? "flex w-full" : "inline-flex",
              tabListClassName,
              "mb-10",
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
                  {variant === "pills" ? (
                    <>
                      <span className="w-56 h-100 rounded bg-gradient-to-r from-[#13765e] to-[#6BFDD9] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                      <span
                        className={cx(
                          "relative w-full text-center transition-colors duration-300 line-clamp-1  ease-in-out",
                          isActive
                            ? "text-gray-900"
                            : "text-[#13765e] dark:text-[#b9ffee] group-hover:text-white",
                        )}
                      >
                        {tab.label}
                      </span>
                    </>
                  ) : (
                    <span className="line-clamp-1">{tab.label}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
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
