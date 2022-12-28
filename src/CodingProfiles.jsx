import React from "react";
import ImageSlider from "./ImageSlider";

const CodingProfiles = () => {
    return (
        <>
            <section id="profiles">
                <div className="code_div">
                    <h1 className="my_skills">My Coding Profile</h1>
                    <div style={{ marginTop: "100px" }}>
                        <ImageSlider />
                    </div>
                </div>
            </section>
        </>
    );
}
export default CodingProfiles;