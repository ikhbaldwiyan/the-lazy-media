import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
import SkeletonRelated from 'components/Skeleton/SkeletonRelated';

function Related({ categories, setLoading }) {
  const [related, setRelated] = useState([])
  const baseUrl = "https://the-lazy-media-api.vercel.app/api/";

  useEffect(() => {
    axios.get(`${baseUrl}games/${tag}/?page=2`).then(res => { 
      const data = res.data;
      setRelated(data)
    });
  });

  let tag = categories 
  console.log(tag)
  if (tag === 'game news') {
    tag = 'news'
  } else if(tag === 'esports') {
    tag = 'e-sport'
  } else if(tag === 'console') {
    tag = 'console-game'
  } else if (tag === 'gadget news') {
    tag = 'pc'
  }

  return (
    <section className="container">
      <h3>Related Article</h3>
      <div className="container-grid">
        {related && related.length ? related.slice(2).map((item, idx) => (
          item.key !== window.location.pathname.slice(8) &&
          <div className="item column-3 row-1 mt-3">
            {console.log(window.location.pathname.slice(8))}
            <Fade bottom>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 180 }}>
                  <img
                    alt={item.title}
                    className="img-cover"
                    src={item.thumb}
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    href={`/detail/${item.key}`}
                    className="strecthed-link d-block text-gray-800"
                    onClick={() => setLoading(true)}
                    style={{textDecoration: 'none'}}
                  >
                    <h5 className="h4">{item.title}</h5>
                  </Button>
                </div>
              </div>
            </Fade>
          </div>
        )) : (
          <SkeletonRelated />
        )}
      </div>
    </section>
  );
}

export default Related;