import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import { render } from "@testing-library/react";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

const polygon = [
  [54.21892845, 18.60949587],
  [54.21869296, 18.60913075],
  [54.21844089, 18.60951873],
  [54.21862409, 18.60989854],
  [54.21882897, 18.60962872],
  [54.21883974, 18.6096468],
];

const purpleOptions = { color: "green" };

const MyMap = () => {
  return (
    <MapContainer
      center={[54.218602, 18.609585]}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[54.218602, 18.609585]}>
        <Popup>Vela Park</Popup>
      </Marker>

      <Polygon pathOptions={purpleOptions} positions={polygon} />
    </MapContainer>
  );
};

export default MyMap;
