import React from "react";
import Line from './images/line.png';
import Line2 from './images/line2.png';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const tar='_blank';
    return (
        <>
            <section id="projects">
                <div className="proj_div">
                    <div className="edu">
                        <div className="half">
                            <Fade top>
                                <h1 className="my_ed">My Education</h1>
                            </Fade>
                            <div className="edu_cont">
                                <Fade top>
                                    <div className="cont">
                                        <div className="col_cont">
                                            <div className="edu_year">
                                                <h3 className="year">2019-23</h3>
                                            </div>
                                        </div>

                                        <div className="col_cont">
                                            <div className="qual">
                                                <h2 className="qual_text">ABES ENEGINEERING COLLEGE</h2>
                                                <h3 className="qual_text">BTech: Computer Science</h3>
                                                <h3 className="qual_text">CGPA: 8.5</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade top>
                                    <div className="cont">
                                        <div className="col_cont">
                                            <div className="edu_year">
                                                <h3 className="year">2019-23</h3>
                                            </div>
                                        </div>
                                        <div className="col_cont">
                                            <div className="qual">
                                                <h2 className="qual_text">GREEN LAND PUBLIC SCHOOL</h2>
                                                <h3 className="qual_text">Intermediate</h3>
                                                <h3 className="qual_text">Percentage: 90.4%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade top>
                                    <div className="cont">
                                        <div className="col_cont">
                                            <div className="edu_year">
                                                <h3 className="year">2019-23</h3>
                                            </div>
                                        </div>
                                        <div className="col_cont">
                                            <div className="qual">
                                                <h2 className="qual_text">GREEN LAND PUBLIC SCHOOL</h2>
                                                <h3 className="qual_text">High School</h3>
                                                <h3 className="qual_text">CGPA: 10</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="vl"></div>
                    <div className="edu">
                        <div className="half">
                            <h1 className="my_ed">My Projects</h1>
                            <div className="edu_cont">
                                <Fade top>
                                    <div className="cont">
                                        <div className="edu_year">
                                            <h3 className="year">2020</h3>
                                        </div>
                                        <div className="col_cont">
                                            <div className="qual">
                                                <a href="https://github.com/shruti01052002/codehers" target={tar}><h2 className="qual_text">TRANSGENDER CONFIDENCE </h2></a>
                                                <h3 className="qual_text">Technology: HTML, CSS, Bootstrap, Flask</h3>
                                                <p className="qual_para">A website for transgender community where they can find various opportunities in their domain</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade top>
                                    <div className="cont">
                                        <div className="edu_year">
                                            <h3 className="year">2022-23</h3>
                                        </div>
                                        <div className="col_cont">
                                            <div className="qual">
                                            <a href="https://github.com/shruti01052002/BuildBuddy" target={tar}><h2 className="qual_text">
                                            BUILD BUDDY </h2></a>
                                                <h3 className="qual_text">Technology: HTML, CSS, React.js</h3>
                                                <p className="qual_para">A one stop solution for all the Construction Needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade top>
                                    <div className="cont">
                                        <div className="edu_year">
                                            <h3 className="year">2020</h3>
                                        </div>
                                        <div className="col_cont">
                                            <div className="qual">
                                            <a href="https://github.com/shruti01052002/pizza-web" target={tar}><h2 className="qual_text">
                                            PIZZA WEB </h2></a>
                                                <h3 className="qual_text">Technology: HTML, CSS, React.js, Javascript</h3>
                                                <p className="qual_para">A Frontend Application for displaying Pizza Services</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lines">
                    <div className="img_div" style={{ float: 'left', margin: '0' }}><img src={Line} alt="line" className="line_img" /></div>
                    <div className="img_div1"><img src={Line2} alt="line2" className="line_img" /></div>
                </div>
            </section>
        </>
    );
}

export default Projects;