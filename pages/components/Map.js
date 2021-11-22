import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hraG9uZyIsImEiOiJja3dhNHp3ajcweWZmMzBxbWpwbmJmbHh0In0.OoKdEF30HkGYNoxYCT15wg";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [101.6869, 3.139],
      zoom: 5,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
  bg-red-500 flex-1
`;

export default Map;
