import {
  action, makeObservable, observable,
} from 'mobx';
/**
 * 1. Rewrite "TODO prefix"
 * 2. Rewrite value "type"
 */
export class TODO_Store {
  @observable TODO_value: any;

  constructor() {
    makeObservable(this);
  }

  @action
  setTODO_Value(value: any) {
    this.TODO_value = value;
  }
}
