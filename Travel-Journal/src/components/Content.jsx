import Location from './Location';
import Data from '../data'

export default function Content() {

    const locationItems = Data.map(item => {
        return(
        <>
            <Location
                key={item.id}
                item={item}
            />
            <hr/>
        </>    
        )
    })


    return (
        <div className="content">
            {locationItems}
        </div>

    )
}