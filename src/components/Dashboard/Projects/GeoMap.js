import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import styled from 'styled-components';

const StyledGeoMap = styled.div`
  #map${ ({id}) => `${id}` } {
    width: 300px;
    height: 300px;
  }
`;

class GeoMap extends Component {
	componentDidMount() {
    const mapBoxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const { address, city, state, zip, id } = this.props;
    const geoAddress = `${address} ${city} ${state} ${zip}`
    axios
      .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ geoAddress }.json?access_token=${mapBoxAccessToken}`)
      .then(res => {
        const center = res.data.features[0].center;
        mapboxgl.accessToken = mapBoxAccessToken;
        const map = new mapboxgl.Map({
          container: `map${id}`,
          center,
          zoom: 13,
          style: 'mapbox://styles/mapbox/streets-v10',
          hash: true,
          });
        new mapboxgl.Marker()
          .setLngLat(center)
          .addTo(map);
      })
      .catch(err => console.log(err.response));
  }
  render() {
    const { id } = this.props;
    return(
      <StyledGeoMap id = { id }>
        <div id = {`map${id}`} />
      </StyledGeoMap>
    );
  }
}








export default GeoMap;
