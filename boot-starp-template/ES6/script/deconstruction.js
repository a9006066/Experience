// const array = ['1','2','3'];
// const [a,b,c] = array;
const map = new Map();
map.set('first','hello');
map.set('second','world');



for(let [key,value] of map){
    console.log(`${key}-${value}`)
}