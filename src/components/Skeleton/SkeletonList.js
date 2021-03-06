import React from 'react';
import Skeleton from 'react-content-loader';
import { skeletonIsDark } from 'utils/skeletonIsDark';

function SkeletonList({theme}) {
  return (
    <Skeleton speed={2} width={900} height={1130} backgroundColor={skeletonIsDark(theme, true)} foregroundColor={skeletonIsDark(theme)}>
      <rect x="0" y="0" rx="12" ry="12" width="30%" height="250" />
      <rect x="300" y="10" rx="2" ry="2" width="500" height="18" />
      <rect x="300" y="40" rx="2" ry="2" width="250" height="15" />
      <rect x="300" y="80" rx="2" ry="2" width="400" height="10" />
      <rect x="300" y="100" rx="2" ry="2" width="500" height="10" />
      <rect x="300" y="120" rx="2" ry="2" width="600" height="10" />

      <rect x="300" y="140" rx="2" ry="2" width="600" height="12" />
      <rect x="300" y="160" rx="2" ry="2" width="600" height="12" />
      <rect x="300" y="210" rx="0" ry="0" width="100" height="40" />

      <rect x="0" y="300" rx="12" ry="12" width="30%" height="250" />
      <rect x="300" y="310" rx="2" ry="2" width="500" height="18" />
      <rect x="300" y="340" rx="2" ry="2" width="250" height="15" />
      <rect x="300" y="380" rx="2" ry="2" width="400" height="10" />
      <rect x="300" y="400" rx="2" ry="2" width="500" height="10" />
      <rect x="300" y="420" rx="2" ry="2" width="600" height="10" />

      <rect x="300" y="440" rx="2" ry="2" width="600" height="12" />
      <rect x="300" y="460" rx="2" ry="2" width="600" height="12" />
      <rect x="300" y="510" rx="0" ry="0" width="100" height="40" />

      <rect x="0" y="580" rx="12" ry="12" width="30%" height="250" />
      <rect x="300" y="590" rx="2" ry="2" width="500" height="18" />
      <rect x="300" y="620" rx="2" ry="2" width="250" height="15" />
      <rect x="300" y="660" rx="2" ry="2" width="400" height="10" />

      <rect x="300" y="680" rx="2" ry="2" width="500" height="10" />
      <rect x="300" y="700" rx="2" ry="2" width="600" height="10" />

      <rect x="300" y="720" rx="2" ry="2" width="600" height="12" />
      <rect x="300" y="740" rx="2" ry="2" width="600" height="12" />
      <rect x="300" y="790" rx="0" ry="0" width="100" height="40" />

      <rect x="0" y="880" rx="12" ry="12" width="30%" height="250" />
      <rect x="300" y="890" rx="2" ry="2" width="500" height="18" />
      <rect x="300" y="920" rx="2" ry="2" width="250" height="15" />
      <rect x="300" y="960" rx="2" ry="2" width="400" height="10" />

      <rect x="300" y="980" rx="2" ry="2" width="500" height="10" />
      <rect x="300" y="1000" rx="2" ry="2" width="600" height="10" />

      <rect x="300" y="1020" rx="2" ry="2" width="600" height="12" />
      <rect x="300" y="1040" rx="2" ry="2" width="600" height="12" />
      <rect x="300" y="1090" rx="0" ry="0" width="100" height="40" />
    </Skeleton>
  );
}

export default SkeletonList;
