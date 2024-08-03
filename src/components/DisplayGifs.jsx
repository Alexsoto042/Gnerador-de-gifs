import React from "react";
import UseApi from "../Hooks/useApi";
import ImageItem from "../components/imageItem";

const DisplayGifs = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=A3MYH8mdZughqnHT6YEb1Zeaybraeww5&q=${category}&limit=15&lang=es`;
  const { loading, data } = UseApi(url);
  return (
    <div className="container-gifs">
      {loading
        ? data.map((img) => (
            <ImageItem
              key={img.id}
              title={img.title}
              url={img.images.downsized_medium.url}
              source={img.url}
            />
          ))
        : ""}
    </div>
  );
};

export default DisplayGifs;
