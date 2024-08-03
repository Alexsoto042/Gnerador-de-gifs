const ImageItem = ({ title, url, source }) => {
  return (
    <div className="containerGif">
      <a href={source} target="_blank">
        <img className="Gifs" src={url} alt={title} />
      </a>
      <p>{title}</p>
    </div>
  );
};

export default ImageItem;
