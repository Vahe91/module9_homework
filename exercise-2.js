const jsonString = `
    {
        "list": [
            {
                "name": "Petr",
                "age": "20",
                "prof": "mechanic"
            },
            {
                "name": "Vova",
                "age": "60",
                "prof": "pilot"
            }
        ]
   }
`;

const data = JSON.parse(jsonString);
// console.log(data); (если возраст можно указывать как строку то на этом можно закончить преобразование)
let list = [];

data.list.forEach(item => {
    let obj = {
        name: item.name,
        age: Number(item.age),
        prof: item.prof
    }

    list.push(obj);
});

const result = {list};

console.log(result);