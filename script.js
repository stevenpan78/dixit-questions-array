// var ul = document.getElementById("hi");
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z'
];

for (var i = 0, length1 = alpha.length; i < length1; i++) {
    // var linode = document.createElement('li'); //creates the li node
    // linode.textContent = alpha[i]; //set text content
    // ul.appendChild(linode); //append to ul
    var hello = document.getElementsByTagName('li')[i];
    hello.innerHTML = alpha[i];
    if (i % 2 == 0) {
        hello.style.backgroundColor = "blue";
    } else {
        hello.style.backgroundColor = "red";
    }
}
