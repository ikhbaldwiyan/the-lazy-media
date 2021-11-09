import React from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { RiUser3Fill } from "react-icons/ri";
import { clearImage } from "utils/clearImage";

import Button from "elements/Button";
import SkeletonList from "components/Skeleton/SkeletonList";

export default function Blog({ data, loading }) {
  const looping = window.location.pathname !== '/' ? '4,8' : '0,4';

  return data && data.length && !loading ? data.slice(parseInt(looping)).map((article, idx) => (
    <section key={idx}>
      <div className="container-grid">
        <Fade bottom>
          <div className="item column-3 mr-3">
            <div className="card card-featured">
              <div className="tag-article">{article.tag}</div>
              <figure className="img-wrapper">
                <img className="img-cover" src={clearImage(article.thumb)} alt={idx} />
              </figure>
            </div>
          </div>
          <div className="item column-8">
            <Link className="text-gray-900" to={`detail/${article.key}`} style={{textDecoration: 'none'}}>
              <h3>{article.title}</h3>
            </Link>
            <span className="text-gray-600">
             <RiUser3Fill className="mb-1" />{" "}
              <span className="text-gray-700">
                {article.author === 'Aldy Wayong'
                  ? 'Ikhbal Dwiyantoro'
                  : article.author}
              </span> | {article.time}
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
