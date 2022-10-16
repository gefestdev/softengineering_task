fetch('https://reqres.in/api/users?page=2')
.then(response => response.json())
.then(json => {
    console.log("Задача 1")
    console.log(json)
    for(let i = 0; i < json.data.length; i++){
        if(json.data[i].id == 10){
            //console.log(json.data[i].id)
            console.log(`${json.data[i].first_name} ${json.data[i].last_name}`)
            break
        }
    }
})
console.log('Задача 2')
let inputData = JSON.parse(data)
console.log(inputData)
let deptArray = [{"Отдел Асу": {"count": '',"avg_hours": '' , "people": []}, "Отдел информационных систем": {"count": '',"avg_hours": '' , "people": []}}]
function objFunc(name, phone){
    this.name = name;
    this.phone = phone;
    return 'abc';
}
//deptArray[0]["Отдел Асу"].people.push(Object)
//deptArray[0]["Отдел Асу"].people[1].phone = inputData[1].phone
let count = 0;
let avg_hours = [] //создал массив для сложения avghours
let total_avg_hours = 0;

function sum (x){
    var s = 0;
    for (i = 0; i < x.length; i++){
       s += x[i]
    }
    return s
 }


for(let i = 0; i < inputData.length; i++){
    if(inputData[i].dept == 'Отдел АСУ'){
        const Object = new objFunc(inputData[i].name, inputData[i].phone)
        deptArray[0]["Отдел Асу"].people.push(Object)
        deptArray[0]["Отдел Асу"].count = deptArray[0]["Отдел Асу"].people.length
        if(inputData[i].hours > 0){
            count++
            avg_hours.push(inputData[i].hours);
        }
        total_avg_hours = sum(avg_hours)
        deptArray[0]["Отдел Асу"].avg_hours = Math.round(total_avg_hours/count)
        if(i+2 == inputData.length){
            avg_hours = []
            total_avg_hours = 0
            count = 0
        }
    }
}
for(let i=0; i < inputData.length; i++){
    if(inputData[i].dept == 'Отдел информационных систем'){
        const Object = new objFunc(inputData[i].name, inputData[i].phone)
        deptArray[0]["Отдел информационных систем"].people.push(Object)
        deptArray[0]["Отдел информационных систем"].count = deptArray[0]["Отдел информационных систем"].people.length
        if(inputData[i].hours > 0){
            count++
            avg_hours.push(inputData[i].hours);
        }
        total_avg_hours = sum(avg_hours)
        deptArray[0]["Отдел информационных систем"].avg_hours = Math.round(total_avg_hours/count)
        if(i+2 == inputData.length){
            avg_hours = []
            total_avg_hours = 0
            count = 0
        }
    }
}


console.log(deptArray)
