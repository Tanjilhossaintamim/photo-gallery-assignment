const SingelPhoto = ({ photos, handelClickedPhoto }) => {
  const image = photos.map((item) => {
    return (
      <div
        key={item.id}
        className="w-80 h-52 mx-2 my-2 overflow-hidden relative rounded cursor-pointer"
        onClick={() => handelClickedPhoto(item)}
      >
        <img
          src={item.image}
          alt=""
          width={"100%"}
          className="object-cover hover:scale-105 transition-all duration-200 ease-in-out"
        />
      </div>
    );
  });

  return <>{image}</>;
};

export default SingelPhoto;
