export default function Location() {

    return (
        <div className="location-element">
            <div className="location-image">
                <img src="./src/assets/Rectangle_77.png" alt="Mount Fuji" />
            </div>
            <div className="location-content">
                <div className="spans">
                    <span className="location-location">
                        <img src="./src/assets/Fill_219.svg" alt="location icon" />
                            Japan
                        </span> 
                    <span className="location-maps">
                        <small>View on Google Maps</small>
                    </span>
                </div>
                <h2 className="location-title">Mount Fuji</h2>
                <h4 className="location-date">12 Jan, 2021 - 24 Jan, 2021</h4>
                <p className="location-details">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>

    )

}