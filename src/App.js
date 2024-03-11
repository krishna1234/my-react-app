import { useEffect, useState } from "react";
import "./App.css";
import DynamicTable from "./components/DynamicTable";

function App() {
    const [data, setData] = useState([]);
    const [imgData, setImg] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://gist.githubusercontent.com/krishna1234/94a8746a241ec6784a4c694d10c6d915/raw/c2ab14129870ae016e8bdc42b38e0dc6d0837177/gistfile1.txt"
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
            <center>
                <h1>Images</h1>
            </center>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                }}
            >
                {imgData &&
                    imgData.products &&
                    imgData.products.map((imgdata) => (
                        <div
                            key={imgdata.id}
                            style={{ flex: "0 0 calc(33.33% - 50px)" }}
                        >
                            {console.log(imgdata)}
                            <img
                                src={imgdata.photo_url}
                                alt="."
                                width={350}
                                height={350}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default App;
