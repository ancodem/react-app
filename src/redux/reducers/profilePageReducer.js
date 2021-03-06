import {
  ADD_POST,
  DELETE_POST,
  SET_USER_PROFILE,
  SHOW_POST_INPUT,
  GET_CURRENT_USER,
  SET_CURRENT_USER_PROFILE,
} from '../actions/profile_page/profilePageActionTypes'

const initialState = {
  posts: [
    { message: 'hi there' },
    { message: 'hello, world' },
    { message: 'barabashka' },
    { message: 'pater noster' },
    { message: 'qui es in celis' },
    { message: 'Ragnar Logbrock' },
    { message: 'You misspelled that one' },
  ],
  newPost: '',
  userProfile: null,
  currentUser: null,
}

export const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { message: state.newPost }],
        newPost: '',
      }
    case DELETE_POST:
      const index = state.posts.indexOf(action.post)
      state.posts.splice(index, 1)

      return {
        ...state,
        posts: [...state.posts],
      }

    case SHOW_POST_INPUT:
      return {
        ...state,
        newPost: action.input,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      }
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.userID,
      }
    case SET_CURRENT_USER_PROFILE:
      return {
        ...state,
        userProfile: state.currentUser,
      }
    default:
      return state
  }
}
