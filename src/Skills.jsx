import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Skills = () => {
    const cpp = [
        { title: "", value: 2, color: "white" },
        { title: "80%", value: 8, color: "#30231d" },
    ];
    const python = [
        { title: "", value: 3, color: "white" },
        { title: "70%", value: 7, color: "#30231d" },
    ];
    const flaskskill = [
        { title: "", value: 5, color: "white" },
        { title: "50%", value: 5, color: "#30231d" },
    ];
    const jsskill = [
        { title: "", value: 2.5, color: "white" },
        { title: "75%", value: 7.5, color: "#30231d" },
    ];
    const htmlskil = [
        { title: "", value: 1.5, color: "white" },
        { title: "85%", value: 8.5, color: "#30231d" },
    ];
    const cssskil = [
        { title: "", value: 3, color: "white" },
        { title: "70%", value: 7, color: "#30231d" },
    ];
    const bootskil = [
        { title: "", value: 5, color: "white" },
        { title: "50%", value: 5, color: "#30231d" },
    ];
    const reactskil = [
        { title: "", value: 2.5, color: "white" },
        { title: "75%", value: 7.5, color: "#30231d" },
    ];
    const tar = '_blank';
    return (
        <>
        <section id='skills'>
            <div className="skills">
                <h1 className="my_skills">My Skills</h1>
                <div className="skill_row">
                    <div style={{ marginTop: "70px" }}>
                        <div className="skill_col">
                            <PieChart
                                className="pie_div"
                                animate
                                animationDuration={500}
                                animationEasing="ease-in"
                                center={[50, 50]}
                                data={cpp}
                                lineWidth={30}
                                lengthAngle={360}
                                paddingAngle={0}
                                radius={20}
                                rounded
                                startAngle={-160}
                                viewBoxSize={[100, 100]}
                                labelStyle={{
                                    fontSize: "8px",
                                    fontColor: "FFFFFA",
                                    fontWeight: '600'
                                }}
                                label={(data) => data.dataEntry.title}
                                labelPosition={'center'}
                            />
                            <a href="https://www.coursera.org/account/accomplishments/certificate/NMBUP58HZBH9" target={tar}>
                                <h1 className="tech">C++</h1>
                            </a>
                        </div>
                        <div className="skill_col">
                            <PieChart
                                animate
                                animationDuration={500}
                                animationEasing="ease-in"
                                center={[50, 50]}
                                data={python}
                                lineWidth={30}
                                lengthAngle={360}
                                paddingAngle={0}
                                radius={20}
                                rounded
                                startAngle={-200}
                                viewBoxSize={[100, 100]}
                                labelStyle={{
                                    fontSize: "8px",
                                    fontColor: "FFFFFA",
                                    fontWeight: "600",
                                }}
                                label={(data) => data.dataEntry.title}
                                labelPosition={'center'}
                            />
                            <a href="https://www.hackerrank.com/certificates/iframe/2ad5e044813a" target={tar}>
                                <h1 className="tech">Python</h1>
                            </a>
                        </div>
                        <div className="skill_col">
                            <PieChart
                                animate
                                animationDuration={500}
                                animationEasing="ease-in"
                                center={[50, 50]}
                                data={flaskskill}
                                lineWidth={30}
                                lengthAngle={360}
                                paddingAngle={0}
                                radius={20}
                                rounded
                                startAngle={-270}
                                viewBoxSize={[100, 100]}
                                labelStyle={{
                                    fontSize: "8px",
                                    fontColor: "FFFFFA",
                                    fontWeight: "600",
                                }}
                                label={(data) => data.dataEntry.title}
                                labelPosition={'center'}
                            />
                            <a href="https://github.com/shruti01052002/ServiceWeb" target={tar}>
                                <h1 className="tech">Flask</h1>
                            </a>
                        </div>
                        <div className="skill_col">
                            <PieChart
                                animate
                                animationDuration={500}
                                animationEasing="ease-in"
                                center={[50, 50]}
                                data={jsskill}
                                lineWidth={30}
                                lengthAngle={360}
                                paddingAngle={0}
                                radius={20}
                                rounded
                                startAngle={-180}
                                viewBoxSize={[100, 100]}
                                labelStyle={{
                                    fontSize: "8px",
                                    fontColor: "FFFFFA",
                                    fontWeight: "600",
                                }}
                                label={(data) => data.dataEntry.title}
                                labelPosition={'center'}
                            />
                            <a href="https://www.freecodecamp.org/certification/fcc236cc598-a21c-419d-90d3-935868477f26/javascript-algorithms-and-data-structures" target={tar}>
                                <h1 className="tech">Javascript</h1>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="skill_row">
                    <div style={{ marginTop: "70px" }}>
                        <div className="skill_col">
                            <PieChart
                                animate
                                animationDuration={500}
                                animationEasing="ease-in"
                                center={[50, 50]}
                                data={htmlskil}
                                lineWidth={30}
                                lengthAngle={360}
                                paddingAngle={0}
                                radius={20}
                                rounded
                                startAngle={-140}
                                viewBoxSize={[100, 100]}
                                labelStyle={{
                                    fontSize: "8px",
                                    fontColor: "FFFFFA",
                                    fontWeight: '600'
                                }}
                                label={(data) => data.dataEntry.title}
                                labelPosition={'center'}
                            />
                            <a href="https://www.coursera.org/account/accomplishments/certificate/83WXDG6SPPLC" target={tar}>
                                <h1 className="tech">HTML</h1>
                            </a>
                        </div>
                        <div className="skill_col">
                            <PieChart
                                animate
                                animationDuration={500}
                                animationEasing="ease-in"
                                center={[50, 50]}
                                data={cssskil}
                                lineWidth={30}
                                lengthAngle={360}
                                paddingAngle={0}
                                radius={20}
                                rounded
                                startAngle={-190}
                                viewBoxSize={[100, 100]}
                                labelStyle={{
                                    fontSize: "8px",
                                    fontColor: "FFFFFA",
                                    fontWeight: "600",
                                }}
                                label={(data) => data.dataEntry.title}
                                labelPosition={'center'}
                            />
                            <a href="https://www.coursera.org/account/accomplishments/certificate/83WXDG6SPPLC" target={tar}>
                                <h1 className="tech">CSS</h1>
                            </a>
                        </div>
                        <div className="skill_col">
                            <PieChart
                                animate
                                animationDuration={500}
                                animationEasing="ease-in"
                                center={[50, 50]}
                                data={bootskil}
                                lineWidth={30}
                                lengthAngle={360}
                                paddingAngle={0}
                                radius={20}
                                rounded
                                startAngle={-270}
                                viewBoxSize={[100, 100]}
                                labelStyle={{
                                    fontSize: "8px",
                                    fontColor: "FFFFFA",
                                    fontWeight: "600",
                                }}
                                label={(data) => data.dataEntry.title}
                                labelPosition={'center'}
                            />
                            <a href="https://www.coursera.org/account/accomplishments/certificate/83WXDG6SPPLC" target={tar}>
                                <h1 className="tech">Bootstrap</h1>
                            </a>
                        </div>
                        <div className="skill_col">
                            <PieChart
                                animate
                                animationDuration={500}
                                animationEasing="ease-in"
                                center={[50, 50]}
                                data={reactskil}
                                lineWidth={30}
                                lengthAngle={360}
                                paddingAngle={0}
                                radius={20}
                                rounded
                                startAngle={-180}
                                viewBoxSize={[100, 100]}
                                labelStyle={{
                                    fontSize: "8px",
                                    fontColor: "FFFFFA",
                                    fontWeight: "600",
                                }}
                                label={(data) => data.dataEntry.title}
                                labelPosition={'center'}
                            />
                            <a href="https://github.com/shruti01052002/BuildBuddy" target={tar}>
                                <h1 className="tech">React.js</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
export default Skills;
