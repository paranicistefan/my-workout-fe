import { Skeleton } from "primereact/skeleton";
import { StyledContent } from "./styles";

const SkeletonLoader = () => {
  return (
    <StyledContent>
      <Skeleton height="64px" borderRadius="16px" />
      <Skeleton height="64px" borderRadius="16px" />
      <Skeleton height="64px" borderRadius="16px" />
    </StyledContent>
  );
};

export default SkeletonLoader;
