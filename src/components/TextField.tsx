import React, { type ChangeEvent } from "react";

type TextFieldProps = {
  background?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
  onFilter?: () => void;
  id?: string;
  name?: string;
  leftIcon?: React.ReactNode;
  rightAction?: React.ReactNode;
};

const TextField: React.FC<TextFieldProps> = ({
  background = "bg-transparent",
  placeholder = "Buscar...",
  value,
  type = "text",
  onChange,
  onSearch,
  id = "textfield",
  name = "textfield",
  leftIcon,
  rightAction,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange ? onChange(e.target.value) : null;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch?.();
  };

  return (
    <div
      className={
        background +
        " flex items-center justify-between rounded-md  !p-[.5rem] outline-none focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
      }
    >
      <div className="flex items-center w-full">
        <div className="shrink-0 flex items-center text-base text-gray-400 select-none sm:text-sm/6">
          {leftIcon}
        </div>

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent !px-2 text-gray-600 dark:text-white outline-none text-[.875rem]"
        />
      </div>

      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
        {rightAction}
      </div>
    </div>
  );
};

export default TextField;
