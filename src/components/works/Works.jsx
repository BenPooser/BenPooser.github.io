import { useState } from "react";
import "./works.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Mobile Application",
          desc:
            "Created a mobile application as a team using React Native to develop on both iOS and Android. \nDesigned to prevent food waste by letting users store items in a virtual fridge. \nWon Runner-Up in the Convergence Innovation Competition Fall 2020",
          img: "./assets/foodsaver.png",
          link: "https://github.com/jkim3389/FoodSaver",
        },
        {
          id: "2",
          icon: "./assets/ml-icon.png",
          title: "Machine Learning Project",
          desc:
            "Implemented machine learning techniques to classify breast cancer through scanned images. Used classification techniques such as K-Nearest Neighbors, Neural Networks, Support Vector Machines",
          img: "./assets/ml_project.png",
          link: "https://patelkb99.github.io/cs4641-team36.github.io/",
        },
        {
          id: "3",
          icon: "./assets/networking-icon.png",
          title: "Networking Project",
          desc:
            "Created Python Client and Server script using multi-threading/TCP coding techniques on either sides. Handles multiple clients at a time, receiving and sending information synchronously to other clients",
          img: "./assets/networking.png",
          link: "https://github.com/benpooser/networking",
        },
      ];

      const handleClick = (way)=>{
          way === "left" 
            ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      }
    return (
        <div className="works" id="works">
            <h1>Projects</h1>
            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)` }}>
                {data.map((d)=>(
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>
                                        <a href={d.link}>
                                            Project Link
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="right">
                                <img 
                                    src= {d.img}
                                    alt="" 
                                />
                            </div>
                        </div>
                    </div>  
                ))}
            </div>
            <ArrowBackIosIcon className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <ArrowForwardIosIcon className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    );
}
