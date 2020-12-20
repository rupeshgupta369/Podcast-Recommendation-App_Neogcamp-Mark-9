import React, { useState } from "react";
import "./styles.css";
import { podcastDataCollection } from "./podcastData";

var podcastKey = Object.keys(podcastDataCollection);

export default function App() {
  // var [song, setSong] = useState("Excited");
  var [podcast, setPodcast] = useState("TopPodcast");

  // function songClickHandler(song) {
  function podcastClickHandler(podcast) {
    // setSong(song);
    setPodcast(podcast);
  }

  return (
    <div className="App">
      {/* Heading or Navigation Bar */}
      <nav class="navigation">
        <div class="nav-brand">Podcast Recommendation App</div>
      </nav>

      {/* Image section */}
      <section class="img-section">
        <img
          src="https://image.freepik.com/free-vector/podcast-concept-illustration-concept_23-2148659355.jpg"
          alt="podcast img"
        />
        <h2>
          "A podcast is a great way to develop relationships with hard-to-reach
          people."{" "}
          <small>
            - <em>Tim Paige</em>
          </small>
        </h2>
      </section>

      {/*  */}
      <div>
        {podcastKey.map((podcast) => (
          <button
            onClick={() => podcastClickHandler(podcast)}
            style={{
              cursor: "pointer",
              padding: "1rem 1rem",
              margin: "1rem 0.5rem",
              borderRadius: "0.5rem"
            }}
          >
            {" "}
            {podcast}{" "}
          </button>
        ))}
      </div>
      <hr />

      <section class="section">
        <div
          id="podcast-box"
          style={{
            textAlign: "center",
            marginLeft: "center",
            padding: "1.5rem"
          }}
        >
          <ul>
            {podcastDataCollection[podcast].map((parameter) => (
              <li
                id="podcast-link"
                key={parameter.name}
                style={{
                  padding: "1rem",
                  border: "1px solid border",
                  borderRadius: "0.5rem",
                  // width: "85%",
                  // margin: "1rem 0rem",
                  listStyle: "none",
                  // innerHeight: "10rem",
                  // outerHeight: "",
                  textDecoration: "none"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {parameter.name} </div>
                <div style={{ fontSize: "smaller" }}>
                  {" "}
                  {/* <a href={parameter.link} target={"_blank"}>{parameter.link}</a> */}
                  <div>
                    <button class="btn-spotify">
                      {/* {parameter.link} */}
                      <a
                        class="spotify-link"
                        href={parameter.link}
                        target={"_blank"}
                      >
                        Spotify Link
                      </a>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*  */}
      {/* Footer Section */}
      <footer>
        <div id="footer-credit-connect">
          <div id="footer-credit">Made by Rupesh Gupta</div>
          <div id="footer-connect">Connect with me here!</div>
        </div>

        <div id="social-link">
          <ul class="social-links list-non-bullet  icon-hover">
            <li>
              <a
                class="link list-item-inline icon-hover"
                href="https://rupeshgupta.netlify.app/"
                target="_blank"
              >
                <i class="bx bx-world"></i>
              </a>{" "}
            </li>

            <li>
              <a
                class="link list-item-inline icon-hover"
                href="https://github.com/rupeshgupta369"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>{" "}
            </li>

            <li>
              <a
                class="link list-item-inline icon-hover"
                href="https://dev.to/rupeshgupta369"
                target="_blank"
              >
                <i class="bx bxl-dev-to"></i>
              </a>{" "}
            </li>
            <li>
              <a
                class="link list-item-inline icon-hover"
                href="https://twitter.com/rupeshgupta369"
                target="_blank"
              >
                <i class="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a
                class="link list-item-inline icon-hover"
                href="https://www.linkedin.com/in/rupeshgupta369/"
                target="_blank"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                class="link list-item-inline icon-hover"
                href="https://www.instagram.com/rupeshgupta369/"
                target="_blank"
              >
                <i class="bx bxl-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
