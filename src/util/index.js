export default {
    format: function (value) {
        var month = value.getMonth() + 1;
        var day = value.getDate();
        var year = value.getYear().toString().slice(1);
        day = day <10 ? '0'+day : day;
        month = month <10 ? '0'+month : month;
        return '20' + year + '-' + month + '-' + day;
    },
    forNum:function(num){
        var number = num + '';
        if(number.length==11){
            var a = number.slice(0,3); 
            var b = number.slice(3,7);
            var c = number.slice(7);
            return a + '-'+ b+ '-' +c
        }
    }
}