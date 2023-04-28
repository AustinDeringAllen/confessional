const ConfessionBlock = ({
  content,
  author,
}: {
  content: string;
  author: string | null;
}) => {
  return (
    <div>
      <h3 className="text-2xl text-white">{content}</h3>
      <p className="float-right text-xl text-white">- {author}</p>
    </div>
  );
};

export default ConfessionBlock;
