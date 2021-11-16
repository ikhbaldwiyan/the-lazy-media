import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";

import MainLayout from 'components/layout/MainLayout';
import PageTitle from 'parts/detail/PageTitle';
import formatDescription from 'utils/formatDescription';
import SkeletonDetail from 'components/Skeleton/SkeletonDetail';
import Related from 'parts/Related';
import Sidebar from 'parts/detail/Sidebar';

function DetailArticle(props) {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [dataRelated, setDataRelated] = useState('');
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

  useEffect(() => {
    if (detail.categories && detail.categories[0] !== "Uncategorized") {
      const dataRelated = detail.categories[0] !== "Uncategorized" ? detail.categories[1].toLowerCase() : 'games';
      setDataRelated(dataRelated);
    }
  }, [dataRelated, detail.categories, slug])
 

  return (
    <MainLayout title={detail.title} {...props}>
      {loading ?
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mt-3">
              <SkeletonDetail />
            </div>
          </div>
        </div> :
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <PageTitle data={detail} theme={props.theme} />
              <div>
                <div className="container-grid sm mt-3">
                  <div className="item column-12">
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
                  <div className="col">
                    <p>{(ReactHtmlParser(formatDescription(detail.content)))}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="sticky">
                <Sidebar popular={dataRelated} setLoading={setLoading} theme={props.theme} />
              </div>
            </div>
            <div className="container">
              <Related categories={dataRelated} setLoading={setLoading} theme={props.theme} />
            </div>
          </div>
        </div>
      }
    </MainLayout>
  )
}

export default DetailArticle;
