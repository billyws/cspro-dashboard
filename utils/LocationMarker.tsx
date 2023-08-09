import { Marker, Popup, useMap } from 'react-leaflet';

const LocationMarker = ({ position, interviewerCode }) => {
    const map = useMap();

    const showPosition = () => {
        map.flyTo(position, 16); // zoom level when clicked
    };

    return (
        <Marker position={position} eventHandlers={{ click: showPosition }}>
            <Popup>{interviewerCode}.</Popup>
        </Marker>
    );
};

export default LocationMarker;
