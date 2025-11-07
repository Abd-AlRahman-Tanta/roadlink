const Headline = ({
  headline,
  className,
}: {
  headline: string;
  className?: string;
}) => {
  return (
    <h2 className={`text-2xl text-white font-semibold ` + className}>
      {headline}
    </h2>
  );
};

export default Headline;
