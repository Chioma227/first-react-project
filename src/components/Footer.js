import React from "react";
import image from '../images/bulb.png'
import image2 from '../images/carrot.png'
import image3 from '../images/number-8 (1).png'

console.log(image)

export default function Footer(){
    return(
        <div>
            <div className="wrapper">
                <div className="item1">
                     <div>
                         <img src ={image} alt="idea" id="idea"/>
                        <h2>
                            Intuitive Thinking
                        </h2>
                        <p>
                            Lorem ipsum dolor amnet dolors itLorem ipsum <br/>
                             dolor sit amet consectetur adipisicing elit. Mollitia des<br/> moliinas
                           
                        </p>
                     </div>
                </div>
                <div className="item1">
                     <div>
                         <img src ={image2} alt="idea" id="carrot"/>
                        <h2>
                            Orange for Carrots
                        </h2>
                        <p>
                            Lorem ipsum dolor amnet dolors itLorem ipsum <br/>
                             dolor sit amet consectetur adipisicing elit. Mollitia dese<br/> moliinas
                           
                        </p>
                     </div>
                </div>
                <div className="item1">
                     <div>
                         <img src ={image3} alt="idea" id="number8"/>
                        <h2>
                           Infinite Poremipsum
                        </h2>
                        <p>
                            Lorem ipsum dolor amnet dolors itLorem ipsum <br/>
                             dolor sit amet consectetur adipisicing elit. Mollitia des<br/> moliinas
                            
                        </p>
                     </div>
                </div>
            </div>
        </div>
    )
}