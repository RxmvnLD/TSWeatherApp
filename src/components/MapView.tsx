import { useEffect, useState } from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import { Coordinates } from "../config/types";
import { MORELIA_CORDS } from "../config/constants";
import { ViewState } from "../config/types";
import SearchCityForm from "./SearchCityForm";
import marker from "../assets/images/marker.png";

const initViewState = {
  latitude: MORELIA_CORDS.latitude,
  longitude: MORELIA_CORDS.longitude,
  zoom: 11,
};

interface Props {
  sendDataToParent: (data: Coordinates | any) => void;
}

const MapView2 = ({ sendDataToParent }: Props) => {
  const [viewState, setViewState] = useState<ViewState>(initViewState);

  function getDataFromForm(centerCords: Coordinates) {
    setViewState({
      ...viewState,
      latitude: centerCords.latitude,
      longitude: centerCords.longitude,
    });
  }
  useEffect(() => {
    sendDataToParent(viewState);
  }, [viewState]);

  return (
    <>
      <div className="h-[500px] lg:w-[100vh] lg:h[100vh] ">
        <div className="absolute p-3 flex flex-col gap-3 lg:w-1/6">
          <div className="bg-gray-800/75 px-2 py-3 rounded-sm z-10 text-xs">
            Latitude: {viewState.latitude} | Longitude: {viewState.longitude}{" "}
            <br /> Zoom: {viewState.zoom}
          </div>
          <SearchCityForm sendDataToParent={getDataFromForm} />
        </div>
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
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

export default MapView2;
