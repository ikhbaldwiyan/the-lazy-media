import React from 'react'
import Skeleton from "react-content-loader";
import { skeletonIsDark } from 'utils/skeletonIsDark';

function SkeletonCategory({theme}) {
  return (
    <Skeleton height={300} width={1300} backgroundColor={skeletonIsDark(theme, true)} foregroundColor={skeletonIsDark(theme)}>
      <rect x="0" y="20" rx="8" ry="8" width="250" height="200" />
      <rect x="0" y="250" rx="0" ry="0" width="250" height="18" />
      <rect x="0" y="275" rx="0" ry="0" width="160" height="20" />
      <rect x="270" y="20" rx="8" ry="8" width="250" height="200" />
      <rect x="270" y="250" rx="0" ry="0" width="250" height="18" />
      <rect x="270" y="275" rx="0" ry="0" width="160" height="20" />
      <rect x="550" y="20" rx="8" ry="8" width="250" height="200" />
      <rect x="550" y="250" rx="0" ry="0" width="250" height="18" />
      <rect x="550" y="275" rx="0" ry="0" width="160" height="20" />
      <rect x="830" y="20" rx="8" ry="8" width="250" height="200" />
      <rect x="830" y="250" rx="0" ry="0" width="250" height="18" />
      <rect x="830" y="275" rx="0" ry="0" width="160" height="20" />
    </Skeleton>
  )
}

export default SkeletonCategory;