import React, {ReactNode} from 'react';
import TODO_Provider, {TODO_useContext} from 'TODO_path';

/**
 * 1. Rewrite TODO prefix
 * 2. Rewrite useContext with your own context hook
 *    - Check context.api.custom.tsx
 */
const ContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  <TODO_Provider>
    {children}
  </TODO_Provider>
};

export default ContextProvider;

export const useStores = () => ({
  /**
   * 
   */
  TODO_store: TODO_useContext(),
});
