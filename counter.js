var count=0;
document.getElementById('txt').value=count;
function incCounter()
{
  count=parseInt(document.getElementById('txt').value);
  if(count>=0 && count<10)
  {
    count++;
  }
  else{
      alert("Maximum limit reached");
      inc.disabled=true;
  }
  document.getElementById('txt').value=count;
  inc.disabled=false;
}
function decCounter()
{
  count=parseInt(document.getElementById('txt').value);  
  if(count>0 && count<=10)
  {
   count--;
   }
   else{
       alert("Minimum limit reached");
       dec.disabled=true;
   }
   document.getElementById('txt').value=count;
   dec.disabled=false;
}
