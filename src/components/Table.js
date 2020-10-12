import React, { useMemo, useState } from "react";
import trimmed_keypoints from "../data/trimmed_keypoints.json";
import Filter from "./Filter";
function Table() {
    // You can use below imageMap to poppulate data, it wont contain any duplicate images
    const images = useMemo(() => {
        const imageMap = new Map();
        trimmed_keypoints.images.forEach((item) => {
            imageMap.set(item.id, item);
        });
        return imageMap
    }, [trimmed_keypoints.images]);
    // const [images] = useState(trimmed_keypoints.images);
    // const [attributesName] = useState(Object.keys(images[0]));
    const [attributesName] = useState(Object.keys(images.values().next().value));

    const [showFilter, setShowFilter] = useState(false);
    console.log(attributesName);
    function handleFilterClick() {
        setShowFilter(true);
    }
    return (
        <>
            <div className="main-buttons">
                <button onClick={handleFilterClick}> Filter </button>

                <button>Sorting</button>
                <button>Display Setting </button>
                {showFilter && <Filter />}
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            {attributesName.map((attribute) => {
                                return <th key={attribute}> {attribute} </th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(images.values()).map((image) => {
                            return (
                                <tr key={image.id}>
                                    {attributesName.map((attribute) => {
                                        if (
                                            attribute === "coco_url" ||
                                            attribute === "flickr_url"
                                        )
                                            return (
                                                <td>
                                                    {" "}
                                                    <img
                                                        src={image[attribute]}
                                                        alt={attribute}
                                                        height="200"
                                                        width="200"
                                                    />{" "}
                                                </td>
                                            );
                                        else
                                            return (
                                                <td> {image[attribute]} </td>
                                            );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
