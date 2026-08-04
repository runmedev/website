"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const pixelUrl =
  "https://static.scarf.sh/a.png?x-pxid=6268436c-2d84-454a-a887-d81f863df8d7";

const ScarfPixel: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    const pixel = new Image();
    pixel.referrerPolicy = "no-referrer-when-downgrade";
    pixel.src = pixelUrl;
  }, [pathname]);

  return null;
};

export default ScarfPixel;
