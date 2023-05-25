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

function App() {
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
    } = person;
    // console.log(languages);

    return (
        <div className="app">
            <div className="sidebarLeft">
                <div>
                    <img
                        src={userImage}
                        alt={firstName + lastName}
                        className="personImage"
                    />
                    <p>{firstName + " " + lastName}</p>
                    <p>Front-End developer</p>
                </div>
                <div className="socIcons">

                    <div className="iconDiv">
                        <a href='www.google.com' target="leng"> <img src={fb}  alt="Icon" /> </a>
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
                                <span>{lang.language} </span>       <span> {lang.level + "%"}</span> 
                                </div>

                                <div className="lines" style={{ border:'0.5px solid  #ffb400 ', maxWidth:'100' , borderRadius:'25' }} >
                                

                                    <div className="percentOflines" style={{border:'1px solid   #ffb400 ', width:lang.level}}>
                                        
                                    </div>
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
                                <span>{skills.language} </span>       <span> {skills.level + "%"}</span> 
                                </div>

                                <div className="lines" style={{ border:'0.5px solid  #ffb400 ', maxWidth:'100' , borderRadius:'25' }} >
                                

                                    <div className="percentOflines" style={{border:'1px solid   #ffb400 ', width:skills.level}}>
                                        
                                    </div>
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
                    <button  id="downloadCv">
                        DOWNLOAD CV
                        <img src={download} alt="" className="downloadIcon" />
                    </button>
                </div>
            </div>
            <div className="middle">wall</div>
            <div className="sidebar right">navigation</div>
        </div>
    );
}

export default App;
