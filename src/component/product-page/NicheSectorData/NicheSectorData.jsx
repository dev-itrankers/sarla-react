import React from "react";
import "./NicheSectorData.css";
import NicheSectorContent from "./NicheSectorContent/NicheSectorContent";
export default function NicheSectorData() {
  return (
    <div className="niche-sector-data">
      <div className="columns">
        <NicheSectorContent
          title="For Narrow Fabric & Elastic tape Manufacturars"
          info="Textured Polyester Yarns/ Textured Nylon Stretch Yarns Bulklon/
      Covered Yarn"
        />
        <NicheSectorContent
          title="title niche-data-heading"
          info="Textured Polyester Yarns/ Textured Nylon Stretch Yarns Bulklon/
      Covered Yarn"
        />
        <NicheSectorContent
          title="For Dye Houses"
          info="Nylon muffs/hanks/ Textured Poly on dye tubes High tencity nylon &
        Polyester on dye tubes Embroidery yarn on dye tubes"
        />
        <NicheSectorContent
          title=" For Sewing Thread Consumers"
          info="Textured Sewing Thread/ High tencity Yarns & Threads/ Mattress
        Threads/ Embroidery Threads/ Bonded Threads"
        />
      </div>
    </div>
  );
}
