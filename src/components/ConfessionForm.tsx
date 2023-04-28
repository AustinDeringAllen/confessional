import { useState } from "react";
import { api } from "../utils/api";

const ConfessionForm = () => {
  const utils = api.useContext();
  const mutation = api.confessions.newConfession.useMutation({
    async onSuccess() {
      await utils.confessions.invalidate();
    },
  });
  const [confessionDetails, setConfessionDetails] = useState({
    content: "",
    author: "Anonymous",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setConfessionDetails((prevDetails) => {
      return {
        ...prevDetails,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const confession = {
      content: confessionDetails.content.trim(),
      author:
        confessionDetails.author.trim() !== ""
          ? confessionDetails.author.trim()
          : null,
    };
    mutation.mutate(confession);
    setConfessionDetails({
      content: "",
      author: "Anonymous",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <textarea
            required
            name="content"
            cols={30}
            rows={10}
            value={confessionDetails.content}
            onChange={handleChange}
            className="input"
            style={{ resize: "none" }}
          ></textarea>
          <label className="user-label">Confession</label>
        </div>
        <div className="input-group my-12">
          <input
            required
            autoComplete="off"
            type="text"
            name="author"
            value={confessionDetails.author}
            onChange={handleChange}
            className={`input rounded-xl`}
          />
          <label className="user-label">Author</label>
        </div>
        <button type="submit" className="input">
          Confess your sin
        </button>
      </form>
    </>
  );
};

export default ConfessionForm;
