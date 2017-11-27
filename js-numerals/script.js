var app = angular.module("myApp", []);
app.controller("NumberController", function($scope) {

    $scope.submit = function () {
        $scope.showNumber = convert($scope.number);
    }

});

function convert(num) {
    num = (num + "").replace(" ", "");
    var exceptions = {0: "zero", 11: "eleven", 12: "twelve",
                        13: "thirteen", 14: "fourteen", 15: "fifteen",
                        16: "sixteen", 17: "seventeen", 18: "eighteen",
                        19: "nineteen"};

    var digits = ["", "one", "two", "three", "four", "five", "six",
                 "seven", "eight", "nine"];

    var decades = ["", "ten", "twenty", "thirty", "forty", "fifty",
                  "sixty", "seventy", "eighty", "ninety"];

    var largenumber = ["hundred", "thousand", "million"];

    var l = num.length-1;

    a = (num[l]) ? num[l] : 0;
    b = (num[l-1]) ? num[l-1] : 0;
    ba = ""+b+a;
    name_ab = (exceptions[ba]) ? exceptions[ba] : (decades[b]+" "+digits[a]);

    c = (num[l-2]) ? num[l-2] : 0;
    d = (num[l-3]) ? num[l-3] : 0;
    name_c = (c!=0) ? (digits[c]+" "+largenumber[0])+" " : " ";
    name_d = (d!=0) ? (digits[d]+" "+largenumber[1])+" " : " ";

    e = (num[l-4]) ? num[l-4] : 0;
    ed = (e!=0) ? ""+e+d : "";
    num_ed = (exceptions[ed]) ? exceptions[ed] : (decades[e]+" "+digits[d]);
    name_ed = (num_ed!=" ") ? (num_ed+" "+largenumber[1])+" " : "";

    f = (num[l-5]) ? num[l-5] : 0;
    name_f = (f!=0) ? digits[f]+" "+largenumber[0]+" " : " ";
    name_fed = (name_f!=" ") ? name_f+num_ed+" "+largenumber[1]+" " : " ";

    g = (num[l-6]) ? num[l-6] : 0;
    name_g = (g!=0) ? digits[g]+" "+largenumber[2]+" " : " ";

    if(l<=1){
        return name_ab;
    } else if(l===2) {
        string = (ba!=="00") ? 
            name_c+" and "+name_ab : 
            name_c+name_ab;
        return string;
    } else if(l===3) {

        if(c!=0){
            string = (ba!=="00") ? 
                name_d+name_c+" and "+name_ab : 
                name_d+name_c+name_ab;
        } else {
            string = (ba!=="00") ? 
                name_ed+" and "+name_ab : 
                name_ed+name_ab;
        }

        return string;
    } else if(l===4) {

        if(d!=0){
            string = (ba!=="00") ? 
                name_ed+name_c+" and "+name_ab : 
                name_ed+name_c+name_ab;
        } else if(c!=0){
            string = (ba!=="00") ? 
                name_ed+name_c+" and "+name_ab : 
                name_ed+name_c+name_ab;
        } else {
            string = (ba!=="00") ? 
                name_ed+" and "+name_ab : 
                name_ed+name_ab;
        }

        return string;
    } else if(l===5) {

        if(e!=0){
            string = (ba!=="00") ? 
                name_fed+name_c+" and "+name_ab : 
                name_fed+name_c+name_ab;
        } else if(d!=0){
            string = (ba!=="00") ? 
                name_fed+name_c+" and "+name_ab : 
                name_fed+name_c+name_ab;
        } else if(c!=0){
            string = (ba!=="00") ? 
                name_f+largenumber[1]+" "+name_c+" and "+name_ab : 
                name_f+largenumber[1]+" "+name_c+name_ab;
        } else {
            string = (ba!=="00") ? 
                name_g+" and "+name_ab :
                name_g+name_ab;
        }

        return string;
    } else if(l===6) {

        if(f!=0){
            string = (ba!=="00") ? 
                name_g+name_fed+name_c+" and "+name_ab : 
                name_g+name_fed+name_c+name_ab;
        } else if(e!=0){
            string = (ba!=="00") ? 
                name_g+name_ed+name_c+" and "+name_ab : 
                name_g+name_ed+name_c+name_ab;
        } else if(d!=0){
            string = (ba!=="00") ? 
                name_g+name_d+name_c+" and "+name_ab : 
                name_g+name_d+name_c+name_ab;
        } else if(c!=0){
            string = (ba!=="00") ? 
                name_g+name_c+" and "+name_ab : 
                name_g+name_c+name_ab;
        } else {
            string = (ba!=="00") ? 
                name_g+" and "+name_ab : 
                name_g+name_ab;
        }

        return string;
    } else {
        return "The number is too big";
    }
}