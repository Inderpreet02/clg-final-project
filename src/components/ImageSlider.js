import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./ImageSlider.css";
import Btn from "./Btn";
///This uses react-elastic-carousel library installed using 
///npm install --save styled-components
///npm install --save react-elastic-carousel
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 980, itemsToShow: 2 },
  { width: 1050, itemsToShow: 3 },
  { width: 1400, itemsToShow: 4 },
];

function ImageSlider(props) {
  
  return (
    <div>
      <h1 className="heading" style={{ textAlign: "center" }}>{props.head}</h1>
      <div className="ImageSlider">
        <Carousel breakPoints={breakPoints}>
          <Item>
              <div className="image_container">
                <img src={props.src1}/>
                {props.button ? (
                  <div className="image_containerText">
                    <strong>{props.text1}</strong>
                    <p>$150</p>
                    <Btn text={"BUY NOW"}/>
                  </div>
                ) : (
                  <strong>{props.text1}</strong>
                )}
              </div>
            </Item>
          <Item>
              <div className="image_container">
                <img src={props.src2}/>
                <strong>{props.text2}</strong>
              </div>
            </Item>
           <Item>
                <div className="image_container" >
                    <img src={props.src3}/>
                    <strong>{props.text3}</strong>
                </div>
            </Item>
          <Item>
              <div className="image_container">
                <img src={props.src4}/>
                <strong>{props.text4}</strong>
              </div>
            </Item>
          <Item>
              <div className="image_container">
                <img src={props.src5}/>
                <strong>{props.text5}</strong>
              </div>
            </Item>
          <Item>
              <div className="image_container">
                <img src={props.src6}/>
                <strong>{props.text6}</strong>
              </div>
            </Item>
          <Item>
              <div className="image_container">
                <img src={props.src7}/>
                <strong>{props.text7}</strong>
              </div>
            </Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider