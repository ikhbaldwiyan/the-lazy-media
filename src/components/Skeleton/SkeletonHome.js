import React from 'react'
import Skeleton from "react-content-loader";
import { skeletonIsDark } from 'utils/skeletonIsDark';

function SkeletonHome({theme}) {
  return (
    <Skeleton height={420} width={1300} backgroundColor={skeletonIsDark(theme, true)} foregroundColor={skeletonIsDark(theme)}>
      <rect x="0" y="20" rx="8" ry="8" width="340" height="400" />
      
      <rect x="370" y="20" rx="8" ry="8" width="350" height="190" />
      <rect x="742" y="20" rx="8" ry="8" width="350" height="190" />
     
      <rect x="370" y="230" rx="8" ry="8" width="350" height="190" />
      <rect x="742" y="230" rx="8" ry="8" width="350" height="190" />
    </Skeleton>
  )
}

export default SkeletonHome;
