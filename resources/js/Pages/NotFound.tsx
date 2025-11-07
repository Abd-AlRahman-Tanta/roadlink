import Headline from "@/Components/Common/Headline";

const NotFound = () => {
  return (
    <div className="w-screen h-screen bg-darkGray flexCenter">
      <Headline headline={`This page doesn't exist!`} />
    </div>
  );
};

export default NotFound;
