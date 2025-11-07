import useGlobalStore from "@/Stores/GlobalStore";
import { Language } from "@mui/icons-material";

const LanguageSwitcher = ({ white = false }: { white?: boolean }) => {
  const globalStore = useGlobalStore();
  const isArabic = globalStore.currentLocale.includes("ar");

  // Language Changing Logic
  function changeLang(lang: "en" | "ar") {
    if (lang == globalStore.currentLocale) return;

    useGlobalStore.setState({ currentLocale: lang });

    if (lang !== globalStore.defaultLocale) {
      window.location.replace(`/${lang}${location.pathname}${location.hash}`);
    } else {
      window.location.replace(location.pathname.slice(3) + location.hash);
    }
    return false;
  }

  return (
    <button
      onClick={() => changeLang(isArabic ? "en" : "ar")}
      className={`flex items-center gap-1 ${
        white
          ? "rounded-sm border-[1px] border-white px-4 py-1 text-white"
          : "border-main text-main"
      }`}
    >
      <Language fontSize="small" />
      {!isArabic ? "العربية" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
