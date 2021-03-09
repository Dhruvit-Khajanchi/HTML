
document.addEventListener('DOMContentLoaded',function () {

    document.querySelector("#see").onclick=function (){

        //ajax calling getting jason data of weather
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail").
        then(response => response.json())
        .then(function (data) {console.log(data.drinks)

                 let tbody=document.querySelector("#tb");
                for(var i=0;i<=99;i++)
                {
                    let tr=document.createElement("tr");
                 let td1=document.createElement("td");
                 td1.innerHTML=data.drinks[i].strDrink;
                  let td2=document.createElement("td");
                 td2.innerHTML=data.drinks[i].idDrink;
                 let td3=document.createElement("td");
                 td3.innerHTML=`<img src=${data.drinks[i].strDrinkThumb} width="50px" height="50px" >`;
                 tr.append(td1);
                 tr.append(td2);
                 tr.append(td3);
                 tbody.append(tr);

                }



            })



        return false;
    }
})