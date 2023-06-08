import "../middle../../../scss/styleOfcompondnts/MiddleScss/Myservices.scss";

export function Myservices(props) {
    const { myservice, todoservices } = props;

    return (
        <section className="myServices" id="MyServices">
            <h2>My Services</h2>
            <p>{myservice}</p>
            <div className="cardsWrapper">
                <div className="cards">
                    {todoservices.map((service, index) => (
                        <div key={index} className="serviceCard">
                            <img src={service.iconPath} alt="Web Development" />
                            <p className="cardTitle">{service.title}</p>
                            <p className="cardParagraph">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
