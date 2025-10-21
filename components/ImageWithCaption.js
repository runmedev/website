export const ImageWithCaption = ({ children, caption }) => {
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
