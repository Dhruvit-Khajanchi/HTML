document.addEventListener('DOMContentLoaded',function (){
    document.querySelector("#middlename").onfocus=checkfirstname;

})

function checkfirstname()
{
    let fname = document.querySelector("#firstname").value;

    if(fname=='' || fname==null)
    {
        alert("first name should not be empty");
    }

}

function check()
{
    alert('Your Response has been successfully submitted');
    return false;
}