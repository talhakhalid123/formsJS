let name = document.getElementById("name");
let job = document.getElementById("job");
let mobile = document.getElementById("mobile");
let arr = [];
let search = [];
let searchInput = document.getElementById("search");
let items = document.getElementById("items");

const add = () => {
    if (!name.value || !job.value || !mobile.value) {
        alert("Please enter the value in all fields");
        return;
    }
    let person = {
        name: name.value,
        job: job.value,
        mobile: mobile.value
    };
    if (arr.find(personIn => personIn.name == person.name || personIn.job == person.job || personIn.mobile == person.mobile)) {
        alert("Please don't repeat the values");
        return;
    } else {
        arr.push(person);
        let table = document.getElementById("putHere");
        let tableData = arr.map((user) => {
            return "<tr><td>" + user.name + "</td><td>" + user.job + "</td><td>" + user.mobile + '</td><td><button type="button" id="button-1" onclick="editItem()">Edit</button>' + '</td><td><button type="button" id="button-2" onclick="delItem()">Delete</button>' + "</td></tr>";
        });
        table.innerHTML = tableData;
    }

    console.log(typeof arr);
}
const form = document.getElementById("button-sb");
form.addEventListener('click', add);


// Search Field
function searchTable() {
    // searchInput.addEventListener("keyup", function(event) {
    searchEl(searchInput.value);
    // });
}

function searchEl(value) {
    if (value) {
        arr = search.filter((item) => {
            return item.toLowerCase().includes(value.toLowerCase());
        });
    } else {
        console.log("headgds");
        arr = search;
    }
    print();
}

function print() {
    items.innerHTML = "";
    arr.forEach(function(n, i) {
        items.innerHTML +=
            "<td>" +
            n +
            "<a onclick='edtItem(" +
            i +
            ")'>Update</a>" +
            "<a onclick='delItem(" +
            i +
            ")'>X</a></td>";
    });
}

// function searchTable() {
//     var input, filter, found, table, tr, td, i, j;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("list");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td");
//         for (j = 0; j < td.length; j++) {
//             if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 found = true;
//             };

//         }
//         if (found) {
//             tr[i].style.display = "";
//             found = false;
//         } else {
//             tr[i].style.display = "none";
//         }

//     }
// }