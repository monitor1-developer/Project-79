nameofstudentarray = [];

function submit() {
    var name1 = document.getElementById("name_1").value;
    var name2 = document.getElementById("name_2").value;
    var name3 = document.getElementById("name_3").value;
    var name4 = document.getElementById("name_4").value;
    nameofstudentarray.push( name1);
    nameofstudentarray.push( name2);
    nameofstudentarray.push( name3);
    nameofstudentarray.push( name4);
    console.log(nameofstudentarray);
    document.getElementById("displayname").innerHTML = nameofstudentarray;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sort() {
    nameofstudentarray.sort();
    console.log(nameofstudentarray);
    document.getElementById("displayname").innerHTML = nameofstudentarray;
}