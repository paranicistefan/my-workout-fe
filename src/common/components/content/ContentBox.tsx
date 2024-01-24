import { ReactNode } from "react";
import { StyledContent } from "./styles";
import SkeletonLoader from "./SkeletonLoader";

interface IContentBox {
  dataLength?: number;
  children: ReactNode;
  isLoading?: boolean;
  error?: string;
}
const ContentBox = ({
  children,
  dataLength,
  isLoading = false,
  error,
}: IContentBox) => {
  if (isLoading) return <SkeletonLoader />;

  if (error) return <p>{error}</p>;

  return (
    <StyledContent>
      {dataLength === 0 && <p>No data available</p>}
      {children}
    </StyledContent>
  );
};

export default ContentBox;
