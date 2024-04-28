import React from "react";
import WeatherImg from "../assets/weather.png";
import WeatherImg1 from "../assets/weather_.jpg";
import Todo from "../assets/stocks-app-logo.jpg";
import Cant from "../assets/cantstop.png";
import CantIcon from "../assets/CantStop-sm.jpg";
import ML from "../assets/ML.png";
import Music from "../assets/music.png";
import Conway from "../assets/conway.png";
import Housing from "../assets/Housing.png";
import musicApp from "../assets/musicApp.png";
import GameOfLife from "../assets/GameOfLife.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import todo_working from "../assets/portfolio-stocks.png";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work.</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WeatherImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>

              <div>
                <Popup
                  trigger={
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      View
                    </button>
                  }
                  modal
                  nested
                  contentStyle={{
                    background: "#fff0",
                    border: "0",
                    width: "60%",
                    padding: "0",
                  }}
                >
                  {(close) => (
                    <div className="modal flex items-center justify-center p-4 bg-white rounded-md">
                      <div className="content box-border h-40%  p-4 ">
                        <img
                          className="rounded-lg w-180"
                          src={WeatherImg1}
                          alt="Weather Image"
                        />
                      </div>
                      <div>
                        <p className="">
                          This weather app is written in HTML, JS, CSS and uses
                          API fetching to fetch weather information for
                          different cities. There is search bar on the top of
                          the window whre you can search any city and it will
                          update the screen.
                        </p>
                      </div>
                    </div>
                  )}
                </Popup>
                <a
                  href="https://github.com/yuvraj-kalsi0001/weather_app"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>

              <div>
                <Popup
                  trigger={
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      View
                    </button>
                  }
                  modal
                  nested
                  contentStyle={{
                    background: "#fff0",
                    border: "0",
                    width: "60%",
                    padding: "0",
                  }}
                >
                  {(close) => (
                    <div className="modal flex items-center justify-center p-4 bg-white rounded-md">
                      <div className="content box-border h-40%  p-4 ">
                        <img
                          className="rounded-lg w-180"
                          src={todo_working}
                          alt="todo_working"
                        />
                      </div>
                      <div>
                        <p className="">
                          This application provided interface for stock trading. I have used HTML, CSS, JS, EJS, Atlas mongo DataBase
                        </p>
                      </div>
                    </div>
                  )}
                </Popup>
                <a
                  href="https://github.com/yuvraj-kalsi0001/Stock-Market-Game"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${CantIcon})`}}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-white"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>

              <div>
                <Popup
                  trigger={
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      View
                    </button>
                  }
                  modal
                  nested
                  contentStyle={{
                    background: "#fff0",
                    border: "0",
                    width: "60%",
                    padding: "0",
                  }}
                >
                  {(close) => (
                    <div className="modal flex items-center justify-center p-4 bg-white rounded-md">
                      <div className="content box-border h-40%  p-4 ">
                        <img
                          className="rounded-lg w-180"
                          src={Cant}
                          alt="Weather Image"
                        />
                      </div>
                      <div>
                        <p className="">
                          This game application is written in Java, it is based on the board game named Can't Stop. This game was our academic team project, where I worked mostly on UI and designing AI player.
                        </p>
                      </div>
                    </div>
                  )}
                </Popup>
                <a
                  href="https://github.com/yuvraj-kalsi0001/CAN-T-STOP-board-game"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ML})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>

              <div>
                <Popup
                  trigger={
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      View
                    </button>
                  }
                  modal
                  nested
                  contentStyle={{
                    background: "#fff0",
                    border: "0",
                    width: "60%",
                    padding: "0",
                  }}
                >
                  {(close) => (
                    <div className="modal flex items-center justify-center p-4 bg-white rounded-md">
                      <div className="content box-border h-40%  p-4 ">
                        <img
                          className="rounded-lg w-180"
                          src={Housing}
                          alt="Housing Image"
                        />
                      </div>
                      <div>
                        <p className="">
                          This was my first machine learning project, in which we are performing Linear Regression, Decision Tree Regression, Random Forest Regression on Boston housing data with some features, this program was written in python. We will use our data in above models which will predict the price for any new house by looking at the features. 
                        </p>
                      </div>
                    </div>
                  )}
                </Popup>
                <a
                  href="https://github.com/yuvraj-kalsi0001/Real_estate_price_estimator-ML-project-"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Music})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>

              <div>
                <Popup
                  trigger={
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      View
                    </button>
                  }
                  modal
                  nested
                  contentStyle={{
                    background: "#fff0",
                    border: "0",
                    width: "60%",
                    padding: "0",
                  }}
                >
                  {(close) => (
                    <div className="modal flex items-center justify-center p-4 bg-white rounded-md">
                      <div className="content box-border h-40%  p-4 ">
                        <img
                          className="rounded-lg w-180"
                          src={musicApp}
                          alt="musicApp Image"
                        />
                      </div>
                      <div>
                        <p className="">
                          This is a music player, which has basic features of playing audio files. This program was written in pure HTML, CSS and JS.
                        </p>
                      </div>
                    </div>
                  )}
                </Popup>
                <a
                  href="https://github.com/yuvraj-kalsi0001/Snotify_Clone_music_player"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Conway})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           {/* Hover effect */}
           <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>

              <div>
                <Popup
                  trigger={
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      View
                    </button>
                  }
                  modal
                  nested
                  contentStyle={{
                    background: "#fff0",
                    border: "0",
                    width: "60%",
                    padding: "0",
                  }}
                >
                  {(close) => (
                    <div className="modal flex items-center justify-center p-4 bg-white rounded-md">
                      <div className="content box-border h-40%  p-4 ">
                        <img
                          className="rounded-lg w-180"
                          src={GameOfLife}
                          alt="GameOfLife Image"
                        />
                      </div>
                      <div>
                        <p className="">
                          This Code was written in Java and mimics Conway's game of life. We can set number of iterations and pattern in the input.
                        </p>
                      </div>
                    </div>
                  )}
                </Popup>
                <a
                  href="https://github.com/yuvraj-kalsi0001/Game_of_life"
                  target="_blank"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
