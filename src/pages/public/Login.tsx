import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="content">
      <div className="block m-auto text-center w-full container-title">
        <h1 className="mb-5">{t("login.title")}</h1>

        <div className="grid grid-cols-[1fr_min(60ch,100%)_1fr]">
          <div className="col-2 text-center">
            <p className="text-center subtitle">{t("login.subtitle")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
