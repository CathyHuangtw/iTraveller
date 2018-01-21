import { combineReducers } from 'redux';  
//import projects from './projectReducer';
//import projdetail from './projDetailReducer';

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

const rootReducer = combineReducers({  
  // short hand property names
  entities
})

export default rootReducer;  