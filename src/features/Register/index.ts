import { getRegisterUserId } from './model/selectors/getRegisterUserId/getRegisterUserId';
import {
  RegisterActions,
  RegisterReducer,
  RegisterSlice,
} from './model/slices/RegisterSlice';
import RegisterForm from './ui/RegisterForm';

export { RegisterSlice, RegisterActions, RegisterReducer, RegisterForm };

export { getRegisterUserId };
