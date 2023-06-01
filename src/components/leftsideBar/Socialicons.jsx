import '../LeftsideBar../../../scss/App.scss';

export function Socialicons (props) {
    const {Link,icon_1,icon_2,icon_3,icon_4,icon_5,icon_6} = props;
    
return(
    <div className="socIcons">
                    <div className="iconDiv" onClick={Link}>
                        <a href={Link} target="_blank" rel="noreferrer">
                            <img src={icon_1} alt="Icon" />
                        </a>
                    </div>

                    <div className="iconDiv">
                        <img src={icon_2} alt="Icon" />
                    </div>
                    <div className="iconDiv">
                        <img src={icon_3} alt="Icon" />
                    </div>
                    <div className="iconDiv">
                        <img src={icon_4} alt="Icon" />
                    </div>
                    <div className="iconDiv">
                        <img src={icon_5} alt="Icon" />
                    </div>
                    <div className="iconDiv">
                        <img src={icon_6} alt="Icon" />
                    </div>
                </div>

)
}