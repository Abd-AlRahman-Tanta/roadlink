const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flexCenter bg-black">
      <div className="w-full max-w-lg shadow-normal rounded-2xl p-[2rem] flex flex-col items-stretch border-2 border-white border-opacity-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
