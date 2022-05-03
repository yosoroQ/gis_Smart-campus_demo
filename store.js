//从localstorage中读取数据
function getData(){
    if(!localStorage.getItem('geojson')){
        localStorage.setItem('geojson','[]')
    }

    return JSON.parse(localStorage.getItem('geojson'))
}

//将数据保存到localstorage中
function saveData(data){
    localStorage.setItem('geojson',JSON.stringify(data))
}