import "./scss/App.scss";
import "./scss/styleOfcompondnts/Dark-Mode/dark-mode.scss";
import "./scss/styleOfcompondnts/LeftScss/sidebarLeft.scss";

// import person from "./userData/userInfo.json";
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
import { useEffect, useState } from "react";
import {
    Buttondiv,
    ExtraSkills,
    Languageinfo,
    Skills,
    LeftsideHeader,
    Personalinfo,
    Socialicons,
} from "./components/leftsideBar";
import { About, ContactForm, Education, Myservices } from "./components/middle";
import { DarkmodeButton, Icons } from "./components/rightsideBar";

function App() {
    const [darkMode, setdarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        return storedDarkMode ? JSON.parse(storedDarkMode) : "false";
    });
    const [userInfo, setUserInfo] = useState(null)

    async function setVars(data) {

        setUserInfo(await data)
        console.log(data)
    }

    const toggledarkMode = () => {
        setdarkMode(!darkMode);
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    };
    // const {
    //     firstName,
    //     lastName,
    //     residence,
    //     freelance,
    //     age,
    //     languages,
    //     skills,
    //     address,
    //     job,
    //     resumeURL,
    //     extraSkills,
    //     userImage,
    //     social,
    //     userImage1,
    //     myServiceDescription,
    //     services,
    //     education,
    //     contactinfo,
    //     aboutUser,
    //     shapes,
    // } = person;
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Gkhundadze/staticFiles/main/personInfo.json')
            .then((res) => {
                return res.json()
            })
            .then((response) => {
                setVars(response)
            })
    }, [])
    return (
        <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
            {userInfo !== null ?
                <>
                    <div className="sidebarLeft">
                        <LeftsideHeader
                            img={userInfo.userImage}
                            name={userInfo.firstName}
                            lastName={userInfo.lastName}
                            freelanceStatus={userInfo.freelance}
                        />
                        <Socialicons
                            link={userInfo.social.url}
                            icon_1={fb}
                            icon_2={insta}
                            icon_3={tweet}
                            icon_4={linkdin}
                            icon_5={yt}
                            icon_6={icon}
                        />
                        <Personalinfo
                            age={userInfo.age}
                            residence={userInfo.residence}
                            jobType={userInfo.freelance}
                            location={userInfo.address}
                            work={userInfo.job}
                        />
                        <Languageinfo langs={userInfo.languages} />
                        <Skills langs={userInfo.skills} />
                        <ExtraSkills skills={userInfo.extraSkills} img={square} />
                        <Buttondiv cvUrl={userInfo.resumeURL} img={download} />
                    </div>
                    <div className="middle">
                        <About
                            name={userInfo.firstName}
                            lastName={userInfo.lastName}
                            icon={arrow}
                            img={userInfo.userImage1}
                            aboutUser={userInfo.aboutUser}
                            shapes={userInfo.shapes}
                        />
                        <Myservices
                            myservice={userInfo.myServiceDescription}
                            todoservices={userInfo.services}
                        />
                        <Education study={userInfo.education} />
                        <ContactForm info={userInfo.contactinfo} />
                    </div>
                    <div className="sideBarRight">
                        <DarkmodeButton icon={draft7} toggle={toggledarkMode} />
                        <Icons
                            icon_1={draft1}
                            icon_2={draft2}
                            icon_3={draft3}
                            icon_4={draft4}
                            icon_5={draft5}
                            icon_6={draft6}
                        />
                    </div>
                </>
                : null
            }
        </div>
    );
}
export default App;
