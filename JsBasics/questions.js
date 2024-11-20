// string : dog
// output : d, do, dog, o, og ,g

function createCombo(str){
let result =[];
 for ( Let i = 0; i< str.length ; i++){
    // console.log("from I", str[i]);

    let combolist= "";

    for (let j = i ; j < str.length; j++){
combolist+= str[j];
result.push(combolist);
    }
}
return result;
}
const combo = createCombo("dog");


