
const stars= function(a){
  let b="";
 for(i=0; i<a; i++){
   b= "*"+ b;
  };
  return b;
 };

 const space = function(n){
   let b="";
   for(i=0; i<n; i++){
     b= " "+ b;
   };
   return b;
 };


const diamond= function(n){
  if(n%2===0){
    n=n+1;
  }

    for( let i=1; i<=n; i=i+2){
      console.log(space((n-i)/2)+ stars(i));
    };
    for(let i =n-2; i>=1; i= i-2){
      console.log( space((n-i)/2)+ stars(i));
    };
};

  diamond(9);
