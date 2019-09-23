var flag=true;
function showList()
{
    
    
    if(flag)
    {
    document.getElementById("tips").style.visibility="visible";
    document.getElementById("click").innerHTML=" Less";
    flag=false;
    }
    else if(!flag)
    {
    document.getElementById("tips").style.visibility="hidden";
    document.getElementById("click").innerHTML=" More";
        flag=true;
    }
    
    
}

function like(event)
{
  event.preventDefault();


    
    document.getElementById("like1").style.color="#1c2ada";
}


var turn=true;
function setlocal()
  {
      if(document.getElementById("remember").checked==true)
      {
      localStorage.user=document.getElementById("uname").value;
      localStorage.pass=document.getElementById("psw").value;
      alert("save in local Storage ");
      }
      else
      {
          deleteLocal();
          turn=false;
         
      }
     
      
  }
   if(turn)
    {
    var y = localStorage.user;
        if(y==undefined)
            {
                
               document.getElementById("log").innerHTML+="user";
                 
            }
        else
        {
            document.getElementById("log").innerHTML+=y;
        }
    
   
    }
    else
        {
   var name=document.getElementById("uname").innerHTML;
   document.getElementById("log").innerHTML+=name;
        }
  function getLocal() 
{
   if (localStorage.user) 
	{
    document.getElementById("uname").value=localStorage.user;
    document.getElementById("psw").value=localStorage.pass;
  }
	 
}
  function deleteLocal()
      {
      localStorage.removeItem("user");
      localStorage.removeItem("pass");
    
   
      }
  
