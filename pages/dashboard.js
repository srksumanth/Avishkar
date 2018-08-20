import React, { Component } from "react";
import axios from "axios";
import url from "../config";
axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;
import ToggleDisplay from "react-toggle-display";
import Profile from "../components/dashboard/profile";
import Register from "../components/dashboard/Register.js";
import Router from "next/router";
import Meta from "../components/Meta";
import SideBar from "../components/dashboard/sideBar";
import { withRouter } from "next/router";
import NavBar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import Dash from "../components/dashboard/Dash";
import Link from "next/link";
import RegisterdEvents from "../components/dashboard/RegisteredEvents";
import TeamEvents from "../components/dashboard/team-events/TeamEvents";
// import NavList from "../com";
export default withRouter(
  class extends Component {
    state = {
      profile: {
        name: "",
        email: "",
        phone: "",
        college: "",
        loading: true
      }
    };
    componentDidMount() {
      this.fetchUserProfile();
    }
    fetchUserProfile = () => {
      axios
        .get("/api/profile")
        .then(res => {
          console.log("data", res.data);
          if (res.status == 200) {
            const { profile } = res.data;
            this.setState({
              loading: false,
              profile
            });
          }
        })
        .catch(function(err) {
          if (err.response.status == 401) {
            Router.push("/auth");
          }
        });
    };

    componentCheck(tab) {
      if (tab === undefined || tab === "dashboard") {
        return <Dash />;
      }
      if (tab === "profile") {
        return (
          <Profile
            name={this.state.profile.name}
            email={this.state.profile.email}
            phone={this.state.profile.phone}
            college={this.state.profile.college}
          />
        );
      }
      if (tab === "register") {
        return <Register />;
      }
      if (tab === "team events") {
        return <TeamEvents />;
      }
    }
    render() {
      const { router } = this.props;
      const tab = router.query.tab;
      return (
        <>
          <Meta />
          <NavBar path={router.pathname} color={"#212121"} />
          <MobileNav path={router.pathname} />
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <SideBar />
            </div>
            <div className="col-md-10 col-xs-12 container">
              {this.componentCheck(tab)}
            </div>
          </div>
          <Footer />
          <style jsx>
            {`
              div.container {
                width: 100%;
                min-height: 60vh;
                box-sizing: border-box;
                background-color: #eeeeee;
                padding: 20px;
                padding-bottom: 50px;
                justify-content: center;
              }
            `}
          </style>
        </>
      );
    }
  }
);