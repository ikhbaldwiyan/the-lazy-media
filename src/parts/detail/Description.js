import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function Description({ data }) {
  return (
    <main>
      <h4>About The Place</h4>
      {ReactHtmlParser(data.description)}
    </main>
  );
}
