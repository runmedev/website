import type { ReactNode } from "react";

interface ImageWithCaptionProps {
  children: ReactNode;
  caption: string;
}

export const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ children, caption }) => {
  return (
    <>
      <figure>
        {children}
        <figcaption>&gt; {caption}</figcaption>
      </figure>
      <br />
    </>
  );
};

export default ImageWithCaption;
