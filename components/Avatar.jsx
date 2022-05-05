const Avatar = ({ url, className }) => {
  return (
    <img
      className={`h-7 w-7 rounded-2xl cursor-pointer transform hover:scale-110 ${className}`}
      loading="lazy"
      src={url}
      alt="Profile pic"
    />
  );
};

export default Avatar;
