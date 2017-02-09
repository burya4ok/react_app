import * as React from 'react';
import {Provider} from 'react-redux';
import * as TestUtils from 'react-addons-test-utils';
import * as expect from 'expect';

import * as configureStore from 'configureStore';
import * as TodoApp from '../../components/TodoApp';
import {TodoList} from '../../components/TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    let store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
