import confetti from "canvas-confetti";
// import style from "./style.scss";

import("./counter.js").then((module) => {
  module.setupCounter(document.querySelector("button"));
});


console.log(import.meta.env.VITE_API_ENDPONT); // VITE_    => public
console.log(import.meta.env.DATABASE_URL); //  => private (secure)

confetti();
