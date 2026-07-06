"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface LightboxImage {
  alt: string;
  src: string;
}

interface BlogImageLightboxProps {
  children: ReactNode;
}

const isBlogImage = (image: HTMLImageElement) => {
  const src = image.getAttribute("src") || "";
  const lightbox = image.dataset.lightbox;

  return src.startsWith("/img/blog/") && lightbox !== "false" && !image.closest("a");
};

const getLightboxImage = (image: HTMLImageElement): LightboxImage => {
  return {
    alt: image.alt || "",
    src: image.getAttribute("src") || image.currentSrc,
  };
};

const BlogImageLightbox: React.FC<BlogImageLightboxProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLImageElement | null>(null);
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const images = Array.from(container.querySelectorAll("img"));

    images.forEach((image) => {
      if (!isBlogImage(image)) {
        return;
      }

      image.classList.add("blog-lightbox-image");
      image.setAttribute("role", "button");
      image.setAttribute("tabindex", "0");
      image.setAttribute(
        "aria-label",
        `Open image${image.alt ? `: ${image.alt}` : ""}`,
      );
    });

    return () => {
      images.forEach((image) => {
        image.classList.remove("blog-lightbox-image");
        image.removeAttribute("role");
        image.removeAttribute("tabindex");
        image.removeAttribute("aria-label");
      });
    };
  }, [children]);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [activeImage]);

  useEffect(() => {
    if (!activeImage) {
      setIsZoomed(false);
    }
  }, [activeImage]);

  const openImage = (image: HTMLImageElement) => {
    if (!isBlogImage(image)) {
      return;
    }

    lastTriggerRef.current = image;
    setActiveImage(getLightboxImage(image));
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const image = (event.target as HTMLElement).closest("img");

    if (!image || !(image instanceof HTMLImageElement) || !isBlogImage(image)) {
      return;
    }

    openImage(image);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const image = event.target;

    if (!(image instanceof HTMLImageElement) || !isBlogImage(image)) {
      return;
    }

    event.preventDefault();
    openImage(image);
  };

  return (
    <>
      <div ref={containerRef} onClick={handleClick} onKeyDown={handleKeyDown}>
        {children}
      </div>

      {activeImage && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[1000] flex bg-black/90 text-white"
          role="dialog"
          aria-label={
            activeImage.alt ? `Image preview: ${activeImage.alt}` : "Image preview"
          }
          onClick={() => setActiveImage(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="fixed right-3 top-3 z-[1001] flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-5 sm:top-5"
            aria-label="Close image preview"
            onClick={() => setActiveImage(null)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <div
            className={[
              "flex h-dvh w-screen p-4 sm:p-8",
              isZoomed
                ? "items-start justify-start overflow-auto"
                : "items-center justify-center overflow-hidden",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label={
                isZoomed ? "Fit image to screen" : "Show image at actual size"
              }
              className={[
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                isZoomed
                  ? "max-w-none cursor-zoom-out"
                  : "max-h-[calc(100dvh-2rem)] max-w-full cursor-zoom-in sm:max-h-[calc(100dvh-4rem)]",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setIsZoomed((value) => !value)}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className={[
                  "select-none rounded-md bg-white shadow-2xl",
                  isZoomed
                    ? "max-w-none"
                    : "max-h-[inherit] max-w-full object-contain",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogImageLightbox;
