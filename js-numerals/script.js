var app = angular.module("myApp", []);
app.controller("NumberController", function($scope) {

    $scope.submit = function () {
        $scope.showNumber = convert($scope.number);
    }

});

function convert(num) {
    num = (num + "").replace(" ", "");
    var exception = {0: "zero", 11: "eleven", 12: "twelve",
                        13: "thirteen", 14: "fourteen", 15: "fifteen",
                        16: "sixteen", 17: "seventeen", 18: "eighteen",
                        19: "nineteen"};

    var digit = ["", "one", "two", "three", "four", "five", "six",
                 "seven", "eight", "nine"];

    var decade = ["", "ten", "twenty", "thirty", "forty", "fifty",
                  "sixty", "seventy", "eighty", "ninety"];

    var largenumber = ["hundred", "thousand", "million", "billion"];

    var l = num.length-1;

    a = (num[l]) ? num[l] : 0;
    b = (num[l-1]) ? num[l-1] : 0;
    ba = ""+b+a;
    name_ab = (exception[ba]) ? exception[ba] : (decade[b]+" "+digit[a]);

    c = (num[l-2]) ? num[l-2] : 0;
    d = (num[l-3]) ? num[l-3] : 0;
    name_c = (c!=0) ? (digit[c]+" "+largenumber[0])+" " : " ";
    name_d = (d!=0) ? (digit[d]+" "+largenumber[1])+" " : " ";

    e = (num[l-4]) ? num[l-4] : 0;
    ed = (e!=0) ? ""+e+d : "";
    num_ed = (exception[ed]) ? exception[ed] : (decade[e]+" "+digit[d]);
    name_ed = (num_ed!=" ") ? (num_ed+" "+largenumber[1])+" " : "";
    new_name_ed = name_ed.replace(num_ed, "");

    f = (num[l-5]) ? num[l-5] : 0;
    name_f = (f!=0) ? digit[f]+" "+largenumber[0] : " ";
    name_fed = (name_f!=" ") ? name_f+" "+num_ed+" " : " ";

    g = (num[l-6]) ? num[l-6] : 0;
    name_g = (g!=0) ? digit[g]+" "+largenumber[2] : " ";
    name_gfed = (name_g!=" ") ? name_g+" " : " ";

    h = (num[l-7]) ? num[l-7] : 0;
    hg = (h!=0) ? ""+h+g : "";
    num_hg = (exception[hg]) ? exception[hg] : (decade[h]+" "+digit[g]);
    name_hg = (num_hg!=" ") ? (num_hg+" "+largenumber[2])+" " : "";
    

    if(l<=1){
        return name_ab;
    } else if(l===2) {
        string = (ba!=="00") ? 
            name_c+" and "+name_ab : 
            name_c+name_ab;
        return string;
    } else if(l===3) {
        string = (ba!=="00") ? 
            name_d+name_c+name_ab : 
            name_d+name_c+name_ab;
        return string;
    } else if(l===4) {
        string = (ba!=="00") ? 
            name_ed+name_c+" and "+name_ab : 
            name_ed+name_c+name_ab;
        return string;
    } else if(l===5) {
        string = (ba!=="00") ? 
            name_fed+new_name_ed+name_c+" and "+name_ab : 
            name_fed+new_name_ed+name_c+name_ab;
        return string;
    } else if(l===6) {
        string = (ba!=="00") ? 
            name_gfed+name_fed+new_name_ed+name_c+" and "+name_ab : 
            name_gfed+name_fed+new_name_ed+name_c+name_ab;
        return string;
    } else if(l===7){
        new_name_ed = name_ed.replace(num_ed, "");
        return name_hg+name_fed+new_name_ed+name_d+name_c+name_ab;
    }
}