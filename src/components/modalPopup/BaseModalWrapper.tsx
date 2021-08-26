import React from "react";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  isModalVisible,
  onBackdropClick,
}) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <div>modal wrapper</div>
  );
};

export default BaseModalWrapper;
