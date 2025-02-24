var d = document;
var msg = '';


fnS1 = () => {
    // const cars = new Array();
    // cars.push("Saab");
    // cars.push("Volvo");
    // cars.push("BMW");

    const cars = ["Saab", "Volvo" ,"BMW"];
    d.getElementById("demo1").innerHTML = cars;

};

fnS2 = () => {
    const cars = [
        "Saab",
        "Volvo",
        "BMW"
    ];

    d.getElementById("demo2").innerHTML = cars;

};

fnS3 = () => {
    const cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";

    d.getElementById("demo3").innerHTML = cars;
};

fnS4 = () => {
    const cars = new Array("Saab", "Volvo", "BMW");
    
    d.getElementById("demo4").innerHTML = cars;

};

fnS5 = () => {
    const cars = ["Saab", "Volve", "BMW"];
    d.getElementById("demo5").innerHTML = cars[0];
};

fnS6 = () => {
    const cars = ["Saab", "Volve", "BMW"];
    cars[0] = "Opel";

    d.getElementById("demo6").innerHTML = cars;
};

fnS7 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    d.getElementById("demo7").innerHTML = fruits.toString();
};

fnS8 = () => {
    const cars = ["Saab", "Volve", "BMW"];
    d.getElementById("demo8").innerHTML = cars;

};

fnS9 = () => {
    const person = ["John", "Deo", 46];
    d.getElementById("demo9").innerHTML = person[0];
};

fnS10 = () => {
    const person = {firstName:"John", lastName:"Deo", Age:46};
    d.getElementById("demo10").innerHTML = person.firstName;

};

fnS11 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let size = fruits.length;
    d.getElementById("demo11").innerHTML = size;
};

fnS12 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    d.getElementById("demo12").innerHTML = fruits[0];
};

fnS13 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    d.getElementById("demo13").innerHTML = fruits[fruits.length - 1];
};

fnS14 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fLen = fruits.length;

    let text = "<ul>";
    for(let i=0;i<fruits.length;i++)
    {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";

    d.getElementById("demo14").innerHTML = text;

};

let fnS15_text = "<ul>";

fnS15 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    fnS15_text = "<ul>";
    fruits.forEach(fnS15_myFunction);
    fnS15_text += "</ul>";

    d.getElementById("demo15").innerHTML = fnS15_text;
};

fnS15_myFunction = (value) =>
{
    fnS15_text += "<li>" + value + "</li>";
}

fnS16 = () => {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Lemon");
    d.getElementById("demo16").innerHTML = fruits;
}

fnS17 = () => {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[fruits.length] = "Lemon";
    d.getElementById("demo17").innerHTML = fruits;
}

fnS18 = () => {
    let fruits = ["Banana", "Orange", "Apple"];
    fruits[6] = "Lemon";

    let fLen = fruits.length;
    let text = "";
    for(i=0 ; i < fLen ; i++)
    {
        text += fruits[i] + "<br>";
    }

    d.getElementById("demo18").innerHTML = text;

};

fnS19 = () => {
    const person = [];
    person[0] = "John";
    person[1] = "Doe";
    person[2] = 46; 
    document.getElementById("demo19").innerHTML = person[0] + " " + person.length;
};

fnS20 = () => {
    const person = [];
    person["firstName"] ="John";
    person["lastName"] = "Doe";
    person["age"] = 46; 
    document.getElementById("demo20").innerHTML = person[0] + " " + person.length;
};

fnS21 = () => {
    //const points = new Array(40, 100, 1, 5, 25, 10);
    const points = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo21").innerHTML = points[0];
};

fnS22 = () => {
    var points = new Array(40, 100, 1);
    d.getElementById("demo22").innerHTML = points;
};

fnS23 = () => {
    var points = new Array(40, 100);
    d.getElementById("demo23").innerHTML = points;  
};

fnS24 = () => {
    var points = new Array(40);
    d.getElementById("demo24").innerHTML = points;  
};

fnS25 = () => {
    var points = [40];
    d.getElementById("demo25").innerHTML = points;
};

fnS26 = () => {
    var points = new Array(40);
    d.getElementById("demo26").innerHTML = points[0];  
};

fnS27 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    d.getElementById("demo27").innerHTML = typeof fruits;
}

fnS28 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    d.getElementById("demo28").innerHTML = Array.isArray(fruits);
}

fnS29 = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    d.getElementById("demo29").innerHTML = "Array: " + (fruits instanceof Array);;
}

fnS30 = () => {
    let x = "";
    const myObj = {
        name: "John",
        age: 300,
        cars: [
            {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
            {name:"BMW", models:["320", "X3", "X5"]},
            {name:"Fiat", models:["500", "Panda"]}
        ]
    }

    for (let i in myObj.cars)
    {
        x += "<h2>" + myObj.cars[i].name + "</h2>";
        for (let j in myObj.cars[i].models)
        {
            x += myObj.cars[i].models[j] + "<br>";
        }
    }

    d.getElementById("demo30").innerHTML = x;
}