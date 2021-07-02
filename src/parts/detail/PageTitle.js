import React from 'react'
import Fade from 'react-reveal/Fade';
import Breadcrumb from 'elements/Breadcrumb';

export default function PageTitle({data, breadcrumb}) {
  return (
    <Fade>
      <div className="row align-items">
        <div className="col-12">
          <Breadcrumb data={breadcrumb} className="mr-3" />
        </div>
        <div className="container">
          <div className="col-8 text-left">
            <h1 className="h3">{data.title}</h1>
            <span className="text-gray-500">
              <span className="text-gray-600">{data.author}</span> - {data.date}
            </span>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </Fade>
  )
}
