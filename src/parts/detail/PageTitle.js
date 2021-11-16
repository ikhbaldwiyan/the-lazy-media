import React from 'react'
import Fade from 'react-reveal/Fade';
import Breadcrumb from 'elements/Breadcrumb';
import { RiUser3Fill } from 'react-icons/ri';

export default function PageTitle({data, theme}) {
  const breadcrumb = [
    { pageTitle: "Article", pageHref: "/article" },
    { pageTitle: data.categories && data.categories[0] , pageHref: "" },
    { pageTitle: data.categories && data.categories[1] , pageHref: "" },
  ];

  return (
    <Fade>
      <div className="row align-items">
        <Breadcrumb data={breadcrumb} className="mr-3" />
        <div className="col-12 text-left">
          <h1 className="h3">{data.title}</h1>
          <span className="text-gray-500">
            <span className={theme === 'light' ? "text-gray-600" : 'text-gray-400'}>
              <RiUser3Fill size={15} className="mb-1" />{" "}
              {data.author === 'Aldy Wayong'
                ? 'Ikhbal Dwiyantoro'
                : data.author}
            </span> - {data.date}
          </span>
        </div>
        <div className="col"></div>
      </div>
    </Fade>
  )
}
