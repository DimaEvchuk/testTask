import React from "react";
import "./Events.css";
import RecentEvents from "./RecentEvents";

const Events = () => {
  return (
    <div className="events">
      <div className="eventCont">
        <div className="recentEvents">Recent events</div>
        <div className="seeAll">
          See All
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.62484 12.3944C5.43735 12.2191 5.33203 11.9815 5.33203 11.7337C5.33203 11.4859 5.43735 11.2482 5.62484 11.073L8.91807 7.99566L5.62484 4.91834C5.44267 4.7421 5.34187 4.50604 5.34415 4.26102C5.34642 4.01599 5.4516 3.78161 5.63702 3.60834C5.82244 3.43508 6.07327 3.3368 6.33549 3.33467C6.5977 3.33254 6.85032 3.42673 7.03894 3.59696L11.0392 7.33497C11.2267 7.51021 11.332 7.74786 11.332 7.99566C11.332 8.24346 11.2267 8.48111 11.0392 8.65635L7.03894 12.3944C6.8514 12.5696 6.59707 12.668 6.33189 12.668C6.06671 12.668 5.81238 12.5696 5.62484 12.3944Z"
              fill="#8D5DDA"
            />
          </svg>
        </div>
      </div>
      <RecentEvents />
    </div>
  );
};

export default Events;
