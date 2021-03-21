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

 function InsertArticle(){
   var args = GetRequest();
   if(args.name === undefined)
      alert('错误：你没有告诉我打开谁的页面！');
   else{
      $(function(){
         $("#texts").load("./articles/"+args.name+".html"); 
       });
   }
 }