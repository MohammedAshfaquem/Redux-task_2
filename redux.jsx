import { combineReducers, createStore } from "redux";

const count = {
  value: 0,
};

const user = {
  name: "anas",
  login: true,
};

function Counter(state = count, action) {
  switch (action.type) {
    case "inc":
      return {
        value: state.value + 1,
      };
    case "dec":
      return {
        value: state.value - 1,
      };

    default:
      return state;
  }
}
function User(state = user, action) {
  switch (action.type) {
    case "login":
      return {
        ...user,
        login: true,
      };
    case "logout":
      return {
        ...user,
        login: false,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: Counter,
  auth: User,
});

function inc() {
  return {
    type: "inc",
  };
}
function dec() {
  return {
    type: "dec",
  };
}

const store = createStore(rootReducer);

export default store;

export { inc, dec };
