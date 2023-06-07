import "../../scss/styleOfcompondnts/MiddleScss/ContactForm.scss";
import "../../images/Microphone.svg";
// import '../../images/ContactFormICONS/Dot.svg'
// import '../../images/ContactFormICONS/Email.svg';
// import'../../images/ContactFormICONS/Flag.svg';

export function ContactForm(props) {
    const { info } = props;
    return (
        <div className="containerForm" id="contactInfo">
            <div className="formHeading">
                <h2>Leave us your info</h2>
                <h2>Contact information</h2>
            </div>
            <div className="mainContainer">
                <form className="cardLeft">
                    <label for="name">Your Full Name ( Required)</label>
                    <input type="text" id="name" name="name" required />

                    <label for="email">Your Email (Required)</label>
                    <input type="email" id="email" name="email" required />

                    <label for="subject">Subject</label>
                    <input
                        type="subject"
                        id="subject"
                        name="subject"
                        required
                    />

                    <label for="massage">Your Massage</label>
                    <textarea type="massage" id="massage">
                        {" "}
                    </textarea>

                    <button type="submit">SEND MESSAGE</button>
                </form>

                <div className="mainCard">
                    {info.map((section, index) => (
                        <div className="cardRight" key={index}>
                            {section.data.map((item, itemIndex) => (
                                <p key={itemIndex}>
                                    {item.label}: <span>{item.value}</span>
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
