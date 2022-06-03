import React, { useContext } from "react";
import { one } from "./Api";

export default function Hollywood() {
  const [data] = useContext(one);

  return (
    <div>
      <div>
        <h1>HOLLYWOOD</h1>
      </div>
      <div className="car">
        <div className="cards">
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={data[17].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {data[0].PublishedDate} </h6>
              <h6> {data[0].Title} </h6>
              <h6> {data[0].BlogContent} </h6>
              <h6>
                <h6> {data[0].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={data[4].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {data[4].PublishedDate} </h6>
              <h6> {data[4].Title} </h6>
              <h6> {data[4].BlogContent} </h6>
              <h6>
                <h6> {data[4].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={data[2].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {data[2].PublishedDate} </h6>
              <h6> {data[2].Title} </h6>
              <h6> {data[0].BlogContent} </h6>
              <h6>
                <h6> {data[2].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={data[3].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {data[3].PublishedDate} </h6>
              <h6> {data[3].Title} </h6>
              <h6> {data[3].BlogContent} </h6>
              <h6>
                <h6> {data[3].Likes} </h6>
              </h6>
            </div>
          </div>
        </div>

        <div className="topost">
          <h2>--TOP POSTS--</h2>
          <div className="lin"></div>
          <div className="top">
            <div className="top1">
              <img
                className="image"
                src={data[0].ImageAsset}
                alt=""
                height="200px"
              />
              <div className="de">
                <h6> {data[0].PublishedDate} </h6>
                <h6> {data[0].Title} </h6>
                <h6>
                  <h6> {data[0].Likes} </h6>
                </h6>
              </div>
            </div>
          </div>
          <div className="lin"></div>
          <div className="top1">
            <img
              className="image"
              src={data[15].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="de">
              <h6> {data[15].PublishedDate} </h6>
              <h6> {data[15].Title} </h6>
              <h6>
                <h6> {data[15].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="top1">
            <img
              className="image"
              src={data[11].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="de">
              <h6> {data[11].PublishedDate} </h6>
              <h6> {data[11].Title} </h6>
              <h6>
                <h6> {data[11].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="top1">
            <img
              className="image"
              src={data[14].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="de">
              <h6> {data[14].PublishedDate} </h6>
              <h6> {data[14].Title} </h6>
              <h6>
                <h6> {data[14].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="top1">
            <img
              alt={""}
              src={
                " https://th.bing.com/th/id/OIP.b-10t5akOlGGO0pBQQnWpQAAAA?w=185&h=183&c=7&r=0&o=5&pid=1.7"
              }
            />
          </div>
          <div className="lin"></div>
          <div className="top1">
            <img
              className="image"
              src={data[6].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="de">
              <h6> {data[6].PublishedDate} </h6>
              <h6> {data[6].Title} </h6>
              <h6>
                <h6> {data[6].Likes} </h6>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
