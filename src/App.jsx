import "./scss/App.scss";

import person from "./userData/userInfo.json";
import fb from "./images/fb.svg";
import icon from "./images/icon.svg";
import insta from "./images/insta.svg";
import linkdin from "./images/linkdin.svg";
import tweet from "./images/tweet.svg";
import yt from "./images/yt.svg";
import square from "./images/square.svg";
import download from "./images/download.png";
import draft1 from "./images/draft1.svg";
import draft2 from "./images/draft2.svg";
import draft3 from "./images/draft3.svg";
import draft4 from "./images/draft4.svg";
import draft5 from "./images/draft5.svg";
import draft6 from "./images/draft6.svg";
import draft7 from "./images/draft7.svg";
import arrow from "./images/arrow.svg";
import { useState } from "react";

function App() {
    const [darkMode, setdarkMode] = useState(false);
    const toggledarkMode = () => {
        setdarkMode(!darkMode);
    };
    const {
        firstName,
        lastName,
        residence,
        freelance,
        age,
        languages,
        skills,
        address,
        // job,
        extraSkills,
        userImage,
        social,
        userImage1,
    } = person;
    // console.log(languages);

    return (
        <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
            <div className="sidebarLeft">
                <div className="sidebarHead">
                    <img
                        src={userImage}
                        alt={firstName + lastName}
                        className="personImage"
                    />
                    <p className="fullname">{firstName + " " + lastName}</p>
                    <p>Front-End developer</p>
                </div>
                <div className="socIcons">
                    <div className="iconDiv">
                        <a href="www.google.com" target="leng">
                            {" "}
                            <img src={fb} alt="Icon" />{" "}
                        </a>
                    </div>

                    <div className="iconDiv">
                        <img src={insta} alt="Icon" />
                    </div>
                    <div className="iconDiv">
                        <img src={tweet} alt="Icon" />
                    </div>
                    <div className="iconDiv">
                        <img src={linkdin} alt="Icon" />
                    </div>
                    <div className="iconDiv">
                        <img src={yt} alt="Icon" />
                    </div>
                    <div className="iconDiv">
                        <img src={icon} alt="Icon" />
                    </div>
                </div>

                <div className="personInfo">
                    <div className="personInfoDiv">
                        <span className="ageInfo">Age:</span>
                        <span className="ageStyle">{age}</span>
                    </div>
                    <div className="personInfoDiv">
                        <span className="residenceInfo">Residence:</span>
                        <span className="residenceStyle">{residence}</span>
                    </div>
                    <div className="personInfoDiv">
                        <span className="freelanceInfo">Freelance:</span>
                        <span className="freelanceStyle">{freelance}</span>
                    </div>
                    <div className="personInfoDiv">
                        <span className="addressInfo">Address:</span>
                        <span className="addressStyle">{address}</span>
                    </div>
                    {/* <div className="personInfoDiv">
                        <span className="jobInfo">Job:</span>
                        <span className="jobStyle">{job}</span>
                    </div> */}
                </div>

                <div className="langInfo">
                    <h2>Languages:</h2>
                    {languages.map((lang, index) => {
                        return (
                            <div key={index} className="lang">
                                <div className="languageLevel">
                                    <span>{lang.language} </span>{" "}
                                    <span> {lang.level + "%"}</span>
                                </div>

                                <div
                                    className="lines"
                                    style={{
                                        border: "0.5px solid  #ffb400 ",
                                        maxWidth: "100",
                                        borderRadius: "25",
                                    }}
                                >
                                    <div
                                        className="percentOflines"
                                        style={{
                                            border: "1px solid  #ffb400 ",
                                            width: lang.level + "%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="skillsInfo">
                    <h2>Skills:</h2>
                    {skills.map((skills, index) => {
                        return (
                            <div key={index} className="lang">
                                <div className="languageLevel">
                                    <span>{skills.language} </span>{" "}
                                    <span> {skills.level + "%"}</span>
                                </div>

                                <div
                                    className="lines"
                                    style={{
                                        border: "0.5px solid  #ffb400 ",
                                        maxWidth: "100",
                                        borderRadius: "25",
                                    }}
                                >
                                    <div
                                        className="percentOflines"
                                        style={{
                                            border: "1px solid   #ffb400 ",
                                            width: skills.level + "%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="extraSkillsInfo">
                    <h2>Extra Skills</h2>
                    {extraSkills.map((skills, index) => {
                        return (
                            <div key={index} className="extraSkils">
                                <>
                                    <img src={square} alt="" id="square" />
                                </>
                                {skills.icon}
                            </div>
                        );
                    })}
                </div>

                <div className="buttonDiv">
                    <button id="downloadCv">
                        DOWNLOAD CV
                        <img
                            src={download}
                            alt="download cv button"
                            className="downloadIcon"
                        />
                    </button>
                </div>
            </div>
            <div className="middle">
                <div className="infoWrapper">
                    <h2>
                        I'm {firstName + " " + lastName}{" "}
                        <span className="h2style">Front-End </span>
                        Developer
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam eaque eos similique suscipit? Ab doloremque
                        soluta sunt sed illum culpa, maiores excepturi,
                        asperiores consequatur incidunt modi voluptatibus
                        facilis, assumenda itaque.
                    </p>
                    <button type="submit">
                        HIRE ME <img src={arrow} alt="" className="arrow" />
                    </button>
                </div>
                <div className="imageDiv">
                    <img src={userImage1} alt="" />
                </div>
            </div>
            <div className="sideBarRight">
                <div className="modeButton">
                    <img
                        src={draft7}
                        alt="Dark Mode"
                        onClick={toggledarkMode}
                    />
                </div>
                <div className="icons">
                    <div className="home">
                        <img src={draft1} alt="" className="activeHome" />
                    </div>
                    <div className="iconWrapper">
                        <img src={draft2} alt="" className="activeIcons" />
                    </div>

                    <div className="iconWrapper">
                        <img src={draft3} alt="" className="activeIcons" />
                    </div>

                    <div className="iconWrapper">
                        <img src={draft4} alt="" className="activeIcons" />
                    </div>
                    <div className="iconWrapper">
                        <img src={draft5} alt="" className="activeIcons" />
                    </div>

                    <div className="iconWrapper">
                        <img src={draft6} alt="" className="activeIcons" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
