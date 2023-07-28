const Catagory = ({ catagories, allPhotos, showIndividualCatagoryPhoto}) => {
  const catagory = catagories.map((item) => {
    return (
      <li
        key={item.id}
        className="cursor-pointer hover:text-color-red transition-colors duration-200"
        onClick={(e) => showIndividualCatagoryPhoto(e,item.id)}
      >
        {item.name}
      </li>
    );
  });
  return (
    <div>
      <ul className="flex space-x-10 flex-wrap justify-center">
        <li
          className="cursor-pointer hover:text-color-red transition-colors duration-200"
          onClick={allPhotos}
        >
          All
        </li>
        {catagory}
      </ul>
    </div>
  );
};

export default Catagory;
