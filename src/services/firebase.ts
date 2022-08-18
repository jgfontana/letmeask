import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwqJLVpiNEuAFnW-NYoSokM80db4u2UkY",
  authDomain: "letmeask-joaogfontana.firebaseapp.com",
  databaseURL: "https://letmeask-joaogfontana-default-rtdb.firebaseio.com",
  projectId: "letmeask-joaogfontana",
  storageBucket: "letmeask-joaogfontana.appspot.com",
  messagingSenderId: "828671143155",
  appId: "1:828671143155:web:91bb033d224b9964509b86"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();