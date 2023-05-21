import "./App.css";
import { faBed, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
</style>;

function App() {
  // const [destination, setDestination] = useState("");
  // const [openDate, setOpenDate] = useState(false);
  // const [location, setLocation] = useState("");
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  //     key: "selection",
  //   },
  // ]);
  // console.log(location);
  // console.log(date);
  // const handleSearch = () => {
  //   const url = `https://joingopher.com/destinations/guestbook?page=1&query%5Bproperty%5D%5Btext%5D=Las%20Vegas%2C%20Nevada%2C%20United%20States&query%5Bproperty%5D%5Bcity%5D=${encodeURIComponent(
  //     location
  //   )}&query%5Bproperty%5D%5Bstate%5D=Nevada&query%5Bproperty%5D%5Bcountry%5D=United%20States&query%5Bproperty%5D%5Bid%5D=22416&query%5Bproperty%5D%5Btype%5D=City&query%5Bproperty%5D%5Bcenter%5D%5B0%5D=36.17497&query%5Bproperty%5D%5Bcenter%5D%5B1%5D=-115.13722&stayDates%5BcheckinDate%5D=[CHECK-IN-DATE]2&stayDates%5BcheckoutDate%5D=[CHECK-OUT-DATE]`;

  //   window.open(url, "_blank");
  // };
  return (
    // <div className="headerSearch">
    //   <div className="headerSearchItem">
    //     <FontAwesomeIcon icon={faBed} className="headerIcon" />
    //     <input
    //       type="text"
    //       placeholder="Where are you going?"
    //       className="headerSearchInput"
    //       onChange={(e) => setLocation(e.target.value)}
    //     />
    //   </div>
    //   <div className="headerSearchItem">
    //     <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
    //     <span
    //       onClick={() => setOpenDate(!openDate)}
    //       className="headerSearchText"
    //     >{`${format(date[0].startDate, "MM-dd-yyyy")} to ${format(
    //       date[0].endDate,
    //       "MM-dd-yyyy"
    //     )}`}</span>
    //     {openDate && (
    //       <DateRange
    //         editableDateInputs={true}
    //         onChange={(item) => setDate([item.selection])}
    //         moveRangeOnFirstSelection={false}
    //         ranges={date}
    //         className="date"
    //       />
    //     )}
    //   </div>
    //   <div className="headerSearchItem">
    //     <button onClick={handleSearch} className="button">
    //       <image src="../src/image/Icon_Button.png" />
    //     </button>
    //   </div>
    // </div>
    <div style={{ backgroundColor: "black" }}>
      <div className="search-component">
        <div className="search-field">
          <div className="search-details">
            <div className="input-item first-input">
              <label className="title-text">Location</label>
              <input type="text" placeholder="Location" />
            </div>
            <div className="input-item middle-input">
              <label className="title-text">Check-in</label>
              <input type="text" placeholder="Location" />
            </div>
            <div className="input-item last-input">
              <label className="title-text">Check-out</label>
              <input type="text" placeholder="Location" />
            </div>
            <button className="btn">
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7983 10.7075L14.7983 19.7075C14.6107 19.8951 14.3562 20.0006 14.0908 20.0006C13.8255 20.0006 13.571 19.8951 13.3833 19.7075C13.1957 19.5199 13.0903 19.2654 13.0903 19C13.0903 18.7346 13.1957 18.4801 13.3833 18.2925L20.6771 11H1.09082C0.825604 11 0.57125 10.8947 0.383714 10.7071C0.196177 10.5196 0.0908203 10.2652 0.0908203 10C0.0908203 9.73479 0.196177 9.48044 0.383714 9.2929C0.57125 9.10536 0.825604 9.00001 1.09082 9.00001H20.6771L13.3833 1.70751C13.1957 1.51987 13.0903 1.26537 13.0903 1.00001C13.0903 0.734643 13.1957 0.480147 13.3833 0.292507C13.571 0.104866 13.8255 -0.000549316 14.0908 -0.000549316C14.3562 -0.000549316 14.6107 0.104866 14.7983 0.292507L23.7983 9.29251C23.8913 9.38538 23.9651 9.49567 24.0154 9.61707C24.0657 9.73846 24.0916 9.86859 24.0916 10C24.0916 10.1314 24.0657 10.2615 24.0154 10.3829C23.9651 10.5043 23.8913 10.6146 23.7983 10.7075Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
