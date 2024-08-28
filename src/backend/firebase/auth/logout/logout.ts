import Paths from '../../../../frontend/routes/paths/paths';
import ClearAllMobileStorage from '../../../util/authentication/user/sessionStorage/clearAllMobileStorage';

const Logout = (): void => {
  ClearAllMobileStorage();
  window.location.href = Paths.Auth.login;
};

export default Logout;
