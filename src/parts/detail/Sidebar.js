import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import { clearImage } from 'utils/clearImage';
import SkeletonSidebar from 'components/Skeleton/SkeletonSidebar';

function Sidebar({popular, setLoading, theme}) {
  const [sidebar, setSidebar] = useState([]);

  useEffect(() => {
    axios.get(`https://the-lazy-media-api.vercel.app/api/search?search=${popular.slice(0 ,3)}`)
      .then((res) => {
        const data = res.data;
        setSidebar(data);
      });
  }, [sidebar, popular]);

  return (
    <>
      <div className="container row mt-2">
        <h4>Most Popular</h4>
      </div>
      {sidebar && sidebar.length ? (
        <div className="container-grid mt-3">
          {sidebar.slice(0, 4).map((item, idx) => (
            <div className="item column-6 row-1" key={idx}>
              <Fade bottom>
                <div className="card">
                  <div className="tag-article">{item.tag}</div>
                  <figure className="img-article">
                    <img
                      src={clearImage(item.thumb, true)}
                      alt={item.title}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`/detail/${item.key}`}
                      className="strecthed-link d-block text-gray-800"
                      style={{textDecoration: 'none'}}
                      onClick={() => setLoading(true)}
                    >
                      <b className={theme === 'light' ? "h6 text-gray-700" : 'h6 text-gray-400'} >{item.title}</b>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      ) : (
        <SkeletonSidebar theme={theme}/>
      ) }

      <div className="container row mt-4">
        <h4>Recomended Article</h4>
      </div>
      {sidebar && sidebar.length ? (
        <div className="container-grid mt-3">
          {sidebar.slice(6, 10).map((item, idx) => (
            <div className="item column-6 row-1" key={idx}>
              <Fade bottom>
                <div className="card">
                  <div className="tag-article">{item.tag}</div>
                  <figure className="img-article">
                    <img
                      src={clearImage(item.thumb, true)}
                      alt={item.title}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`/detail/${item.key}`}
                      className="strecthed-link d-block text-gray-800"
                      style={{textDecoration: 'none'}}
                      onClick={() => setLoading(true)}
                    >
                      <b className={theme === 'light' ? "h6 text-gray-700" : 'h6 text-gray-400'} >{item.title}</b>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      ) : (
        <SkeletonSidebar theme={theme}/>
      ) }
    </>
  )
}

export default Sidebar
