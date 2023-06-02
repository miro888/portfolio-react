import '../middle../../../scss/App.scss';

export function About (props) {
    const {name,lastName, icon, img } = props
    return (
        <section className="about">
        <div className="infoWrapper">
            <h1>
                I'm {name + " " + lastName}{" "}
                <span className="h2style">Front-End </span>
                Developer
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquam eaque eos similique suscipit? Ab
                doloremque soluta sunt sed illum culpa, maiores
                excepturi, asperiores consequatur incidunt modi
                voluptatibus facilis, assumenda itaque.
            </p>
            <button type="submit">
                HIRE ME <img src={icon} alt="" className="arrow" />
            </button>
        </div>
        <div className="imageDiv">
            <img src={img} alt="" />
        </div>
    </section>
    )
}