const LoadingOverlay = () => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black opacity-0 flexCenter z-[9999999] backdrop-blur-sm duration-300 pointer-events-none"
      id="loadingContainer"
    >
      <span className="w-10 aspect-square rounded-full border-2 border-orange border-l-none animate-spin" />
    </div>
  );
};

export default LoadingOverlay;
