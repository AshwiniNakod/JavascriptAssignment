console.log("Loan page")

const form=document.getElementById("form");
const fullName=document.getElementById("fullName");
const email=document.getElementById("email");
const pan=document.getElementById("pan");
const loanAmount=document.getElementById("loanAmount");
const Towords=document.getElementById("word");
const submit=document.getElementById("submit");
const gen_captch=document.getElementById("gen_captcha")
const user_captcha=document.getElementById("user_captcha")
const new_captch=document.getElementById("new_captch");
let n1=document.getElementById("n1")
let n2=document.getElementById("n2")
n1.innerText=Math.floor(Math.random()*10)
n2.innerText=Math.floor(Math.random()*10)

let num1=n1.innerText;
let num2=n2.innerText;


fullName.addEventListener('change',(e)=>{
    // console.log("name validate");
    nameValidation();
})
email.addEventListener('change',e=>{
    emailValidation();

})
pan.addEventListener('change',e=>{
    panNoValidation();
})
loanAmount.addEventListener('change',(e)=>{
    console.log("change")
    let n= loanAmount.value;
    convertNumToWord(n)
})
user_captcha.addEventListener('change',e=>{
    let sum=parseInt(num1) + parseInt(num2);
    let res=parseInt(user_captcha.value)
    if(res == sum){
        console.log('valid')
    }else{
        console.log('not valid')
        alert('Enter correct captcha')
        return false;
    }
})
function nameValidation(){
    let name=fullName.value
    let regex=/^([a-zA-Z]+){4,10}\s([a-zA-Z]+){4,10}$/
    if(regex.test(name)){
        console.log(" matched")
    }   
    else{
        console.log(" Name should be minmum 4 characters with two words")
        alert(' Name should be minmum 4 characters with two words')
        return false
    }
    localStorage.setItem('fname',name);
    // let fn=localStorage.getItem('fname')
    // console.log(fn);


}

function emailValidation(){

    let Email=email.value;
    let e_reg=/^([0-9a-zA-Z_\-\.]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/    ;
    if(e_reg.test(Email)){
        console.log("Email is validate")
        localStorage.setItem('email_id',Email);
    }else{
        console.log("Email is not validate")
        alert('Enter Valid Email Address')
        
    }
}
function panNoValidation(){

    let pan_no=pan.value;  
    let pan_reg=/^([A-Z]+){5}([0-9]+){4}([A-Z]+){1}$/
    if(pan_reg.test(pan_no)){
        console.log("Pan no is validate")
    }else
    {
        // console.log("Pan_no not is validate")
        alert("Enter valid PAN No 'ABCDE1234F' format");
    }
}
function loanAmountValidation(){
    let am=loanAmount.value;
    let am_reg=/^([0-9])$/
}
function convertNumToWord(num){

        let ss;
        if(num<100){                                    //number between 1 to 99
            ss= ConvertNumber(num);
        }
        else if(num>=100 && num<1000){                  //Hundred
             ss= ConvertNumber(Math.floor(num/100))+ " Hundred " + convertNumToWord(Math.floor(num%100))  
            //   console.log(ss);
            //  Towords.innerText=ss;
            }
        else if(num>=1000 && num<100000){               //Thousand
             ss= ConvertNumber(Math.floor(num/1000))+ " Thousand " + convertNumToWord(Math.floor(num%1000))  
            //    console.log(ss);
            }
            else if(num>=100000 && num<10000000){           //Lakh
             ss= ConvertNumber(Math.floor(num/100000))+ " Lakh " + convertNumToWord(Math.floor(num%100000))  
            //   console.log(ss);
        }
        // console.log(ss)
        Towords.innerText=ss +" Rs";
        return ss; 

}
function ConvertNumber(num){

    const units=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
        "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
        
        const tens=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]
    let word="";
    // console.log(num)
    if(num<20){
       word= (units[num]); 
    //    console.log(word)
       return word                                                          //number is between 1 to 19
    }
    else if(num>20 && num<100){                                              //number is >20
         word= (tens[Math.floor(num/10)]+ " "+ units[num%10])               //example: 34  
        //  console.log(word) ;                                             //   34/10=3;   tens[3] is "Thirteen"
        return word;                                                         //   34%10=4  units[4] is "four"
    }
    
}

function captch(){
    let random_num1=Math.floor((Math.random())*100)
    console.log(random_num1);
    let random_num2=Math.floor((Math.random())*100)
    console.log(random_num2);
    str=`Enter ${random_num1} + ${random_num2}`
    console.log(str);
    document.querySelector("#gen_captcha").innerHTML=str;
    let sum=random_num1+random_num2;
    console.log(sum)
    return sum
    
}
new_captch.addEventListener('onclick',(e)=>{
    captch();

})


