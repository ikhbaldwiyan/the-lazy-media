import React from 'react';
import Skeleton from "react-content-loader";

function SkeletonDetail() {
  return (
    <Skeleton viewBox="0 0 100% 650" height={900} width="100%">
      <rect x="0" y="0" rx="5" ry="5" width="60%" height="18" />
      <rect x="0" y="30" rx="5" ry="5" width="80%" height="20" />
      <rect x="0" y="70" rx="5" ry="5" width="100%" height="400" />

      <rect x="0" y="500" rx="5" ry="5" width="80%" height="8" />
      <rect x="0" y="520" rx="5" ry="5" width="90%" height="8" />
      <rect x="0" y="540" rx="5" ry="5" width="100%" height="8" />
      <rect x="0" y="560" rx="5" ry="5" width="100%" height="8" />
      <rect x="0" y="580" rx="5" ry="5" width="100%" height="8" />
      <rect x="0" y="600" rx="5" ry="5" width="100%" height="8" />
      <rect x="0" y="620" rx="5" ry="5" width="100%" height="8" />

      <rect x="0" y="660" rx="5" ry="5" width="90%" height="8" />
      <rect x="0" y="680" rx="5" ry="5" width="95%" height="8" />
      <rect x="0" y="700" rx="5" ry="5" width="100%" height="8" />
      <rect x="0" y="720" rx="5" ry="5" width="100%" height="8" />
      <rect x="0" y="740" rx="5" ry="5" width="100%" height="8" />
      <rect x="0" y="760" rx="5" ry="5" width="100%" height="8" />
      <rect x="0" y="780" rx="5" ry="5" width="100%" height="8" />
      <rect x="0" y="800" rx="5" ry="5" width="100%" height="8" />
    </Skeleton>
  );
}

export default SkeletonDetail;