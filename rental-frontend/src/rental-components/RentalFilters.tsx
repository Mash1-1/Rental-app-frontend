import "./rentalFilter.css";
function RentalFilters({ opts = ["a", "b", "c"] }) {
    const new_options = opts.map((elem, idx) => {
        return (
            <option key={idx.toString()} className="filter-option" value={idx}>
                {elem}
            </option>
        );
    });
    return <select className="filter-container">{new_options}</select>;
}

export default RentalFilters;
