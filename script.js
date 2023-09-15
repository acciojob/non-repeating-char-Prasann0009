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
                return prev;
            }
            else
            {
                count=1;
                prev=curr;
            }
         }
       }
       if(present==false)
        return null;
   }
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input)); 