import "../middle../../../scss/styleOfcompondnts/RightScss/sideBarRight.scss";

export function Icons(props) {
    const { icon_1, icon_2, icon_3, icon_4, icon_5, icon_6 } = props;
    return (
        <div className="icons">
            <div className="iconWrapper">
                <a href="#about">
                    <img src={icon_1} alt="" className="activeIcons" />
                </a>
            </div>
            <div className="iconWrapper">
                <a href="#MyServices">
                    {" "}
                    <img src={icon_2} alt="" className="activeIcons" />
                </a>
            </div>

            <div className="iconWrapper">
                <a href="#Education">
                    <img src={icon_3} alt="" className="activeIcons" />
                </a>
            </div>

            <div className="iconWrapper">
                <a href="#Job">
                    <img src={icon_4} alt="" className="activeIcons" />
                </a>
            </div>
            <div className="iconWrapper">
                <a href="#contactInfo">
                    <img src={icon_5} alt="" className="activeIcons" />
                </a>
            </div>

            <div className="iconWrapper">
                <a href="#Feedback">
                    <img src={icon_6} alt="" className="activeIcons" />
                </a>
            </div>
        </div>
    );
}
