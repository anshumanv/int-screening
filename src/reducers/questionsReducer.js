
const initialState = {
  questions: [],
  qIndex: 0,
  currentAns: 0,
  questionText: '',
  askFollow: false,

};
  
  export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_QUESTIONS_DONE':
        return { ...state, questions: action.questions };
      case 'ANSWER_QUESTION':
        return { ...state, questions: action.questions };
      default:
        return state;
    }
  };