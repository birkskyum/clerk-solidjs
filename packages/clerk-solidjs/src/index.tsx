import './polyfills';

import { setErrorThrowerOptions } from './errors/errorThrower';

export * from './components';
export * from './contexts';
export * from './errors';

export * from './hooks';
export type {
  BrowserClerk,
  ClerkProp,
  ClerkProviderProps,
  HeadlessBrowserClerk
} from './types';

setErrorThrowerOptions({ packageName: PACKAGE_NAME });
