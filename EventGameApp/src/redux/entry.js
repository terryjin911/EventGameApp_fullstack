// 하나하나 치면 틀리니까 변수에 담아서 사용(reduxsample-product.js member.js 설명참고)
const GET_ENTRY = "GET_ENTRY";
const SET_ENTRY = "SET_ENTRY";
const SET_USER = "SET_USER";

export const getEntry = () => ({
  type: GET_ENTRY,
});
export const setEntry = (userScore) => ({
  type: SET_ENTRY,
  userScore: userScore,
});

export const setUserInfo = (user) => ({
  type: SET_USER,
  name: user.name,
  email: user.email,
});

// string을 변수에 담기
// 액션의 type에 따라 변화가 일어남
let initialState = {
  userScore: 0,
  users:[
    {
      userName: "initialState에서 온 값입니다",
      userEmail: "initialState에서 온 어쩌구",
    },
  ],
};

// 리듀서 함수 정의
const entry = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTRY:
      console.log("리덕스 GET_ENTRY", action);
      return state;

    case SET_ENTRY:
      console.log("리덕스 SET_ENTRY", action);
      return {
        ...state,
        userScore: action.userScore,
      };

    case SET_USER:
      console.log("리덕스 SET_USER", action);
      return {
        ...state,
        name: action.name,
        email: action.email,
      };

    default:
      return state;
  }
};

export default entry;
