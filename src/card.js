import React,{useState, useEffect} from 'react';
import Search from "./search";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import axios from "axios";

const Card = () => {
    const [state, setstate] = useState([]);
    const [search, setsearch] = useState([]);
    const [usage, setusage] = useState([]);

    useEffect(() => {
       axios.get("https://www.food2fork.com/api/search?key=173fc3ebe24f30ed139cffcd55b8bef6&q=chicken%20breast&page=2")
       .then((res)=>{
           console.log(res)
           setstate(res.data.recipes);
       })
       .catch((e)=>{
           console.log(e);
       })
    }, [])

    
    return (
        console.log(state),
        <div>
        <div className="container">
        <form name="form">
        <input type="text" placeholder="search recepies" name="recepie" />
        <input type="button" value="search" name="submit"/>
       </form>
          <hr/>
          </div>
         <ul>
               {state.map((item,i)=>{
                   return (
                     <div>
                       <li key={i}>
                         <div className="card">
                           <div className="card-image">
                             <figure className="image is-4by3">
                               <img
                                 src={item.image_url}
                                 alt="Placeholder image"
                               />
                             </figure>
                            </div>
                           
                            <div className="card-content">
                                       <div className="media">
                                        
                                         <div className="media-content">
                                           <p>{item.title}</p>
                                          
                                         </div>
                                       </div>
                           </div>

                         </div>
                       </li>
                     </div>
                   );
               })}
            </ul>
        </div>
    );
};

export default Card;


