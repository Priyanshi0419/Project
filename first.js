const BASE_URL="https://api.currencyapi.com/v3/latest?apikey=cur_live_89UljtEee0byeTNvOLxCwrSYXcjbWen2YknilUDS"
let btn=document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
let msg=document.querySelector("#info");

const dropdowns=document.querySelectorAll(".dropdown select");
    //add more country options to select from
    for(let select of dropdowns){
        for(currCode in countryList){
            //creating new option
        let newOption=document.createElement("option");
        //passing currcode in new option
        newOption.innerText=currCode;
        newOption.value=currCode;
     //selection 
     
        if(select.name==="from" && currCode==="USD"){
           newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";

        }
            
        //adding this element to dropdown
         select.append(newOption);
        }

        select.addEventListener("change",(e)=>{
        updateFlag(e.target);
        });
    
    }

    //function to change flag as currCode changes
    const updateFlag=(element) => {
      let currCode=element.value;
      let country=countryList[currCode];
      let newSrc=`https://flagsapi.com/${country}/flat/64.png`
      let img=element.parentElement.querySelector("img");
      img.src=newSrc;
      element=element.selected;

       }
  
    
    



 btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector("form input");
   let amoVal=amount.value;
console.log(fromCurr.value,toCurr.value);
    
const URL = `${BASE_URL}&base=${fromCurr.value}&target=${toCurr.value}`;
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  let rate=data.data[toCurr.value].value
  
  

       console.log(rate);
       let convertedval=amoVal*rate;
      msg.innerText=`${amoVal} ${fromCurr.value}=${convertedval} ${toCurr.value}`;
});




  









