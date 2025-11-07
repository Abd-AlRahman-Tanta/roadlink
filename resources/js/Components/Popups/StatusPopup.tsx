const StatusPopup = ({
  status,
  headline,
  text,
}: {
  status: "success" | "failure";
  headline: string;
  text: string;
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-sm flexCenter">
      <div className="w-full max-w-lg bg-black p-10 rounded-xl border-2 border-white border-opacity-10 text-white">
        <div className="flex items-center gap-2 mb-3">
          <div className="px-4 py-2 rounded-full border-2 border-white">
            {status == "success" ? "Success!" : "Failed"}
          </div>
          <h3 className="text-xl font-semibold ">{headline}</h3>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default StatusPopup;
