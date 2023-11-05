import SkeletonPrimitive from "react-loading-skeleton";
import styled from "styled-components";

import type { SkeletonProps as SkeletonPrimitiveProps } from "react-loading-skeleton";

interface SkeletonProps extends SkeletonPrimitiveProps {}

const StyledSekeletonPrimitive = styled(SkeletonPrimitive)``;

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <StyledSekeletonPrimitive {...props} />;
};
