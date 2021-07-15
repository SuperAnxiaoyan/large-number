    //     199
    //   +  34
    //   __11____
    //     233 

export default function add(a, b) {
    const aLen = a.length - 1
    const bLen = b.length - 1
    var temp = 0
    var ret = ''
    for (var i = aLen, j = bLen; i >= 0 || j >= 0; i--, j--) {

        var x = 0;
        var y = 0;
        var sum = 0;

        if (i >= 0) {
            x = a[i] - '0'
        }

        if (j >= 0) {
            y = b[j] - '0'
        }

        if (x + y + temp >= 10) {
            sum = x + y + temp - 10
            temp = 1
        } else {
            sum = x + y + temp;
            temp = 0;
        }

        ret = `${sum}${ret}`
    }
    if(temp){
        ret = `${temp}${ret}`
    }
    return ret;
}