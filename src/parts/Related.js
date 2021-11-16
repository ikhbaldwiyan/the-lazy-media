import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
import { clearImage } from 'utils/clearImage';
import SkeletonRelated from 'components/Skeleton/SkeletonRelated';

function Related({ categories, setLoading, theme }) {
  const [related, setRelated] = useState([])
  const [category, setCategory] = useState(categories);
  const [path, setPath] = useState('games')
  
  const baseUrl = "https://the-lazy-media-api.vercel.app/api/";
  let api = `${baseUrl}${path}${category}/?page=1`

  useEffect(() => {
    axios.get(api).then(res => { 
      const data = res.data;
      setRelated(data)
    });
  }, [api, category, path]);

  useEffect(() => {
    if (category === 'game news' || 'reviews') {
      setCategory('news')
      setPath('games/');
    } else if(category === 'esports') {
      setCategory('e-sport')
      setPath('games/');
    } else if(category === 'console') {
      setCategory('console-game')
    } else if (category === 'gadget news' || category === 'setup' || category === 'gadgets' ) {
      setCategory('pc')
      setPath('games/')
    } else if (category === 'tech' || category === 'tech recommendations' || category === 'tech review') {
      setPath('tech')
      setCategory('')
    } else if(category.length > '10' || category === 'tech news'){
      setPath('tech/news')
      setCategory('') 
    } else {
      api = `${baseUrl}search?search=${categories.slice(0 ,3)}`
    }
  }, [category, path])

  return (
    <section className="mt-4">
      <h3>Related Article</h3>
      <div className="container-grid">
        {related && related.length ? related.slice(2).map((item, idx) => (
          item.key !== window.location.pathname.slice(8) &&
          <div key={idx} className="item column-3 row-1 mt-2">
            <Fade>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 180 }}>
                  <img
                    alt={item.title}
                    className="img-cover"
                    src={clearImage(item.thumb)}
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
                    <h5 className={theme === 'light' ? "text-gray-700" : 'text-gray-400'}>{item.title}</h5>
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