var myArray = [];

myArray = [
    {age: 20, name: "Olga"},
    {age: 10, name: "Vasa"},
    {age: 9, name: "Kolya"},
    {age: 15, name: "Igor"}
];

function sortByAge(a, b){
    if(a.age < b.age){return -1}
    if(a.age > b.age){ return 1}
    return 0;
};

function showArray(arr) {
    for (var i = 0; i < arr.length; i++){
        var arrow = arr[i];
        var arr2;
        {
            for(var key in arrow){
                document.write(key + " " + arrow[key] + "<br/>");
            }
        }
    }
}

var res = myArray.sort(sortByAge);
showArray(res);