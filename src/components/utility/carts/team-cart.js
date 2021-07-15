import React,{useState} from "react";

export function TeamCart(props) {
    const [person,setperson] = useState(props.person);
  return (
    <div className="card mb-2 shadow team-card">
      <img
        className="card-img-top"
        src={person.img}
        width="500"
        height="200"
        alt="Card image cap"
      />
      <div className="card-body ">
        <h4 className="card-title p-text">{person.name}</h4>
        <p className="card-text ">
            {person.disc}
        </p>
      </div>
    </div>
  );
}
