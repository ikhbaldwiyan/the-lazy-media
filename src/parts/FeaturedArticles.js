import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { RiUser3Fill } from "react-icons/ri";
import { clearImage } from 'utils/clearImage';

import Button from 'elements/Button';
import SkeletonHome from 'components/Skeleton/SkeletonHome';

function FeaturedArticles({theme}) {
  const [article, setArticle] = useState([]);
  const baseUrl = 'https://the-lazy-media-api.vercel.app/api';

  useEffect(() => {
    axios.get(`${baseUrl}/search?search=gam`).then((res) => {
      const data = res.data;
      setArticle(data);
    });
  }, [article]);

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h3 className="mb-3">Featured</h3>
        </div>
        <div className="col-6">
          <Link to="/article" style={{textDecoration: 'none'}}>
            <h5 className="more-article mr-2 mt-2">See more</h5>
          </Link>
        </div>
      </div>
      {article && article.length ? (
        <div className="container-grid">
          {article.reverse().slice(0, 5).map((item, idx) => (
            <div
              key={idx}
              className={`item column-4 ${idx === 0 ? 'row-2' : 'row-1'}`}
            >
              <Fade up delay={300 * idx}>
                <div className="card card-featured">
                  <Link to={`detail/${item.key}`}>
                      <figure className="img-wrapper">
                        <img
                          src={clearImage(item.thumb)}
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          className="strecthed-link d-block text-white"
                          href={`detail/${item.key}`}
                          style={{textDecoration: 'none'}}
                        >
                          <h6>{item.title}</h6>
                        </Button>
                        <span className="text-gray-400">
                          <RiUser3Fill className="mb-1" />{" "}
                          {item.author === 'Aldy Wayong'
                            ? 'Ikhbal Dwiyantoro'
                            : item.author}
                        </span>
                      </div>
                  </Link>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      ) : (
        <SkeletonHome theme={theme} />
      )}
    </div>
  );
}

export default FeaturedArticles;
