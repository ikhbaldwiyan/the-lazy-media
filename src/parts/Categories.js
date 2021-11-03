import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import SkeletonCategory from 'components/Skeleton/SkeletonCategory';

function Categories({data, title}) {
  return (
    <div className="mt-4 mb-4">
      <h3 className="mb-3 font-weight-medium">{title}</h3>
      {data && data.length ? (
        <div className="container-grid">
          {data.slice(0, 4).map((item, idx) => (
            <div className="item column-3 row-1" key={idx}>
              <Fade right delay={300 * idx}>
                <div className="card">
                  <div className="tag-article">{item.tag}</div>
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={item.thumb}
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
                      <h5 className="h4">{item.title}</h5>
                    </Button>
                    <span className="text-gray-500">
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
        <SkeletonCategory />
      )}
    </div>
  );
}

export default Categories;
