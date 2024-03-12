import { useEffect, useState } from "react";
import "./App.css";
import DynamicTable from "./components/DynamicTable";
import ImageComponent from "./components/ImageComponent";

function App() {
    const [data, setData] = useState([]);
    const [imgData, setImg] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://gist.githubusercontent.com/krishna1234/94a8746a241ec6784a4c694d10c6d915/raw/ede7cfc8c6f003f610a74ce6968d8b3b079ffc42/gistfile1.txt"
            );
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchImg = async () => {
        try {
            const response = await fetch(
                "https://api.slingacademy.com/v1/sample-data/products?limit=1000"
            );
            const result = await response.json();
            setImg(result);
        } catch (error) {
            console.error("Error Fetching data", error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchImg();
    }, []);

    return (
        <div>
            <center>
                <h1>API Data Table</h1>
            </center>
            <DynamicTable data={data} />
            <ImageComponent data={imgData && imgData.products} />
        </div>
    );
}

export default App;
