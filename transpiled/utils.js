'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUIState = undefined;

var _immutable = require('immutable');

/**
 * getUIState inspects redux' global state store and returns the UI state node.
 *
 * This checks to see whether state is an immutable map or a POJO.
 */
var getUIState = exports.getUIState = function getUIState(state) {
  if (typeof state.get === 'function') {
    if (_immutable.Map.isMap(state)) {
      if (_immutable.List.isList(state.get('history'))) {
        return state.get('current').get('ui');
      }
    } else {
      return state.get('ui');
    }
  }
  return state.ui;
};