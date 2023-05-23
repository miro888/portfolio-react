import "./scss/App.scss";
import person from "./userData/userInfo.json";

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
        job,
        extraSkills,
        userImage,
    } = person;
    console.log(languages);

    return (
        <div className="app">
            <div className="sidebarLeft">
                <div>
                    <img src={userImage} alt={firstName + lastName} />
                    <p>{firstName + " " + lastName}</p>
                    <p>Front-End developer</p>
                </div>

                <div className="personInfo">
                    <div className="ageDiv">
                        <span className="ageInfo">Age:</span>
                        <span className="ageStyle">{age}</span>
                    </div>
                    <p className="residenceInfo">Residence: {residence}</p>
                    <p className="freelanceInfo">Freelance: {freelance}</p>
                    <p className="addressInfo">Address: {address} </p>
                    <p className="jobInfo">Job: {job} Developer </p>
                </div>

                <div className="langInfo">
                    <h2>Languages:</h2>
                    {languages.map((lang, index) => {
                        return (
                            <div key={index}>
                                {lang.language + ": Level " + lang.level + "%"}
                            </div>
                        );
                    })}
                </div>

                <div className="skillsInfo">
                    <h2>Skills:</h2>
                    {skills.map((skills, index) => {
                        return (
                            <div key={index}>
                                {skills.language +
                                    ": Level " +
                                    skills.level +
                                    "%;"}
                            </div>
                        );
                    })}
                </div>

                <div className="extraSkillsInfo">
                    <h2>Extra Skills</h2>
                    {extraSkills.map((skills, index) => {
                        return <div key={index}>{skills.icon}</div>;
                    })}
                </div>

                <div>
                    <button id="downloadCv">DOWNLOAD CV</button>
                </div>
            </div>
            <div className="middle">wall</div>
            <div className="sidebar right">navigation</div>
        </div>
    );
}

export default App;
