import React from 'react'
import Skeleton from "react-content-loader";
import { skeletonIsDark } from 'utils/skeletonIsDark';

function SkeletonSidebar({theme}) {
  return (
    <Skeleton height={460} width={1300} backgroundColor={skeletonIsDark(theme, true)} foregroundColor={skeletonIsDark(theme)}>
      <rect x="0" y="20" rx="8" ry="8" width="160" height="150" />
      <rect x="0" y="180" rx="0" ry="0" width="160" height="18" />
      <rect x="0" y="205" rx="0" ry="0" width="130" height="20" />

      <rect x="180" y="20" rx="8" ry="8" width="160" height="150" />
      <rect x="180" y="180" rx="0" ry="0" width="160" height="18" />
      <rect x="180" y="205" rx="0" ry="0" width="130" height="20" />
      
      <rect x="0" y="250" rx="8" ry="8" width="160" height="150" />
      <rect x="0" y="410" rx="0" ry="0" width="160" height="18" />
      <rect x="0" y="435" rx="0" ry="0" width="130" height="20" />

      <rect x="180" y="250" rx="8" ry="8" width="160" height="150" />
      <rect x="180" y="410" rx="0" ry="0" width="160" height="18" />
      <rect x="180" y="435" rx="0" ry="0" width="130" height="20" />
    </Skeleton>
  )
}

export default SkeletonSidebar;