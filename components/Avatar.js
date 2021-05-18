function Avatar({ url }) {
  return (
    <img
      className="h-10 rounded-full  cursor-pointer 
      transition duration-150 transform hover:scale-110 "
      loading="lazy"
      src={url}
      alt="profile pic"
    />
  );
}

export default Avatar;
