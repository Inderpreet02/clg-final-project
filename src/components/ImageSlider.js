import React from "react";
import Carousel from "react-elastic-carousel";
import "./ImageSlider.css";
import Btn from "./Btn"
import TestCard from "./TestCard"
///This uses react-elastic-carousel library installed using 
///npm install --save styled-components
///npm install --save react-elastic-carousel
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ImageSlider(props) {
  const Price1=props.price1;
  const Source1=props.src1;
  const Text1=props.text1;

  const Price2=props.price2;
  const Source2=props.src2;
  const Text2=props.text2;
  
  const Price3=props.price3;
  const Source3=props.src3;
  const Text3=props.text3;
  
  const Price4=props.price4;
  const Source4=props.src4;
  const Text4=props.text4;
  
  const Price5=props.price5;
  const Source5=props.src5;
  const Text5=props.text5;
  
  const Price6=props.price6;
  const Source6=props.src6;
  const Text6=props.text6;
  
  const Price7=props.price7;
  const Source7=props.src7;
  const Text7=props.text7;
  return (
    <div>
      <h1 className="heading" style={{ textAlign: "center" }}>{props.head}</h1>
      <div className="ImageSlider">
        <Carousel breakPoints={breakPoints}>
          <TestCard title={Text1} price={Price1} src={Source1} add={props.btntext} id={props.id1}/>
          <TestCard title={Text2} price={Price2} src={Source2} add={props.btntext} id={props.id2}/>
          <TestCard title={Text3} price={Price3} src={Source3} add={props.btntext} id={props.id3}/>
          <TestCard title={Text4} price={Price4} src={Source4} add={props.btntext} id={props.id4}/>
          <TestCard title={Text5} price={Price5} src={Source5} add={props.btntext} id={props.id5}/>
          <TestCard title={Text6} price={Price6} src={Source6} add={props.btntext} id={props.id6}/>
          <TestCard title={Text7} price={Price7} src={Source7} add={props.btntext} id={props.id7}/>
          {/* <Item>
              <div className="image_container">
                <img src={props.src1}/>
                <div>
                <strong>{props.text1}</strong>
                <div>
                  {props.price1}
                  <Btn text={props.product} color={true}/>                  
                </div>
                </div>
                
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
            </Item> */}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider