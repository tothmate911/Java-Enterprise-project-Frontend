import React from "react";
import noCover from "./no-cover.webp";

function MainPage() {
  return (
    <div class="card-columns m-5">
      <div class="card bg-light">
        <img class="card-img-top" src={noCover} alt=""></img>
        <div class="card-body">
          <h5 class="card-title">Book title</h5>
        </div>
      </div>
      <div class="card bg-light">
        <img class="card-img-top" src={noCover} alt=""></img>
        <div class="card-body text-justify-center">
          <h5 class="card-title">Book title</h5>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
