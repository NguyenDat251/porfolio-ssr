import React, { useMemo } from "react";
import "./Footer.module.scss";
import CVButton from "components/CVButton/CVButton";
import ContactMethodFooter from "../ContactMethod/ContactMethodFooter";
import { useEffect, useState } from "react";

const ONE_MINUTE = 1000 * 60;

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
    })
  );
  const [weatherData, setWeatherData] = useState(null);
  const date = useMemo(() => new Date(currentTime), [currentTime]);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const personalInfo = {
    address: "District 8, HCM City, Vietnam",
    phone: "(+84) 34 324 46 44",
    email: "nguyenquocdat2511998@gmail.com",
  };

  const timeString = useMemo(() => {
    let rs = "";
    if (hours === 0) {
      rs += "12";
    } else if (hours > 12) {
      rs += hours - 12;
    } else {
      rs += hours;
    }
    rs += ":" + (minutes < 10 ? "0" : "") + minutes;
    rs += " " + (hours < 12 ? "AM" : "PM");

    return rs;
  }, [hours, minutes]);

  useEffect(() => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Vietnam&units=metric&appid=7d6488f171786a9b72ec528855be74c6`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
        })
      );
    }, ONE_MINUTE);

    // cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <footer
      id="footer"
      className="pt-16 pb-4 lg:pt-0 lg:pb-4 h-screen flex flex-col items-start justify-around md:justify-center"
    >
      <hr className="horizontal-line mb-4" />
      <div>
        <div className="section">
          <div className="timeLocation">
            <div>It&apos;s {timeString} </div>
            {weatherData && (
              <div className="weatherLocation">
                {weatherData.weather[0].description} & {weatherData.main.temp}
                &deg;C
              </div>
            )}
            in Vietnam
          </div>
          <div className="summaryInfo">
            <h3>Let&apos;s make something great together</h3>
            <div className="summaryInfoSection">
              <div className="summaryInfoSection__header">Contact Info</div>
              <div className="summaryInfoSection__content">
                <a
                  href="https://www.google.com/maps?q=Thành phố Hồ Chí Minh, Việt Nam"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p data-length-info={personalInfo.address}>
                    {personalInfo.address}
                  </p>
                </a>
                <a href="tel:0343244644">
                  <p data-length-info={personalInfo.phone}>
                    {personalInfo.phone}
                  </p>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nguyenquocdat2511998@gmail.com "
                  target="_blank"
                  rel="noreferrer"
                >
                  <p data-length-info={personalInfo.email}>
                    {personalInfo.email}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <CVButton />
          <div>
            © {new Date().getFullYear()}, built by{" "}
            <a className="about-me" href="#About">
              Datnguyen
            </a>{" "}
            and hugely inspired by{" "}
            <a className="text-[--green]" href="https://v4.brittanychiang.com/">
              Brittany Chiang
            </a>
          </div>
        </div>
      </div>
      <ContactMethodFooter />
    </footer>
  );
}
