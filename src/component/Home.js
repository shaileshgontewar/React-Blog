import React, { useContext } from "react";
import { home } from "./APIs/ApiHome";

const Home = () => {
  const [dataHome, setDataHome] = useContext(home);
  return (
    <>
      {" "}
      <div className="contentPage">
        {dataHome.map((item) => {
          return (
            <a href={item.url}>
              <div className="card">
                <img src={item.urlToImage} alt="image"></img>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.author}</p>
              </div>
            </a>
          );
        })}
      </div>
      ;
    </>
  );
};
export default Home;
