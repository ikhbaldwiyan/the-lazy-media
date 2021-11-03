import React from 'react'
import Fade from 'react-reveal/Fade';
import Breadcrumb from 'elements/Breadcrumb';

export default function PageTitle({data}) {
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
            <span className="text-gray-600">
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
