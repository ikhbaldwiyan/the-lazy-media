import React from "react";
import propTypes from "prop-types";

import "./index.scss";
import Button from "elements/Button";

export default function Breadcrumb(props) {
  const className = ["breadcrumb", props.className];

  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
        {props.data.map((item, idx) => (
          <li
            key={idx}
            className={`breadcrumb-item${
              idx === props.data.length - 1 ? " active" : ""
            }`}
          >
            {idx === props.data.length - 1 ? (
              item.pageTitle
            ) : (
              <Button type="link" href={item.pageHref}>
                {item.pageTitle}
              </Button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
