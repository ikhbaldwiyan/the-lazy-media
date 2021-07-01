import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import SkeletonCategory from 'components/Skeleton/SkeletonCategory';

function Categories({data, title}) {
  return (
    <div className="container mt-4 mb-4">
      <h4 className="mb-3 font-weight-medium">{title}</h4>
      {data && data.length ? (
        <Fade bottom>
          <div className="container-grid">
            {data.slice(0, 4).map((item, idx) => (
              <div className="item column-3 row-1" key={idx}>
                <Fade bottom delay={300 * idx}>
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
        </Fade>
      ) : (
        <SkeletonCategory />
      )}
    </div>
  );
}

export default Categories;
