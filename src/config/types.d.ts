export type Coordinates = {
  latitude: number;
  longitude: number;
};
export type BackgroundData = {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};
export type GeolocationImage = {
  date: string;
  id: string;
  resource: {
    dataset: string;
    planet: string;
  };
  servoce_version: string;
  url: string;
};
export type GeolocationError = {
  msg: string;
  service_version: string;
};
export type Weather = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [{ description: string; icon: string; id: number; main: string }];
  wind: { deg: number; gust: number; speed: number };
};
type SearchResultContext = {
  id: string;
  short_code: string;
  wikidata: string;
  text: string;
};
export type SearchResult = {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: {
    wikidata: string;
  };
  text: string;
  place_name: string;
  bbox: number[];
  center: number[];
  geometry: {
    type: string;
    coordinates: number[];
  };
  context: SearchResultContext[];
};

export type pexelsPhoto = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
};
export type pexelsPhotosResponse={
    total_results:number;
    page:number;
    per_page:number;
    photos:pexelsPhoto[];
    next_page:string;
}
