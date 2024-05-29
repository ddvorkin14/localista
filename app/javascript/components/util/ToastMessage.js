import { Alert } from "antd";
import React from "react";

const ToastMessage = ({ message, type }) => {
  return (
    message && type && (
      <Alert message={message} type={type} showIcon closable />
    )
  );
}

export default ToastMessage;