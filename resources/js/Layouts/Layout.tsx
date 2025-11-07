import ContentEditor from "@/Components/Dashboard/ContentEditor";
import useGlobalStore from "@/Stores/GlobalStore";
import "@fontsource/cairo";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const {
    props: { locale },
  } = usePage();

  useEffect(() => {
    useGlobalStore.setState({ currentLocale: locale as string });
  }, [locale]);
  return (
    <div className="w-screen font-cairo">
      {children}
      <ContentEditor />
    </div>
  );
};

export default Layout;
