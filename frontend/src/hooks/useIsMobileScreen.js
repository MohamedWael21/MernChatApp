import { useEffect, useState } from "react";

const useIsMobileScreen = () => {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setisMobile(width <= 600);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
export default useIsMobileScreen;
