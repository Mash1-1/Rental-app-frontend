import { useState } from "react";
import "./rental.css";

function RentalCard({ title = "", itemImagePath = "../assets/react.svg" }) {
    let [count, setCount]: [number, any] = useState(1);

    function handleRent() {
        setCount(count + 1);
    }

    return (
        <div className="container">
            <div className="title">
            <p>{title}</p>
            <p>{count}</p>
            </div>
            <div className="img-container">
                <img className="rental-image" src={itemImagePath} alt="img1" />
            </div>
            <button onClick={handleRent} className="rental-button">
                Rent
            </button>
        </div>
    );
}

export default RentalCard;

// Fix image
