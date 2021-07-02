import React, { useEffect } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';

function MainLayout(props) {
  useEffect(() => {
    const title = props.title ? `${props.title} - The Lazy Media ` : 'The Lazy Media'
    window.document.title = title
  });

  return (
    <>
      <Header {...props} />
        <div className="container">
          {props.children}
        </div>
      <Footer />
    </>
  );
}

export default MainLayout;
