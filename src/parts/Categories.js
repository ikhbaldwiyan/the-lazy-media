import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import { RiUser3Fill } from "react-icons/ri";
import { clearImage } from 'utils/clearImage';
import SkeletonCategory from 'components/Skeleton/SkeletonCategory';

function Categories({data, title, theme}) {
  return (
    <div className="mt-4 mb-4">
      <h3 className="mb-3 font-weight-medium">{title}</h3>
      {data && data.length ? (
        <div className="container-grid">
          {data.slice(0, 4).map((item, idx) => (
            <div className="item column-3 row-1" key={idx}>
              <Fade right delay={300 * idx}>
                <div className="card">
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={clearImage(item.thumb)}
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
                    >
                      <h5 className={theme === 'light' ? "text-gray-900" : 'text-gray-400'}>{item.title}</h5>
                    </Button>
                    <span className={theme === 'light' ? "text-gray-600" : 'text-gray-400'}>
                      <RiUser3Fill className="mb-1" />{" "}
                      {item.author === 'Aldy Wayong'
                        ? 'Ikhbal Dwiyantoro'
                        : item.author}
                    </span>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      ) : (
        <SkeletonCategory theme={theme} />
      )}
    </div>
  );
}

export default Categories;
