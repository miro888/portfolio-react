import "./scss/App.scss";
import person from "./userData/userInfo.json";

function App() {
    const { firstName, lastName, age, languages, skills, address, job } =
        person;
    console.log(languages);

    return (
        <div className="app">
            <div className="sidebar left">
                <div>
                    <p>First Name: {firstName} </p>
                    <p>Last Name: {lastName} </p>
                    <p>Age: {age} </p>
                    <p>Address: {address} </p>
                    <p>Job: {job} Developer </p>
                    <h2>Languages:</h2>
                    {languages.map((lang, index) => {
                        return (
                            <div key={index}>
                                {lang.language + ": Level " + lang.level + "%"}
                            </div>
                        );
                    })}
                </div>

                <div>
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
            </div>
            <div className="middle">wall</div>
            <div className="sidebar right">navigation</div>
        </div>
    );
}

export default App;
