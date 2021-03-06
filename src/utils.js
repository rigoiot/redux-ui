'use strict';

import {Map, List} from 'immutable';

/**
 * getUIState inspects redux' global state store and returns the UI state node.
 *
 * This checks to see whether state is an immutable map or a POJO.
 */
export const getUIState = (state) => {
  if (typeof state.get === 'function') {
    if (Map.isMap(state)) {
      if (List.isList(state.get('history'))) {
        return state.get('current').get('ui');
      }
    } else {
      return state.get('ui');
    }
  }
  return state.ui;
}
