let para = document.querySelector("#input1");
let para2 = document.querySelector("#input2");
let para3 = document.querySelector("#output");
let para4 = document.querySelector("#or1");
let para5 = document.querySelector("#or2");
let para6 = document.querySelector("#oroutput");
let para7 = document.querySelector("#and1");
let para8 = document.querySelector("#and2");
let para9 = document.querySelector("#andoutput");
let paraA = document.querySelector("#nor1");
let paraB = document.querySelector("#nor2");
let paraC = document.querySelector("#noroutput");
let paraD = document.querySelector("#nand1");
let paraE = document.querySelector("#nand2");
let paraF = document.querySelector("#nandoutput");
let paraG = document.querySelector("#xor1");
let paraH = document.querySelector("#xor2");
let paraI = document.querySelector("#xoroutput");


let c=0;
let d=0;
let f=0;


  

function orlogic(a,b)  {
    para4.addEventListener("click", () => {
        a= a+1;
        if( a%2 == 0) {
             para4.style.backgroundColor = "red";}
        else {
             para4.style.backgroundColor = "green";}
       
        pf(a);     
    })
   
    para5.addEventListener("click", () => {
        b= b+1;
        if( b%2 == 0) {
            para5.style.backgroundColor = "red";}

        else {
            para5.style.backgroundColor = "green";}
        pf(b);          
    })
   
}
orlogic(c,d);


   
          



function pf(a) {
   let x = getComputedStyle(para5);
   let y = getComputedStyle(para4);
  
   if( ( (x.backgroundColor == "rgb(255, 0, 0)" && y.backgroundColor == "rgb(0, 128, 0)") ||
       (x.backgroundColor == "rgb(0, 128, 0)" && y.backgroundColor == "rgb(255, 0, 0)") )  && 
       (a%2 == 0) ){
            para6.style.backgroundColor = "red";
       }
   else{
      para6.style.backgroundColor = "yellow";
   }    
   

}

function and_logic(a,b) {
    para7.addEventListener("click", () => {
        a= a+1;
       if( a%2 == 0) {
            para7.style.backgroundColor = "red";}
       else {
            para7.style.backgroundColor = "green";}
        outsource(a);     
    })
    
    para8.addEventListener("click", () => {
        b= b+1;
       if( b%2 == 0) {
            para8.style.backgroundColor = "red";}
       else {
            para8.style.backgroundColor = "green";}
        outsource(b);     
    })

}
and_logic(c,d);

function outsource(a,b) {
    let x = getComputedStyle(para7);
    let y = getComputedStyle(para8);
   
    if( ( (x.backgroundColor == "rgb(255, 0, 0)" && y.backgroundColor == "rgb(0, 128, 0)") ||
    (x.backgroundColor == "rgb(0, 128, 0)" && y.backgroundColor == "rgb(255, 0, 0)") )  && 
    (a%2 != 0) ){
         para9.style.backgroundColor = "yellow";
    }
else{
   para9.style.backgroundColor = "red";
}
     
}

function nor_logic(a,b)  {
    paraA.addEventListener("click", () => {
        a= a+1;
       if( a%2 == 0) {
            paraA.style.backgroundColor = "red";}
       else {
            paraA.style.backgroundColor = "green";}
             
       fornor(a);    
    })
    paraB.addEventListener("click", () => {
        b= b+1;
        if( b%2 == 0) {
            paraB.style.backgroundColor = "red";}
        else {
            paraB.style.backgroundColor = "green";}
         fornor(b);        
    })
}
nor_logic(c,d);

function fornor(a) {
    let x = getComputedStyle(paraA);
    let y = getComputedStyle(paraB);

    if( ( (x.backgroundColor == "rgb(255, 0, 0)" && y.backgroundColor == "rgb(0, 128, 0)") ||
       (x.backgroundColor == "rgb(0, 128, 0)" && y.backgroundColor == "rgb(255, 0, 0)") )  && 
       (a%2 == 0) ){
            paraC.style.backgroundColor = "yellow";
       }
   else{
      paraC.style.backgroundColor = "red";
   }
}


function nand_logic(a,b) {
    paraD.addEventListener("click", () => {
        a= a+1;
       if( a%2 == 0) {
            paraD.style.backgroundColor = "red";}
       else {
            paraD.style.backgroundColor = "green";}
        for_nand(a);     
    })
    
    paraE.addEventListener("click", () => {
        b= b+1;
       if( b%2 == 0) {
            paraE.style.backgroundColor = "red";}
       else {
            paraE.style.backgroundColor = "green";}
        for_nand(b);     
    })

}
nand_logic(c,d);

function for_nand(a) {
    let x = getComputedStyle(paraD);
    let y = getComputedStyle(paraE);

    if( ( (x.backgroundColor == "rgb(255, 0, 0)" && y.backgroundColor == "rgb(0, 128, 0)") ||
       (x.backgroundColor == "rgb(0, 128, 0)" && y.backgroundColor == "rgb(255, 0, 0)") )  && 
       (a%2 != 0) ){
            paraF.style.backgroundColor = "red";
       }
   else{
      paraF.style.backgroundColor = "yellow";
   }

}


function xorlogic(a,b)  {
    paraG.addEventListener("click", () => {
        a= a+1;
       if( a%2 == 0) {
            paraG.style.backgroundColor = "red";}
       else {
            paraG.style.backgroundColor = "green";}
             
       forxor();    
    })
    paraH.addEventListener("click", () => {
        b= b+1;
        if( b%2 == 0) {
            paraH.style.backgroundColor = "red";}
        else {
            paraH.style.backgroundColor = "green";}
         forxor();        
    })
}
xorlogic(c,d);

function forxor() {
    let x = getComputedStyle(paraG);
    let y = getComputedStyle(paraH);

    if( ( (x.backgroundColor == "rgb(255, 0, 0)" && y.backgroundColor == "rgb(0, 128, 0)") ||
       (x.backgroundColor == "rgb(0, 128, 0)" && y.backgroundColor == "rgb(255, 0, 0)") )  
        ){
            paraI.style.backgroundColor = "red";
       }
   else{
      paraI.style.backgroundColor = "yellow";
   }
}

function xnorlogic(a,b)  {
    para.addEventListener("click", () => {
        a= a+1;
       if( a%2 == 0) {
            para.style.backgroundColor = "red";}
       else {
            para.style.backgroundColor = "green";}
             
       forxnor(a);    
    })
    para2.addEventListener("click", () => {
        b= b+1;
        if( b%2 == 0) {
            para2.style.backgroundColor = "red";}
        else {
            para2.style.backgroundColor = "green";}
         forxnor(b);        
    })
}
xnorlogic(c,d);

function forxnor(a) {
    let x = getComputedStyle(para);
    let y = getComputedStyle(para2);

    if( ( (x.backgroundColor == "rgb(255, 0, 0)" && y.backgroundColor == "rgb(0, 128, 0)") ||
       (x.backgroundColor == "rgb(0, 128, 0)" && y.backgroundColor == "rgb(255, 0, 0)") )  
        ){
            para3.style.backgroundColor = "yellow";
       }
   else{
      para3.style.backgroundColor = "red";
   }
}