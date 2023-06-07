import "../middle../../../scss/styleOfcompondnts/MiddleScss/Myservices.scss";

export function Myservices(props) {
    const { myservice, advertice, todoservices, img } = props;

    return (
        <section className="myServices" id="MyServices">
            <h2>My Services</h2>
            <p>{myservice}</p>
            <div className="cardsWrapper">
                <div className="cards">
                    {todoservices.map((service, index) => (
                        <div key={index} className="serviceCard">
                            <img src={img} alt="Web Development" />
                            <p className="cardTitle">{service.title}</p>
                            <p className="cardParagraph">
                                {service.description}
                            </p>
                        </div>
                    ))}
                    <div className="serviceCard">
                        {/* <div className="levani"> */}
                        <p className="tamra">{advertice.title}</p>
                        <p className="niniko">{advertice.desscription}</p>
                        <a className="sopio" href="##">
                            {advertice.orderlink}
                        </a>
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </section>
    );
}
