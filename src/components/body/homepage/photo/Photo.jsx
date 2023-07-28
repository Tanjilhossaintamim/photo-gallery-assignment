import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCatagory } from "../../../../redux/catagorySlice";
import Catagory from "./Catagory";
import { getPhotos, load_singel_photo } from "../../../../redux/photoSlice";
import SingelPhoto from "./SingelPhoto";
import SkeletonChildren from "../../../sekeleton/Sekeleton";

// conponent
const Photo = () => {
  const { catagories, error } = useSelector((state) => state.catagory);
  const { status } = useSelector((state) => state.photos);

  const { photos } = useSelector((state) => state.photos);
  const [photo, setPhoto] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatagory());

    dispatch(getPhotos());
  }, []);
  const showAllPhotos = () => {
    setPhoto(photos);
  };

  const showIndividualCatagoryPhoto = (e, id) => {
    
    const individualPhoto = photos.filter((item) => {
      return item.catagoryId == id;
    });

    setPhoto(individualPhoto);
  };

  const handelClickedPhoto = (photo) => {
    dispatch(load_singel_photo(photo));

    navigate("/photo-details");
  };
  if (error) {
    return (
      <div className="main-container py-16 flex flex-col justify-center text-2xl text-red-700">
        {error}
      </div>
    );
  }
  return (
    <section className="p-wrapper">
      <div className="main-container py-16 flex flex-col justify-center">
        {/* catagory  */}
        <div className="mx-auto flex justify-center items-center text-xl pb-6">
          <Catagory
            catagories={catagories}
            allPhotos={showAllPhotos}
            showIndividualCatagoryPhoto={showIndividualCatagoryPhoto}
          />
        </div>
        {/* photos  */}

        <div className="flex justify-center flex-wrap items-center pt-7">
          {status == "loading" ? (
            <SkeletonChildren />
          ) : (
            <SingelPhoto
              photos={photo.length == 0 ? photos : photo}
              handelClickedPhoto={handelClickedPhoto}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Photo;
