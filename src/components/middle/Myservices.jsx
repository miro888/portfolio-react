import '../middle../../../scss/styleOfcompondnts/MiddleScss/Myservices.scss'

export function Myservices(props) {
    const {myservice, todoservices, img} = props;
    return (
        <section className="myServices">
        <h2>My Services</h2>
        <p>{myservice}</p>
        <div className="cardsWrapper">
            <div className="cards">
                {todoservices.map((services, index) => {
                    return (
                        <div key={index} className="serviceCard">
                            <img
                                src={img}
                                alt="Web Development"
                            />
                            <p className="cardTitle">
                                {services.title}
                            </p>
                            <p className="cardParagraph">
                                {services.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    )
}