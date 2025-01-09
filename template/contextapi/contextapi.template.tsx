import React, {
  createContext, ReactNode, useContext, useState, useMemo
} from 'react';

type ContextValueType = {
  /**
   * 1. Add ContextValueType, value, actions
   */
};
const Context = createContext<ContextValueType | undefined>(undefined);
const TODO_Provider: React.FC<{children: ReactNode}> = ({children}) => {
  const [TODO_value, TODO_setValue] = useState();
  const actions = useMemo(() => ({
    /**
     * 1. Rewrite TODO prefix
     * 2. define actions
     *    - action is change state
     */
  }), []);
  const value = useMemo(() => ({TODO_value, actions}), [TODO_value, actions]);
};
export default TODO_Provider;

export const TODO_useContext = () => {
  const value = useContext(Context);
  if (value === undefined) {
    throw new Error('useContext must be used within a Provider');
  }
  return value;
};
