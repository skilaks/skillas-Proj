import React from "react";
import { Carousel } from "../components/caroursel";

import { Footer,Footer2 } from "../components/footer";
import { AboutUs, Education } from "../components/sections";

export function Home(props) {
  return (
    <div className="">

      <Carousel />
      <Education />
      <AboutUs />
      {/* <Footer2 /> */}
    </div>
  );
}
