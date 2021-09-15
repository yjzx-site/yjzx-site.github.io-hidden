function GetRequest() {  
 
    var url = location.search;
    
    //获取url中"?"符后的字串  
    
    var theRequest = new Object(); 
    
    if (url.indexOf("?") != -1) { 
    
       var str = url.substr(1); 
       
       strs = str.split("&");  
       
       for(var i = 0; i < strs.length; i ++) {  
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
          
       }  
    }  
    return theRequest;  
    
 } 

 function InsertContent(dir,argname){
   var args = GetRequest();
   if(args[argname] === undefined)
      alert('错误：无参数'+argname);
   else{
      $(function(){
         $("#texts").load("./articles/"+dir+'/'+args[argname]+".html"); 
       });
       str1='<p style="font-size:smaller">本网站的多数内容是在事实上改编的，请加以辨别。<br>';
       str2='如果这个页面的内容引起你的不适，请联系gcv8040@qq.com删除。</p>';
       document.getElementById("declaration").innerHTML+=(str1+str2);
   }
 }