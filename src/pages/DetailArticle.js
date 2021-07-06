import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";

import MainLayout from 'components/layout/MainLayout';
import PageTitle from 'parts/detail/PageTitle';
import formatDescription from 'utils/formatDescription';
import SkeletonDetail from 'components/Skeleton/SkeletonDetail';
import Related from 'parts/Related';

function DetailArticle(props) {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const slug = window.location.pathname;

  useEffect(async () => {
    window.scrollTo(0,0);
    await axios.get(`https://the-lazy-media-api.vercel.app/api${slug}`)
      .then((res) => {
        const data = res.data.results;
        setDetail(data);
      });

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [slug]);

  const dataRelated = detail.categories && detail.categories[1].toLowerCase();

  return (
    <MainLayout title={detail.title} {...props}>
      {loading ?
        <div className="row">
          <div className="col-8 mt-3">
            <SkeletonDetail />
          </div>
        </div> :
        <>
          <PageTitle data={detail} />
          <div className="container">
            <div className="container-grid sm mt-3">
              <div className="item column-8">
                <div className="card">
                  <figure className="img-wrapper">
                    <img
                      className="img-cover"
                      src={detail.thumb ?? 'https://i.stack.imgur.com/y9DpT.jpg'}
                      alt={detail.title}
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-8">
                <p>{ReactHtmlParser(formatDescription(detail.content))}</p>
              </div>
              <Related categories={dataRelated} setLoading={setLoading} />
            </div>
          </div>
        </>
      }
    </MainLayout>
  )
}

export default DetailArticle;
