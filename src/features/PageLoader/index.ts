import PageLoader from './ui/PageLoader';
import {
  PageLoaderActions,
  PageLoaderReducer,
} from './model/slices/PageLoaderSlice';
import { getPageLoaderData } from './model/selectors/getPageLoaderData/getPageLoaderData';

export { PageLoader, PageLoaderReducer, PageLoaderActions };
export { getPageLoaderData };
