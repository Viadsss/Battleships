import "./styles.css";
import { initLoadingPage } from "./scripts/dom";
import { initPlaceShip } from "./scripts/placeShip";

function displayPages() {
  initLoadingPage();
  setTimeout(() => {
    initPlaceShip();
  }, 4500);
}

displayPages();
