const firebaseConfig = {
 apiKey: "AIzaSyAXX9HtVGKSkOKqGRcagWacWyf-Bp-fh5k",
 authDomain: "nv1teame-74e4a.firebaseapp.com",
 projectId: "nv1teame-74e4a",
 storageBucket: "nv1teame-74e4a.appspot.com",
 messagingSenderId: "141682043367",
 appId: "1:141682043367:web:283980f5d8490d93c03542",
 measurementId: "G-MH32764T48"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

window.onload = function(){
 let url = new URL(window.location.href); // URLを取得
 let params = url.searchParams; // URLSearchParamsオブジェクトを取得
 
document.getElementById('class').innerHTML = "<div>"+params.get('class')+"</div>";
document.getElementById('course').innerHTML = "<div>"+params.get('course')+":"+params.get('count')+"限目</div>";
document.getElementById('time').innerHTML = "<div>"+params.get('time')+"</div>";
 


}
$('#sousin').on('click', function() {
  
  let ta = document.getElementById("textarea").value;

   let firestoreRef = db.collection("report").doc("NV1").collection("01").doc("NV100A");
// let firestoreRef = db.collection("report").doc(params.get('class')).collection(no).doc(params.get('course'));
// let firestoreFieldName = params.get('time');
let firestoreFieldName = 202212231;
  let updateObject = {}
  updateObject[firestoreFieldName] = [ta]
  console.log(firestoreRef)
  //    return firestoreRef.update(updateObject)
  firestoreRef.set(updateObject)
 
 
});
