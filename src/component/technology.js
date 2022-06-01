import React, { useContext } from "react";
import { one } from "./Api";

export default function Technology() {
  const [tech] = useContext(one);
  return (
    <div>
      <div>
        <h1>--------TECHNOLOGY-------</h1>
      </div>
      <div className="car">
        <div className="cards">
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={tech[5].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {tech[5].PublishedDate} </h6>
              <h6> {tech[5].Title} </h6>
              <h6> {tech[5].BlogContent} </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={tech[6].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {tech[6].PublishedDate} </h6>
              <h6> {tech[6].Title} </h6>
              <h6> {tech[6].BlogContent} </h6>
              <h6>
                <h6> {tech[6].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={tech[7].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {tech[7].PublishedDate} </h6>
              <h6> {tech[7].Title} </h6>
              <h6> {tech[7].BlogContent} </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={tech[8].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="data">
              <h6> {tech[8].PublishedDate} </h6>
              <h6> {tech[8].Title} </h6>
              <h6> {tech[8].BlogContent} </h6>
            </div>
          </div>

          <div className="lin"></div>
          <div className="card">
            <img
              className="im"
              src={tech[9].ImageAsset}
              alt=""
              height="200px"
            />
            <div className=" data">
              <h6> {tech[9].PublishedDate} </h6>
              <h6> {tech[9].Title} </h6>
              <h6> {tech[9].BlogContent} </h6>
              <h6>
                <h6> {tech[9].Likes} </h6>
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
                src={tech[0].ImageAsset}
                alt=""
                height="200px"
              />
              <div className="de">
                <h6> {tech[0].PublishedDate} </h6>
                <h6> {tech[0].Title} </h6>
                <h6>
                  <h6> {tech[0].Likes} </h6>
                </h6>
              </div>
            </div>
          </div>
          <div className="lin"></div>
          <div className="top1">
            <img
              className="image"
              src={tech[15].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="de">
              <h6> {tech[15].PublishedDate} </h6>
              <h6> {tech[15].Title} </h6>
              <h6>
                <h6> {tech[15].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="top1">
            <img
              className="image"
              src={tech[11].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="de">
              <h6> {tech[11].PublishedDate} </h6>
              <h6> {tech[11].Title} </h6>
              <h6>
                <h6> {tech[11].Likes} </h6>
              </h6>
            </div>
          </div>
          <div className="lin"></div>
          <div className="top1">
            <img
              className="image"
              src={tech[14].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="de">
              <h6> {tech[14].PublishedDate} </h6>
              <h6> {tech[14].Title} </h6>
              <h6>
                <h6> {tech[14].Likes} </h6>
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
              src={tech[6].ImageAsset}
              alt=""
              height="200px"
            />
            <div className="de">
              <h6> {tech[6].PublishedDate} </h6>
              <h6> {tech[6].Title} </h6>
              <h6>
                <h6> {tech[6].Likes} </h6>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
