import React, { useContext } from "react";
import { one } from "./Api";

const Home = () => {
  const [data] = useContext(one);
  return (
    <>
      <div className="box1">
        <img
          src={
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/olaa.jpg?ikxK_8nil6CxMVSrgvE5I_lRm1MGLIdr&size=770:433"
          }
          alt={""}
          height="400px"
        />
        <div className="box2">
          <img
            src={
              "https://qph.fs.quoracdn.net/main-qimg-bfa9bbf14a4f404c4d6f5c26c4fe4a99-c"
            }
            alt={""}
            height={"280px"}
          />
          <img
            src={
              " https://th.bing.com/th/id/OIP.b-10t5akOlGGO0pBQQnWpQAAAA?w=185&h=183&c=7&r=0&o=5&pid=1.7"
            }
            alt={""}
          />
        </div>
      </div>
      <p>`</p>
      <h2>THE LATEST NEWS</h2>
      <div className="lin"></div>
      <div className="latest">
        <div className="card">
          <img className="im" src={data[0].ImageAsset} alt="" height="200px" />
          <div className="data">
            <h6> {data[0].PublishedDate} </h6>
            <h6> {data[0].Title} </h6>
            <h6> {data[0].BlogContent} </h6>
            <h6> {data[0].Likes} </h6>
          </div>
        </div>
        <div>
          <img
            src={
              "https://th.bing.com/th/id/OIP.5_rGNVqLF0Up2ykYxHD0VAHaF7?pid=ImgDet&rs=1"
            }
            alt={""}
            height={"200px"}
          />
        </div>
      </div>
      <p>`</p>
      <p>`</p>
      <h2>THE LATEST ARTICLE</h2>
      <div className="lin"></div>
      <div className="latest">
        <div className="card">
          <img className="im" src={data[14].ImageAsset} alt="" height="200px" />
          <div className="data">
            <h6> {data[14].PublishedDate} </h6>
            <h6> {data[14].Title} </h6>
            <h6> {data[14].BlogContent} </h6>
            <h6>
              <h6> {data[14].Likes} </h6>
            </h6>
          </div>
        </div>
        <div>
          <img
            src={
              "https://th.bing.com/th/id/OIP._9WXOes4d80ysQz90znniQHaJB?pid=ImgDet&rs=1"
            }
            alt={""}
            height="200px"
          />
        </div>
        <div className="card">
          <img className="im" src={data[5].ImageAsset} alt="" height="200px" />
          <div className="data">
            <h6> {data[5].PublishedDate} </h6>
            <h6> {data[5].Title} </h6>
            <h6> {data[5].BlogContent} </h6>
          </div>
        </div>

        <div>
          <img
            src={
              "https://i.pinimg.com/originals/f0/0e/29/f00e29d6e8fa502fb901f63d71e94734.jpg"
            }
            alt={""}
            height={"300px"}
          />
        </div>
      </div>

      <h2>THE LATEST STORIES</h2>
      <div className="lin"></div>
      <div className="art">
        <div className="card">
          <img className="im" src={data[4].ImageAsset} alt="" height="200px" />
          <div className="data">
            <h6> {data[4].PublishedDate} </h6>
            <h6> {data[4].Title} </h6>
            <h6> {data[4].BlogContent} </h6>
            <h6>
              <h6> {data[4].Likes} </h6>
            </h6>
          </div>
        </div>
        <div className="tour">
          <img
            src={
              "https://www.tripsavvy.com/thmb/PAqt9lwla9-Zvj7E9LeAcwM8bJs=/4125x2856/filters:fill(auto,1)/KazanCathedral2-254d95159196474b82fa87f962687ec6.jpg"
            }
            alt={""}
            height={"300px"}
          />
          <img
            src={
              "https://fthmb.tqn.com/oNaNMUMdTrpqlJ8uv1LD4tAgguM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/shore-temple-640319518-58e3eaf25f9b58ef7e113e1f.jpg"
            }
            alt={""}
            height={"300px"}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
