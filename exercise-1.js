const parser = new DOMParser();

const XMLString = `
    <list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>
`;

const xmlDOM = parser.parseFromString(XMLString, 'text/xml');

const listNode = xmlDOM.querySelector('list');
const studentsNode = listNode.querySelectorAll('student');

let list = [];

studentsNode.forEach((student) => {
    const nameNode = student.querySelector('name');
    const firstNode = nameNode.querySelector('first');
    const secondNode = nameNode.querySelector('second');
    const ageNode = student.querySelector('age');
    const profNode = student.querySelector('prof');
    const langAttr = nameNode.getAttribute('lang');

    let obj = {
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr,
    }
    list.push(obj);
});

const result = {list};

console.log(result);