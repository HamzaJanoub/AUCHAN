
export function fetchData(){
    return fetch('./data/data.json')
        .then(res => res.json())
        .then(datas => {localStorage.setItem('datastock',JSON.stringify(datas)) 
         console.log(datas)
        })
       
    }
 




