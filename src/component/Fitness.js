import React, { useContext } from "react";
import { one } from "./Api";

export default function Fitness() {
  const [data] = useContext(one);
  return (
    <div>
      <div>
        <h1>--------FITNESS-------</h1>
      </div>
      <div className="car">
        <div className="cards">
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={data[10].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {data[10].PublishedDate} </h6>
              <h6> {data[10].Title} </h6>
              <h6> {data[10].BlogContent} </h6>
              <h6>
                <h6> {data[10].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={data[11].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {data[11].PublishedDate} </h6>
              <h6> {data[11].Title} </h6>
              <h6> {data[11].BlogContent} </h6>
              <h6>
                <h6> {data[11].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={data[12].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {data[12].PublishedDate} </h6>
              <h6> {data[12].Title} </h6>
              <h6> {data[12].BlogContent} </h6>
              <h6>
                <h6> {data[12].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={data[15].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {data[15].PublishedDate} </h6>
              <h6> {data[15].Title} </h6>
              <h6> {data[15].BlogContent} </h6>
              <h6>
                <h6> {data[15].Likes} </h6>
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
              src={
                " https://th.bing.com/th/id/OIP.b-10t5akOlGGO0pBQQnWpQAAAA?w=185&h=183&c=7&r=0&o=5&pid=1.7"
              }
              alt={""}
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
