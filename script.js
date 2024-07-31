const checkBtn= document.getElementById('check-btn')
const clearBtn= document.getElementById('clear-btn')
const input=document.getElementById('user-input')
const result=document.getElementById('results-div')



/*const correctDigits=value=>{
  //en caso que value sea str
  const arr=clearNumbers(value).split('').map(e=>parseInt(e))
return arr[0]===1 && arr.length===11? true : arr.length===10? true : false
}*/

//regex: tener numeros, espacios(opcional), guiones(opcional) y parentesis(opcional pero en par) 
const regex= /^(1([ ]{0,1}))?(\(?\d{3}\)?)([ ]{0,1}||[-])?(\d{3})([ ]{0,1}||[-])?(\d{4})$/



const checkParenthesis=value=>{
if (value.includes('(')){
  return value.includes(')')? true:false
}else return value.includes(')')? false:true
}

clearBtn.addEventListener('click',()=>{
  input.value=''
  result.textContent=''
})

const check=value=>{
  if (!value) alert("Please provide a phone number")
if(!regex.test(value)){
 console.log('no regex')
  result.textContent=`Invalid US number: ${value}`
}else{
 result.textContent= checkParenthesis(value)? `Valid US number: ${value}`:`Invalid US number: ${value}`
}
input.value=''
}
console.log(regex.test('1 456 789 4444'))

checkBtn.addEventListener('click',e=>{
  e.preventDefault()
 check(input.value)
})