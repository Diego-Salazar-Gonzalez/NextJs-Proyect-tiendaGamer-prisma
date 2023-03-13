import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const Mapa = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2lyZWxsIiwiYSI6ImNsZGpmNXpzaDFxZnczcHI4b3d1a2w4OWIifQ.wu4LhDagXDjH3qudkUjJdw";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-79.959780, -3.454856],
      zoom: 20,
    });
    console.log(mapContainer)
    const marker = new mapboxgl.Marker()
      .setLngLat([-79.959780, -3.454856])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Tienda Gamer</h3>"))
      .addTo(map);
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ height: "400px", width: "100%" }} ></div>;
};

export default Mapa;
