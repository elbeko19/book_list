let btn = document.querySelector('.btn');
let bookList = document.getElementById('book-list');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let year = document.getElementById('year').value;

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = title;
    td2.innerHTML = author;
    td3.innerHTML = year;
    tr.append(td1, td2, td3);
    bookList.appendChild(tr);
});