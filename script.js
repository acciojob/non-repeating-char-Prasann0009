function firstNonRepeatedChar(str) {
    // Write your code here0
    let count=1;
     let str1=str;
     let present=false;
     for(let i=0;i<=str1.length;i++)
     {
        if(str1.charAt(i)!="0")
        {
        curr=str1.charAt(i);
        str1=str1.replace(curr,"0");
       for(let j=i;j<=str1.length;j++)
       {
          if(str1.charAt(j)==curr)
          {
            count++;
            str1=str1.replace(str1.charAt(j),"0");
          }
       }
       if(count==1)
         {
            present=true;
            return curr;
         }
       else
       {
        count=1;
       }
    }
     }
     if(present==false)
     {
        return "null";
     }
   }
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input)); 