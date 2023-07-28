import axios from "axios";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  add_comment,
  comment_error,
  fetchComments,
} from "../../../../../redux/commentSlice";

const CommentForm = ({ photoId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authenication.token);
  const commenterror = useSelector((state) => state.comments.commentError);

  const submitComment = (comment) => {
    let userComment = comment;
    userComment.photoId = photoId;
    userComment.date = new Date().toISOString();
    axios
      .post(
        "https://photo-gallery-416c5-default-rtdb.firebaseio.com/feedback.json?auth=" +
          token,
        userComment
      )
      .then((response) => {
        dispatch(fetchComments());
        dispatch(comment_error(null));
      })
      .catch((err) => dispatch(comment_error("Please Login First !")));
  };
  return (
    <div>
      {commenterror ? <p className="text-color-red">{commenterror}</p> : null}
      <h1>Add Comment</h1>

      <Formik
        initialValues={{ author: "", comment: "" }}
        onSubmit={(values) => {
          submitComment(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <div className="text-black w-80">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="author"
                value={values.author}
                placeholder="Your Name"
                onChange={handleChange}
                required
                className="w-full border-none outline-none rounded p-1 focus:ring-2 ring-color-red"
              />{" "}
              <br />
              <br />
              <textarea
                name="comment"
                id=""
                cols="30"
                rows="4"
                value={values.comment}
                onChange={handleChange}
                placeholder="Your Comment"
                required
                className="w-full border-none outline-none rounded p-1 focus:ring-2 ring-color-red resize-none"
              ></textarea>
              <br />
              <input
                type="submit"
                value="Submit"
                className="button text-white my-5 cursor-pointer"
              />
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CommentForm;
