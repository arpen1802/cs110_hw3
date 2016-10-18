<!DOCTYPE html>
<html>
  <head>
    <title> Arrays!!! </title>

  </head>

  <body>
      <script>


      const reverse= function( b){
        const localArray= [ ]
        let a=0;
        for(i=b.length-1; i>=0; i= i-1){
          localArray[ a] = b[i];
          a++;

        }
        return localArray;
      }
      const reversedArray = reverse([1, 2, 3, 4 ,5, 6, 7]);
      console.log(reversedArray);
        </script>

  </body>
</html>
