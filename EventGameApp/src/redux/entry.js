// 하나하나 치면 틀리니까 변수에 담아서 사용(reduxsample-product.js member.js 설명참고)
const GET_ENTRY = "GET_ENTRY";
const SET_ENTRY = "SET_ENTRY";
const SET_USER = "SET_USER";

export const getEntry = () => ({
  type: GET_ENTRY,
});
export const setEntry = (score) => ({
  type: SET_ENTRY,
  score: score,
});

export const setUserInfo = (user) => ({
  type: SET_USER,
  name: user.name,
  email: user.email,
});

// string을 변수에 담기
// 액션의 type에 따라 변화가 일어남
const initialState = {
  score: 0,
  name: "",
  email: "",
};

const entry = (entryState = initialState, action) => {
  switch (action.type) {
    case GET_ENTRY:
      return entryState;

    case SET_ENTRY:
      return {
        ...entryState,
        score: action.score,
      };

    case SET_USER:
      return {
        ...entryState,
        name: action.name,
        email: action.email,
      };

    default:
      return entryState;
  }
};

export default entry;
