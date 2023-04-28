import type { SetStateAction } from "react";
import { useState } from "react";
import { api } from "../utils/api";

const CommentForm = ({ cid }: { cid: string }) => {
  const utils = api.useContext();
  const mutation = api.comments.newComment.useMutation({
    async onSuccess() {
      await utils.comments.invalidate();
    },
  });
  const [comment, setComment] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    mutation.mutate({ cid, content: comment });
    setComment("");
  };
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setComment(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <textarea
            cols={30}
            rows={10}
            value={comment}
            onChange={handleChange}
            className="input"
            style={{ resize: "none" }}
          ></textarea>
          <label className="user-label">Comment</label>
        </div>
        <button type="submit" className="input">
          Submit Comment
        </button>
      </form>
    </>
  );
};

export default CommentForm;
