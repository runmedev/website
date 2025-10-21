export const VideoWithCaption = ({ children, caption }) => {
  return (
    <>
      <figure>
        <video
          className="rounded-md border-solid border-2"
          autoPlay
          loop
          muted
          playsInline
          controls
        >
          {children}
        </video>
        <figcaption>&gt; {caption}</figcaption>
      </figure>
      <br />
    </>
  );
};

export default VideoWithCaption;
