const cafeList = document.querySelector('#cafe-list');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let li1 = document.createElement('li');
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
    li1.textContent = "1.";
    

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
w();

