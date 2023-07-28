import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dateFormat from "dateformat";

const Comment = ({ photoId }) => {
  //   const [individualPhotoComment, setIndividualPhotoComment] = useState([]);
  const { comments } = useSelector((state) => state.comments);

  const photoComment = [];
  for (let key in comments) {
    if (comments[key].photoId == photoId) {
      photoComment.push(comments[key]);
    }
  }
  const allComments = photoComment.map((item,i) => {
    return (
      <div key={i} className="flex flex-col gap-1 mb-3">
        <span className="text-xl">{item.author}</span>
        <span>comment : {item.comment}</span>
        <span>
          date: {dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
        </span>
        <hr />
      </div>
    );
  });
  return <div>{allComments}</div>;
};

export default Comment;
