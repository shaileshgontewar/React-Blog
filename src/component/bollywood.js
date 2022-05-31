import React, { useContext } from "react";
import { movie } from "./APIs/Api";

export default function Bollywood() {
  const [data, setData] = useContext(movie);

  return (
    <div className="contentPage">
      {data.map((item) => {
        return (
          <a href={item.url}>
            <div className="card">
              <img src={item.ImageAsset}></img>
              <p>{item.Title}</p>
              <p>{item.BlogContent}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div>
          </a>
        );
      })}
    </div>
  );
}
