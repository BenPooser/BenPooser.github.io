import "./experience.scss";
import "../../global.scss"

export default function Experience() {
    const items = [
        {   
            title: "May 1940",
            cardTitle: "Software Engineer - Manhattan Associates",
            // cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: [
                "Joined the Movers team heading the Putaway component, collaborating with team members overseas", 
                "Practice Object-Oriented Programming techniques using Java and Spring Boot, creating JUnit tests", 
                "Helped implement the compatibility of multiple items at once in the Putaway component using Agile", 
                "Awarded Research & Development Team of the Quarter in April 2021"],
            media: {
              type: "IMAGE",
              source: {
                url: "./assets/manh.jpeg"
              }
            }
        },
        {   
            title: "May 1950",
            cardTitle: "Dunkirk",
            cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            // media: {
            //   type: "IMAGE",
            //   source: {
            //     url: "http://someurl/image.jpg"
            //   }
            // }
        }
    ];
    return (
        <div className="experience" id="experience">
            <h1>Experience</h1>
            <div className="timeline">
                <div className="left">

                </div>
                <div className="divide">
                    In progress
                </div>
                <div className="right">

                </div>
            </div>
            {/* <div className="timeline">
                <Chrono 
                    items={items}   
                    theme={{ 
                        primary: "blue",
                        secondary: "black",
                        cardBgColor: "rgb(248, 240, 227)",
                        cardForeColor: "black",
                        titleColor: "white"
                    }}
                    mode="VERTICAL_ALTERNATING"
                    scrollable="false"
                    useReadMore="false"
                    enableOutline="true"
                    hideControls="true"
                    borderLessCards="false"
                    disableNavOnKey="true"
                    allowDynamicUpdate="true"
                />
            </div> */}
        </div>
    )
}
