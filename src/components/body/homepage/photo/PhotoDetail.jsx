import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Comment from "./comment/Comment";
import CommentForm from "./comment/CommentForm";
import { comment_error, fetchComments } from "../../../../redux/commentSlice";

const PhotoDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photos.individualPhoto);
 

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(comment_error(null))
  }, []);

  if (photo == null) {
    useEffect(() => {
      navigate("/");
    });
  } else {
    return (
      <section className="pd-wrapper">
        <div className="main-container py-16 flex flex-col justify-center md:flex-row md:justify-evenly space-x-5 flex-wrap min-h-full">
          <div className="w-full md:w-1/3 h-96 overflow-hidden">
            <img src={photo.image} alt="" width={"100%"} height={"100%"} />
          </div>
          {/* comment form  */}
          <div>
            <CommentForm photoId={photo.id} />
          </div>

          {/* load comments  */}
          <div className="border-l-2 border-color-red pl-5 h-80 overflow-scroll">
            <h1>Comments: </h1>
            <Comment photoId={photo.id} />
          </div>
        </div>
      </section>
    );
  }
};

export default PhotoDetail;
