import React from "react";
import Fade from "react-reveal/Fade";
import itemDetail from "json/itemDetails.json";

import Description from "./Description";

export default function Content() {
  return (
    <section className="container">
      <Fade bottom>
        <div className="row">
          <div className="col-7 pr-5">
            <Description data={itemDetail} />
          </div>
        </div>
      </Fade>
    </section>
  );
}
