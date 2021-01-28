 var palindrome=(data) =>{
   var  temp,rem,final=0;
   temp=data;
   while(data>0){
     rem=data%10
     data=parseInt(data/10)
     final=final*10+rem
   }
   if(final == temp){
     console.log(`number ${temp} is palindrome`)
   }
   else{
     console.log(`number ${temp} is not a palindrome`)
   }
 }

 var a=5678
undefined
var rem,temp,final=0;
undefined
rem=a%10
8
a=parseInt(a/10)
567
final=final*10+rem
8
