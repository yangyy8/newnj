
export function ToArray(data) {
    var returnValue = new Array();

    for (var key in data) {
        returnValue.push({dm: key, mc: data[key]});
    }

    return sortByKey(returnValue,'dm');
};
export function sortByKey(array,key){
  return array.sort(function(a,b){
    var x = a[key];
    var y = b[key];
    return((x<y)?-1:((x>y)?1:0));
  })
};
export function ToData(data) {
    var returnValue = new Array(data);
    // for (var key in data) {
    //     returnValue.push({dm: key.dm, mc: key.mc});
    // }
    return returnValue;
};
