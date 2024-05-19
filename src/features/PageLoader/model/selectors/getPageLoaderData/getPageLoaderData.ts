import { StateSchema } from 'app/providers/StoreProvider';

export const getPageLoaderData = (state: StateSchema) => state?.PageLoader;
