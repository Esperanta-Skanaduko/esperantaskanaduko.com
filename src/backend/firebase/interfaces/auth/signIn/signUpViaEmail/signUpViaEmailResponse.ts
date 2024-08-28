import { User } from 'firebase/auth';
import { ErrorObject } from '../../../../../interfaces/errorObject';

export interface CreateUserViaEmailResponse {
  user?: User;
  error?: ErrorObject;
}
