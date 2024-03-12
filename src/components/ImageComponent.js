import * as React from "react";

export default function ImageComponent(imgData) {
    return (
        <div>
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
                    imgData.data &&
                    imgData.data.map((imgdata) => (
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
