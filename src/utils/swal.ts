import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { alertType } from './constants';
import { IToast } from '../interfaces/interfaces';

const showAlert = (
  title: string,
  message: string,
  confirmButtonText: string,
  type: string
) => {
  // #region icon setting
  let icon = '';
  if (type === alertType.NET_ERROR)
    icon = `<img class='alert-icon' src="/images/alert-icons/network-error.png">`;
  else if (type === alertType.SERVER_ERROR)
    icon = `<img class='alert-icon' src="/images/alert-icons/server-error.png">`;
  else if (type === alertType.FORBID_ERROR)
    icon = `<img class='alert-icon' src="/images/alert-icons/forbidden.png">`;
  else if (type === alertType.UNAUTH_ERROR)
    icon = `<img class='alert-icon' src="/images/alert-icons/unauthorized.png">`;
  else if (type === alertType.ERROR)
    icon = `<img class='alert-icon' src="/images/alert-icons/error.png">`;
  else if (type === alertType.SUCCESS)
    icon = `<img class='alert-icon' src="/images/alert-icons/success.png">`;
  // #endregion

  // #region custom classes
  const classes = {
    confirmButton: 'bg-primary text-light py-1 px-4',
  };
  // #endregion

  Swal.fire({
    customClass: classes,
    buttonsStyling: false,
    title,
    text: message,
    iconHtml:
      icon || `<img class='alert-icon' src="/images/alert-icons/success.png">`,
    confirmButtonText,
    backdrop: true,
  });
};

const showCofirmDialog = (
  title: string,
  message: string,
  confirmButtonText: string,
  onConfirm: () => void,
  type: string
) => {
  // #region icon setting
  let icon = '';
  if (type === alertType.INFO)
    icon = `<img class='alert-icon' src="/images/alert-icons/info.png">`;
  else if (type === alertType.WARNING)
    icon = `<img class='alert-icon' src="/images/alert-icons/warning.png">`;
  // #endregion

  // #region custom classes
  const classes = {
    confirmButton: `${
      type === alertType.WARNING ? 'bg-danger' : 'bg-primary'
    } py-1 px-2 my-2 me-2`,
    cancelButton: 'bg-danger text-light py-1 px-2 my-2',
  };
  // #endregion

  Swal.fire({
    title,
    text: message,
    customClass: classes,
    buttonsStyling: false,
    showCancelButton: true,
    confirmButtonText,
    iconHtml:
      icon || `<img class='alert-icon' src="/images/alert-icons/success.png">`,
    backdrop: true,
  }).then(result => {
    if (result.isConfirmed) {
      onConfirm();
    }
  });
};

const toastify = ({ message, toast_type, toast_theme }: IToast) => {
  toast(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: toast_theme === 'dark' ? 'dark' : 'light',
    type: toast_type,
  });
};
const swal = {
  showAlert,
  showCofirmDialog,
  toastify,
};
export default swal;
