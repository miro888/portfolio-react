import '../LeftsideBar../../../scss/App.scss';

export  function Buttondiv (props) {
const img = props;
    return (
        <div className="buttonDiv">
        <button id="downloadCv">
            DOWNLOAD CV
            <img
                src={img}
                alt="download cv button"
                className="downloadIcon"
            />
        </button>
    </div>
    )
}