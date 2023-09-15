function firstNonRepeatedChar(str) {
    // Write your code here0
    let prev=str.charAt(0);
    let curr=str.charAt(0);
    let count=1;
    let present=false;
       for(let i=0;i<=str.length;i++)
       {
        curr=str.charAt(i);
         if(curr==prev)
         {
            count++;
            continue;
         }
         else
         {
            if(count==1)
            {
                console.log(prev);
                present=true;
                break;
            }
            else
            {
                count=1;
                prev=curr;
            }
         }
       }
       if(present==false)
       console.log("null");
   }
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input)); 