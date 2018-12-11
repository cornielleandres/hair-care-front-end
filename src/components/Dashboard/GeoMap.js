import React from "react";
import axios from 'axios';
import mapboxgl from "mapbox-gl";
import styled from 'styled-components';

const StyledGeoMap = styled.div`
  margin: 10px;

  #map {
    width: 300px;
    height: 300px;
  }
`;

export default class GeoMap extends React.Component {
  componentDidMount() {
    const { address, city, state, zip } =  this.props;
    const geoAddress = `${address} ${city} ${state} ${zip}`;
    const mapBoxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    axios
      .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ geoAddress }.json?access_token=${ mapBoxAccessToken }`)
      .then(res => {
        const center = res.data.features[0].center;

        mapboxgl.accessToken = mapBoxAccessToken;
        const map = new mapboxgl.Map({
          container: 'map',
          center,
          zoom: 14,
          style: 'mapbox://styles/mapbox/streets-v10',
          hash: true,
        });

        new mapboxgl.Marker()
          .setLngLat(center)
          .addTo(map);
      })
      .catch(err => console.log(err.response));
	};

  render() {
    return(
      <StyledGeoMap>
        <div id = 'map' />
      </StyledGeoMap>
    );
  }
};
