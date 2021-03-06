import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import CustomLoader from "./CustomLoader";
import baseURL from "../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
class IconEvents extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      blocking: true
    };
  }
  componentDidMount() {
    axios
      .get("/api/event-categories")
      .then(res => {
        if (res.data.success) {
          this.setState({ categories: res.data.categories, blocking: false });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <section>
        {this.state.blocking ? (
          <CustomLoader />
        ) : (
          <>
            <h2>Events at Avishkar</h2>
            <div className="container">
              {this.state.categories.map(function(event) {
                return (
                  <div className="card" key={event}>
                    <Link
                      as={`/events/${event}`}
                      href={`/events?name=${event}`}
                    >
                      <a>
                        <div
                          className="event-element"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="img-container">
                            <img src={`/static/icon/${event}.png`} />
                          </div>
                        </div>
                        <div className="event-title">
                          <p>{event}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </>
        )}
        <style jsx>{`
          section {
            padding: 20px 0px;
            /*background-color: #f5f5f5;*/
          }
          h2 {
            text-align: center;
            color: black;
          }
          div.container {
            display: flex;
            width: 80%;
            height: auto;
            margin: 0 auto;
            flex-wrap: wrap;
            justify-content: center;
            box-sizing: border-box;
          }
          div.card {
            width: 170px;
            height: auto;
            background-color: white;
            z-index: 10;
            transition: transform 0.6s;
            margin: 10px;
            padding: 10px 20px;
            /*box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);*/
            border-radius: 4px;
            box-sizing: border-box;
            transition: all 0.5s;
          }

          div.event-element {
            width: 100%;
            height: auto;
            padding: 20px;
            box-sizing: border-box;
          }
          div.img-container {
            width: 100%;
            height: auto;
          }
          img {
            width: 100%;
            height: auto;
          }
          .event-title p {
            text-align: center;
            margin: 0px 0px 10px 0px;
            text-transform: capitalize;
          }
          a {
            text-decoration: none;
            color: black;
          }
          @media (max-width: 700px) {
            div.container {
              width: 100%;
            }
            section {
              background-color: white;
            }
            div.card {
              margin: 10px;
            }
          }
          @media (min-width: 701px) {
            div.card:hover {
              box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 10px 10px rgba(0, 0, 0, 0.22);
            }
          }
        `}</style>
      </section>
    );
  }
}
export default IconEvents;
