import '../middle../../../scss/styleOfcompondnts/RightScss/sideBarRight.scss';

export function DarkmodeButton (props){
    const {icon, toggle} = props;
    return (
        <div className="modeButton">
            <img className="darkModeButtonColor"
                src={icon}
                alt="Dark Mode"
                onClick={toggle}
            />
    </div>
    )
}


