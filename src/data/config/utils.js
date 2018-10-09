import { message } from 'antd';

export const showSuccessMessage = (content, duration, onClose) => {
  message.success(content, duration, onClose);
};

export const showErrorMessage = (content, duration, onClose) => {
  message.error(content, duration, onClose);
};
