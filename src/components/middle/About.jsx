import "../middle../../../scss/styleOfcompondnts/MiddleScss/About.scss";

export function About(props) {
    const { name, lastName, icon, img, aboutUser } = props;
    return (
        <section className="about">
            <div className="infoWrapper">
                <h1>
                    I'm {name + " " + lastName}{" "}
                    <span className="h2style">Front-End </span>
                    Developer
                </h1>
                <p>{aboutUser}</p>
                <button type="submit">
                    HIRE ME <img src={icon} alt="" className="arrow" />
                </button>
            </div>
            <div className="imageDiv">
                <img src={img} alt="" />
            </div>
        </section>
    );
}
