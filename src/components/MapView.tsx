import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MAPBOX_GEOCODING_KEY } from "../config/constants";
import { Coordinates } from "../config/types";
import { MORELIA_CORDS } from "../config/constants";
import SearchCityForm from "./SearchCityForm";
mapboxgl.accessToken = MAPBOX_GEOCODING_KEY;

interface Props {
  sendDataToParent: (data: Coordinates | any) => void;
}

const MapView = ({ sendDataToParent }: Props) => {
  const mapContainer = useRef<HTMLDivElement | null>(null),
    map = useRef<HTMLDivElement | null>(null),
    [zoom, setZoom] = useState<number>(11),
    [mapCords, setMapCords] = useState<Coordinates>(MORELIA_CORDS);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [mapCords.longitude, mapCords.latitude],
      zoom: zoom,
    });
    if (!map.current) return;
    map.current.on("move", () => {
      setMapCords({
        latitude: Number(map.current.getCenter().lat.toFixed(4)),
        longitude: Number(map.current.getCenter().lng.toFixed(4)),
      });
      setZoom(Number(map.current.getZoom().toFixed(2)));
    });
  }, []);

  useEffect(() => {
    sendDataToParent(mapCords);
  }, [mapCords]);

  function getDataFromForm(MapCords: Coordinates) {
    setMapCords(MapCords);
  }

  return (
    <div>
      <div className="absolute p-3 flex flex-col gap-3 lg:w-1/6">
        <div className="bg-gray-800/75 px-2 py-3 rounded-sm z-10 text-xs">
          Latitude: {mapCords.latitude} | Longitude: {mapCords.longitude} <br />{" "}
          Zoom: {zoom}
        </div>
        <SearchCityForm sendDataToParent={getDataFromForm} />
      </div>
      <div ref={mapContainer} className="h-[500px] lg:w-[100vh] lg:h[100vh] " />
    </div>
  );
};

export default MapView;
