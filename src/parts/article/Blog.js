import React from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

import Button from "elements/Button";
import IconDate from "assets/images/icons/icon_cities.svg";
import SkeletonList from "components/Skeleton/SkeletonList";

export default function Blog({ data, loading }) {
  return data && data.length && !loading ? data.map((article, idx) => (
    <section className="container">
      <div className="container-grid sm">
        <Fade>
          <div className="item column-3 mr-3">
            <div className="card h-100">
              <div className="tag-article">{article.tag}</div>
              <figure className="img-article">
                <img className="img-cover" src={article.thumb} alt={idx} />
              </figure>
            </div>
          </div>
          <div className="item column-8">
            <Link className="text-gray-900" to={`detail/${article.key}`} style={{textDecoration: 'none'}}>
              <h3>{article.title}</h3>
            </Link>
            <span className="text-gray-500">
              <img src={IconDate} width={18} className="ml-1 mb-1" alt="date" />{" "}
              <span className="text-gray-700">{article.author}</span> |  {article.time}
            </span>
            <p className="mt-3">
              {ReactHtmlParser(article.desc)}
            </p>
            <Button type="link" href={`detail/${article.key}`} className="btn mt-3 text-white" style={{backgroundColor: '#802BB1'}}>
              Read More
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  )) : (
    <section>
      <SkeletonList />
    </section>
  );
}
