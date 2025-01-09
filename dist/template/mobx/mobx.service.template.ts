import rootStore from 'TODO_path';
import type {TODO_Store} from 'TODO_path';

/**
 * 1. Rewrite "TODO prefix"
 * 2. Add Service Function
 */
class TODO_Service {
  constructor(
    private TODO_Store: TODO_Store,
  ) {}
}

export default new TODO_Service(rootStore.TODO_Store);
