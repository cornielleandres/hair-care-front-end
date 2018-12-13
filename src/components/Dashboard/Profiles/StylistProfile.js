import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import PictureList from "../Pictures/PictureList";
import axios from "axios";

import GeoMap from "./GeoMap.js";

export default class StylistProfile extends Component {
  state = { stylist: {} };
  componentDidMount() {
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/stylists/${
          this.props.match.params.id
        }`,
        headers
      )
      .then(res => {
        console.log("Sprofile", res.data);
        this.setState({ stylist: res.data[0] });
      })
      .catch(err => console.log(err.response));
  }
  render() {
    const { stylist } = this.state;
    return (
      <div className="box">
        <div>
          <h4>picture</h4>
          <h4>{stylist.first_name}</h4>
          <h4>{stylist.address}</h4>
          <h4>{stylist.phone_number}</h4>
          <h4>{stylist.average_cost}</h4>
          <h4>{stylist.rating}</h4>
          <h4>description</h4>
          <h4>{stylist.social_network_link}</h4>
          <GeoMap id={this.props.match.params.id} />
        </div>
        <Link to={`/stylists/${stylist.id}/pictures`}>View pictures</Link>
        <Route
          path="/stylists/:id/pictures"
          render={props => <PictureList {...props} />}
        />
      </div>
    );
  }
}
