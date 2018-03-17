import React from "react";
import "./ProjCard.css";

const ProjCard = props => (
//   <div className="card">
//     <div className="img-container">
//       <img alt={props.name} src={props.image}   />
//     </div>
//     <div className="card-content">
//       <ul>
//         <li>
//           <strong>Name:</strong> {props.name}
//         </li>
//         <li>
//           <strong>Build:</strong> {props.Build}
//         </li>
//       </ul>
//     </div>
    
//   </div>


<div className="card" >
  <img className="card-img-top" src={props.image} alt="Card img cap" />
  <div className="card-body">
  <h5 className="card-title"><strong>Project:</strong> {props.project}</h5>
    <p className="card-text"><strong>Build:</strong> {props.Build}</p>
    
  </div>
  
</div>

);

export default ProjCard;