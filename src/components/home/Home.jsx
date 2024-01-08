import Believe from "../believe/Believe";
import Econis from "../econis/Econis";
import Feedback from "../feedback/Feedback";
import News from "../news/News";
import Offers from "../offers/Offers";
import Products from "../products/Products";
import Sales from "../sales/Sales";
import Showcase from "../shohwcase/Showcase";
import Square from "../square/Square";
import Subscribe from "../subscribe/Subscribe";
import Fruits from "../../assets/fruits.webp";

export const Home = () => {
  return (
    <>
      <Showcase />
      <Sales/>
      <Believe img={Fruits} title='We Believe in Working Accredited Farmers'/>
      <Products/>
      <Feedback/> 
       <Offers/>
       <Econis/>
       <Square/>
       <News/>
       <Subscribe/>
       
    </>
  );
};
