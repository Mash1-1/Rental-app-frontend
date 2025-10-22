import { useState } from "react";
import "./rental.css";

function RentalCard({ title = "", itemImagePath = "../assets/react.svg" }) {
    let [count, setCount]: [number, any] = useState(1);

    function handleRent() {
        setCount(count + 1);
    }

    return (
        <div className="container">
            <p>{title}</p>
            <p>{count}</p>
            <img className="rental-image" src={itemImagePath} alt="img1" />
            <br />
            <button onClick={handleRent} className="rental-button">
                Rent
            </button>
        </div>
    );
}

export default RentalCard;

// Fix image
