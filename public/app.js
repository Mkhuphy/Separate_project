const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let phone = document.createElement('span');
    let college = document.createElement('span');
    let fb = document.createElement('span');
    let ld = document.createElement('span');
    let insta = document.createElement('span');
    let tw = document.createElement('span');
    
    li.setAttribute('data-id', doc.id);
    name.textContent = "Name:                           "+doc.data().name;
    email.textContent = "email:                             "+doc.data().email;
    phone.textContent = "phone:                             "+doc.data().phone;
    college.textContent = "College:                          "+doc.data().college;
    fb.textContent = "fb_link:                           "+doc.data().fb;
    ld.textContent = "ld_link:                           "+doc.data().linkedin;
    insta.textContent = "insta:                             "+doc.data().insta;
    tw.textContent = "tw:                           "+doc.data().twitter;


    li.appendChild(name);
    li.appendChild(college);
    li.appendChild(email);
    li.appendChild(phone);
    li.appendChild(fb);
    li.appendChild(ld);
    li.appendChild(insta);
    li.appendChild(tw);
    

    cafeList.appendChild(li);

}


async function  w (){
const citiesRef = db.collection('People');
const snapshot = await citiesRef.get();

snapshot.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
  renderCafe(doc)
});

}
async function  we (){
    console.log("FN called");
    const e = 'dok'
    const r= 'People/'+e+'/points';

    const citiesRef = db.collection('People');
    const snapshot = await citiesRef.get();
    // hideFunction(form.name.value);
    snapshot.forEach(doc => {
      // console.log(doc.id, '=>', doc.data());
      // renderCafe1(doc);
      renderCafe(doc);

    });
}

we();
function hideFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('name').value;
  filter = input.toUpperCase();
  ul = document.getElementById("cafe-list"); 
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    // a = li[i].getElementsByTagName("a")[0];
    // x = li[i].getel
    for(j = 0; j<li[i].childElementCount; j++){
      temp = (li[i].childNodes[j].textContent).toString().toUpperCase();
      pos = temp.indexOf(filter);
      if(pos!=-1){
        li[i].style.display = "block";
        break;
      }
      if(j==(li[i].childElementCount-1)){
        li[i].style.display = "none";
      }
    }
 
    // txtValue = a.textContent || a.innerText;
    // if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //   li[i].style.display = "";
    // } else {
    //   li[i].style.display = "none";
    // }
  }
}
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const citiesRef = collection(db, "People");
//   const q = query(citiesRef, where("name", "==", form.name.value));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach(async (dox) => {
//     console.log(q);
//     // renderCafe(dox);
// });


//   form.name.value = '';
//   form.city.value = '';
// });
//, "<", form.name.value+"zz"
