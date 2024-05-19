import { createContext } from 'react';

export interface DimensionsContextProps {
  width: number;
  height: number;
  appRect: DOMRect | undefined | null;
}

export const DimensionsContext = createContext<DimensionsContextProps>({
  width: 0,
  height: 0,
  appRect: null,
});
