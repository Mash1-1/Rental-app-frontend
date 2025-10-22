import "./rental.css";
import RentalButton from "./RentalButton";
import RentalImage from "./RentalImage";

function RentalCard({
    title = "",
    itemImagePath = "/images.jpg",
    price = 0,
    description = "lorem ipsum is a placeholder",
}) {
    return (
        <div className="container">
            <h1 className="rental-title">
                <b>{title}</b>
            </h1>
            <RentalImage itemImagePath={itemImagePath} />
            <p>Price : {price}</p>
            <p className="rental-description">
                Desciption : <br /> {description}
            </p>
            <RentalButton />
        </div>
    );
}

export default RentalCard;

// Fix image
