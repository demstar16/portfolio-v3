const VideoPlayer = ({ src }) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
      <video controls preload="metadata" className="w-full h-auto">
        <source src={src} type="video/quicktime" />
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
