import { useEffect, useState, useMemo } from "react";
import Map, { Marker } from "react-map-gl";
import { Coordinates } from "../config/types";
import { MORELIA_CORDS } from "../config/constants";
import { ViewState } from "../config/types";
import SearchCityForm from "./SearchCityForm";
import marker from "../assets/images/marker.png";
import { MAPBOX_GEOCODING_KEY } from "../config/constants";
import useDebounce from "../hooks/useDebounce";
const initViewState = {
  latitude: MORELIA_CORDS.latitude,
  longitude: MORELIA_CORDS.longitude,
  zoom: 11,
};

interface Props {
  sendDataToParent: (data: Coordinates | any) => void;
}

const MapView = ({ sendDataToParent }: Props) => {
  const [viewState, setViewState] = useState<ViewState>(initViewState);
  const debouncedSendDataToParent = useDebounce(sendDataToParent, 800);

  function getDataFromForm(centerCords: Coordinates) {
    setViewState({
      ...viewState,
      latitude: centerCords.latitude,
      longitude: centerCords.longitude,
    });
  }
  useEffect(() => {
    debouncedSendDataToParent(viewState);
  }, [viewState]);

  return (
    <>
      <div className="h-[500px] lg:w-[100vh] lg:h[100vh] ">
        <div className="absolute p-3 flex flex-col gap-3 lg:w-1/6">
          <div className="bg-gray-800/75 px-2 py-3 rounded-sm z-10 text-xs">
            Latitude: {viewState.latitude.toFixed(4)} | Longitude:{" "}
            {viewState.longitude.toFixed(4)} <br /> Zoom:{" "}
            {viewState.zoom.toFixed(2)}
          </div>
          <SearchCityForm sendDataToParent={getDataFromForm} />
        </div>
        <Map
          mapboxAccessToken={MAPBOX_GEOCODING_KEY}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          <Marker
            latitude={viewState.latitude}
            longitude={viewState.longitude}
            anchor={"bottom"}
          >
            <img src={marker} />
          </Marker>
        </Map>
      </div>
    </>
  );
};

export default MapView;
