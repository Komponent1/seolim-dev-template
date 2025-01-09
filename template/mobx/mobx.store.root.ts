import { createContext, useContext } from 'react';
import { TODO_Store } from 'TODO_path';

class RootStore {
  readonly userStore: TODO_Store;

  constructor() {
    this.userStore = new TODO_Store();
  }
}

const rootStore = new RootStore();
export default rootStore;
export const StoreContext = createContext(rootStore);
export const useStores = () => useContext(StoreContext);
