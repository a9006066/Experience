
// const getPostPromise = (something, anotherthing) =>
//     new Promise((resolve, reject) => {
//         $.ajax({
//             url:'',
//             type:'post',
//             data:JSON.stringify({
//                 something:something,
//                 anotherthing:anotherthing
//             }),
//             dataType:'json',
//             success:resolve,
//             error:reject
//         })
//     })
// getPostPromise().then((res)=>console.log(res)).catch


const moneydj = "https://aegonrwdtest.moneydj.com/w/djxml/RateData.djxml"
const param = { type: 'GET', data: '' }

const getAjaxPromise = (url, param) =>
    new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.timeout = 3000;
        xhr.open(param.type, url, true);
        xhr.send();
        xhr.onload = () => (xhr.status === 200) ?
        resolve(xhr.responseText) : reject(xhr.responseText);
    })


getAjaxPromise(moneydj, param).then((res) => {
    (res !== null && res !=='' && res !== undefined)?
        $(res).find("CotaRate Row").map((i,el)=>{
            console.log($(el)[0])
        })
    :''
    
}).catch((error) => {
    console.error(error);
})