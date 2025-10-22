import Header from "./rental-components/header/Header";
import RentalCard from "./rental-components/RentalCard";
import SearchBar from "./rental-components/Search bar/SearchBar";

function App() {
    return (
        <>
            <Header/>
            <SearchBar/>
            <RentalCard title="Hello" />
        </>
    );
}

export default App;
