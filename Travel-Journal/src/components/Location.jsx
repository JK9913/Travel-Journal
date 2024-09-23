export default function Location(props) {

    return (
        <div className="location-element">
            <div className="location-image">
                <img src={props.item.imageUrl} alt={props.item.title} />
            </div>
            <div className="location-content">
                <div className="spans">
                    <span className="location-location">
                        <img src="./src/assets/Fill_219.svg" alt="location icon" />
                            {props.item.location}
                        </span> 
                    <span className="location-maps">
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </span>
                </div>
                <h2 className="location-title">{props.item.title}</h2>
                <h4 className="location-date">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="location-details">{props.item.description}</p>
            </div>
        </div>

    )

}