import { createUserWithEmailAndPassword, UserCredential, Auth, getAuth } from 'firebase/auth';
import ResponsePlaceholder from '../responsePlaceholder';
import { CreateUserViaEmailResponse } from '../../interfaces/auth/signIn/signUpViaEmail/signUpViaEmailResponse';
import UUID from '../../../util/authentication/uuid';
import AddUserToMobileStorage from '../../../util/authentication/user/sessionStorage/set/addUserToMobileStorage';

const CreateUserViaEmail = async (args: { email: string; password?: string }): Promise<CreateUserViaEmailResponse> => {
  const { email, password } = args;
  const auth: Auth = getAuth();
  let response: CreateUserViaEmailResponse = {
    error: ResponsePlaceholder,
  };

  await createUserWithEmailAndPassword(auth, email, password ?? UUID())
    .then((userCredential: UserCredential) => {
      const { user } = userCredential;
      response.user = user;
      AddUserToMobileStorage(user);
      return response;
    })
    .catch(error => {
      response = error;
      return response;
    });
  return response;
};

export default CreateUserViaEmail;
