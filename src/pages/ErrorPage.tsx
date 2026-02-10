import { Link, isRouteErrorResponse, useRouteError } from "react-router";
import AppShell from "../layouts/AppShell";

type ErrorLabels = {
  title: string;
  subtitle: string;
  details?: string | null;
  statusCode?: number;
};

function safeStringify(data: unknown) {
  try {
    return JSON.stringify(data, null, 2);
  } catch {
    return String(data);
  }
}

function getErrorLabels(error: unknown): ErrorLabels {
  const base: ErrorLabels = {
    title: "Error inesperado",
    subtitle: "Ocurrió un problema.",
    details: null,
  };

  if (isRouteErrorResponse(error)) {
    const { status, statusText, data } = error;

    if (status === 404) {
      return {
        title: "404",
        subtitle: "¡Ups! Página no encontrada",
        details:
          "Lo sentimos, no podemos encontrar la página que estás buscando.",
        statusCode: status,
      };
    }

    return {
      title: String(status),
      subtitle: statusText || "Ocurrió un error",
      details: typeof data === "string" ? data : safeStringify(data),
      statusCode: status,
    };
  }

  if (error instanceof Error) {
    return {
      ...base,
      subtitle: error.message,
      details: import.meta.env.DEV ? (error.stack ?? null) : null,
    };
  }

  return {
    ...base,
    subtitle: String(error),
  };
}

export default function ErrorPage() {
  const error = useRouteError() as unknown;
  const label = getErrorLabels(error);

  return (
    <AppShell>
      <div className="block m-auto text-center w-full container-title">
        <h1 className="mb-2">{label.title}</h1>
        <h3 className="mt-1 text-h2 font-bold mb-2 text-green-950 flex items-center justify-center">
          {label.subtitle}
        </h3>
        <div className="grid grid-cols-[1fr_min(65ch,100%)_1fr]">
          <div className="col-2 text-center">
            <p className="text-center subtitle">{label.details}</p>
            <Link
              to="/"
              className="mt-5 inline-flex items-center rounded-x px-4 py-2 text-[16px] font-medium"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
