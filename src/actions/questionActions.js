import * as firebase from 'firebase';

export const fetchQuestions = (domain) => {
    return (dispatch, getState) => {
      const questionRef = firebase.database().ref('Questions');
      let questions = [];
      questionRef.on('value', snap => {
        let questionsObj = snap.val();
        console.log(questionsObj[domain])
        for (let questiont in questionsObj) {
            const question = questionsObj[questiont][1]
            questions.push({
                fquestion: question['fquestion'],
                fweight: question['fweight'],
                question: question['question'],
                weight: question['weight'],
            });
        }
        dispatch({ type: 'FETCH_QUESTIONS_DONE', questions });
      });
    };
  };

