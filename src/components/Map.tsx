import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MAPBOX_GEOCODING_KEY } from "../config/constants";

mapboxgl.accessToken = MAPBOX_GEOCODING_KEY;

export type MapCords = {
  latitude: number;
  longitude: number;
};
export const MapInitialState: MapCords = {
  latitude: 19.7023,
  longitude: -101.1928,
};

interface Props {
  sendDataToParent: (data: MapCords | any) => void;
}
const Map = ({ sendDataToParent }: Props) => {
  const mapContainer = useRef(null),
    map = useRef(null),
    [zoom, setZoom] = useState<number>(11),
    [mapData, setMapData] = useState<MapCords>(MapInitialState);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [mapData.longitude, mapData.latitude],
      zoom: zoom,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setMapData({
        latitude: Number(map.current.getCenter().lat.toFixed(4)),
        longitude: Number(map.current.getCenter().lng.toFixed(4)),
      });
      setZoom(Number(map.current.getZoom().toFixed(2)));
    });
  }, []);
  useEffect(() => {
    sendDataToParent(mapData);
  }, [mapData]);

  return (
    <div className="h-full">
      <div className="bg-gray-800/75 px-2 py-3 rounded-sm z-10 absolute m-3">
        Latitude: {mapData.latitude} | Longitude: {mapData.longitude} <br />{" "}
        Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="h-[500px] lg:h-[550px] " />
    </div>
  );
};

export default Map;
