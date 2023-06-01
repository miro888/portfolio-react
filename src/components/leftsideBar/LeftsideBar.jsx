export function LeftsideBar (props) {
    const { img,name,lastName} = props;
    return (
        <>
          <div className="sidebarHead">
                <img
                    src={img}
                    alt={name + lastName}
                    className="personImage"
                />
                <p className="fullname">{name + " " + lastName}</p>
                <p>Front-End developer</p>
            </div> 
        </>
    )
}