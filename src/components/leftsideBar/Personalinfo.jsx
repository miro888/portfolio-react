import '../../scss/styleOfcompondnts/LeftScss/Personalinfo.scss';

export function Personalinfo (props) {
    const {age, residence, jobtype, location, work} = props;
    return (
        <div className="personInfo">
            <div className="personInfoDiv">
                <span className="ageInfo">Age :</span>
                <span className="ageStyle">{age}</span>
            </div>
            <div className="personInfoDiv">
                <span className="residenceInfo">Residence :</span>
                <span className="residenceStyle">{residence}</span>
            </div>
            <div className="personInfoDiv">
                <span className="freelanceInfo">Freelance :</span>
                <span className="freelanceStyle">{jobtype}</span>
            </div>
            <div className="personInfoDiv">
                <span className="addressInfo">Address :</span>
                <span className="addressStyle">{location}</span>
            </div>
            <div className="personInfoDiv">
                <span className="jobInfo">Job :</span>
                <span className="jobStyle">{work}</span>
            </div>
        </div>
    )
}