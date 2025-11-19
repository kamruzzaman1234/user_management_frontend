"use client";

import ShowApi from "./ShowApi/ShowApi";
import Marquee from "./Marquee/Marquee";
import NewsAdd from "./NewsAdd/NewsAdd"

const Home_Main = ()=>{
    return(
        <div className="">
            <div className=" ">
                <Marquee></Marquee>
                <ShowApi></ShowApi>
                <NewsAdd></NewsAdd>
                
            </div>
        </div>
    )
}
export default Home_Main;