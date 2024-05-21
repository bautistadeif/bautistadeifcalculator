function add(){
        let a = 0;
        a =document.getElementById('add1').value;
        let b = 0;
        b =document.getElementById('add2').value;
        ans1= Number(a)+Number(b);
        document.getElementById("sum").value=ans1;
}
function sub(){
        let c = 0;
        c =document.getElementById('sub1').value;
        let d = 0;
        d =document.getElementById('sub2').value;
        ans2= Number(c)-Number(d);
        document.getElementById("sum1").value=ans2;
}
function mul(){
        let e = 0;
        e =document.getElementById('mul1').value;
        let f = 0;
        f =document.getElementById('mul2').value;
        ans3= Number(e)*Number(f);
        document.getElementById("sum2").value=ans3;
}
function div(){
        let g = 0;
        g =document.getElementById('div1').value;
        let h = 0;
        h =document.getElementById('div2').value;
        ans4= Number(g)/Number(h);
        document.getElementById("sum3").value=ans4;
}
//operators ( =, +, *, / )
//internet exploerer  version 11 (de gagana ung dineclare na variable)var z = 0; const y = 10;