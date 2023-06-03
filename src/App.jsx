import "./scss/App.scss";
import './scss/styleOfcompondnts/Dark-Mode/dark-mode.scss';

import person from "./userData/userInfo.json";
import fb from "./images/fb.svg";
import icon from "./images/icon.svg";
import insta from "./images/insta.svg";
import linkdin from "./images/linkdin.svg";
import tweet from "./images/tweet.svg";
import yt from "./images/yt.svg";
import square from "./images/square.svg";
import download from "./images/icon-download.svg";
import draft1 from "./images/draft1.svg";
import draft2 from "./images/draft2.svg";
import draft3 from "./images/draft3.svg";
import draft4 from "./images/draft4.svg";
import draft5 from "./images/draft5.svg";
import draft6 from "./images/draft6.svg";
import draft7 from "./images/draft7.svg";
import arrow from "./images/arrow.svg";
// import development from "./images/development.svg";
// import illustrarion from "./images/illustration.svg";
// import Photographer from "./images/Photographer.svg";
import coding from "./images/coding.svg";
import { useState } from "react";
import {Buttondiv, ExtraSkills, Languageinfo, Skills, LeftsideBar, Personalinfo, Socialicons} from "./components/leftsideBar";
import { About, Education, Myservices } from "./components/middle";
import { DarkmodeButton, Icons } from "./components/rightsideBar";





function App() {
    const [darkMode, setdarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : 'false';
      });
    const toggledarkMode = () => {
        setdarkMode(!darkMode);
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
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
        job,
        resumeURL,
        extraSkills,
        userImage,
        social,
        userImage1,
        myServices,
        services,
        education,
    } = person;


    return (
        <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
                <div className="sidebarLeft">
                    <LeftsideBar img={userImage} name={firstName} lastName={lastName} />
                    <Socialicons link={social.url} icon_1={fb}  icon_2={insta} icon_3={tweet} icon_4={linkdin} icon_5={yt} icon_6={icon}  />
                    <Personalinfo age={age} residence={residence} jobtype={freelance} location={address} work={job} />
                    <Languageinfo  langs={languages} />
                    <Skills langs={skills} />
                    <ExtraSkills skills={extraSkills} img={square} />
                    <Buttondiv cvUrl={resumeURL} img={download} />
                </div>
                <div className="middle">
                    <About name={firstName} lastName={lastName} icon={arrow} img={userImage1} />
                    <Myservices myservice={myServices} todoservices={services} img={coding}  />
                    <Education study={education}/>
                </div>

                <div className="sideBarRight">
                    <DarkmodeButton icon={draft7} toggle={toggledarkMode} />
                    <Icons icon_1={draft1} icon_2={draft2} icon_3={draft3} icon_4={draft4} icon_5={draft5} icon_6={draft6}  />
                </div>
        </div>
    );
    
}
export default App;
