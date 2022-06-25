import React, { memo } from "react";

interface EmptyProps {
  children: React.ReactNode;
}

const Empty = ({ children }: EmptyProps) => {
  return <>{children}</>;
};

export default memo(Empty);
