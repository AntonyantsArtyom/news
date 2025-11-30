import { useEffect } from "react";

export const onChangeUrl = (setSeacrthQuery: React.Dispatch<React.SetStateAction<string>>) => {
  useEffect(() => {
    const handleUrlChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const searchQuery = urlParams.get("search")?.toLowerCase() || "";
      setSeacrthQuery(searchQuery);
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);

    const handleCustomPopState = () => handleUrlChange();
    window.addEventListener("popstate", handleCustomPopState);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("popstate", handleCustomPopState);
    };
  }, []);
};
