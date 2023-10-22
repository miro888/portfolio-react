// import "../middle../../../scss/styleOfcompondnts/RightScss/sideBarRight.scss";

// export function Icons(props) {
//   const { icon_1, icon_2, icon_3, icon_4, icon_5, icon_6 } = props;
//   return (
//     <div className="icons">
//       <div className="iconWrapper">
//         <a href="#about">
//           <img src={icon_1} alt="about" className="activeIcons" />
//         </a>
//       </div>
//       <div className="iconWrapper">
//         <a href="#MyServices">
//           <img src={icon_2} alt="services" className="activeIcons" />
//         </a>
//       </div>

//       <div className="iconWrapper">
//         <a href="#Education">
//           <img src={icon_3} alt="education" className="activeIcons" />
//         </a>
//       </div>

//       <div className="iconWrapper">
//         <a href="#Projects">
//           <img src={icon_4} alt="projects" className="activeIcons" />
//         </a>
//       </div>
//       {/* <div className="iconWrapper">
//         <a href="#contactInfo">
//           <img src={icon_5} alt="" className="activeIcons" />
//         </a>
//       </div>

//       <div className="iconWrapper">
//         <a href="#Feedback">
//           <img src={icon_6} alt="" className="activeIcons" />
//         </a>
//       </div> */}
//     </div>
//   );
// }



import "../middle../../../scss/styleOfcompondnts/RightScss/sideBarRight.scss";

export function Icons(props) {
    const { icon_1, icon_2, icon_3, icon_4} = props;
    return (
        <div className="icons">
            <div className="iconWrapper">
                <a href="#about" data-tooltip="About Me">
                    <img src={icon_1} alt=" about" className="activeIcons" />
                </a>
            </div>
            <div className="iconWrapper">
                <a href="#MyServices" data-tooltip="My Services">
                    <img src={icon_2} alt="services" className="activeIcons" />
                </a>
            </div>
            <div className="iconWrapper">
                <a href="#Education" data-tooltip="Education">
                    <img src={icon_3} alt="education" className="activeIcons" />
                </a>
            </div>
            <div className="iconWrapper">
                <a href="#Projects" data-tooltip="Projects">
                    <img src={icon_4} alt="projects" className="activeIcons" />
                </a>
            </div>
         
        </div>
    );
}
