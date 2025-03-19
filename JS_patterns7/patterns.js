// Butterfly pattern
function butterfly(n){
    let res=''
    for(let i=1; i<2*n; i++){
        let row='';
        for(let j=1;j<2*n;j++){
            if(i<=n){
                //up star
                if(j<=i || j>=2*n-i){
                row+='* ';
                }
                //up space
                else{
                    row+='  '
                }
            }
            else{
                //down star
                if(j<=2*n-i || j>=i){
                    row+='* ';
                }
                //down space
                else{
                    row+='  '
                }
            }
        }
        res+=row+'\n'
    }
    console.log(res);
}
butterfly(5);


//Hallow Diamond inscribed in a square
function HallDiaInSq(n){
    let res='';
    for(let i=0; i<=2*n; i++){
        let row='';
        for(j=0;j<=2*n;j++){
            if(i==0 || j==0 || i==2*n || j==2*n || i==j || j==(2*n-i)){
                row+='* ';
            }
            else{
                row+='  ';
            }
        }
        res+=row + '\n'
    }
    console.log(res);
}
HallDiaInSq(3);


//numeric palindromic pyramid