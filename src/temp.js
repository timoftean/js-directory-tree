
function strInStr(a,b){
    return a.indexOf(b) > -1 ;
}
function fn(data,string){
    arr=[];
    for (var key in data){
            if (data['type'] == 'dir' && data['name'].indexOf(string) > -1) {
                return data;
            }
            else if(data['type']=='file' &&  data['name'].indexOf(string)>-1 )
                arr.push(data);
            else if(data['type']=='dir' && data['name'].indexOf(string)<=-1)

                arr.push(fn(data['children'],string));
        }
    return arr;
}
