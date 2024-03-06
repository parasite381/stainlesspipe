//Button function
let a;
let b;
let c;
let d;

      function getvalue()
    {
     let channel=document.getElementById("channel").value;

     switch(channel){
     case "thickness":
     document.getElementById("thickness").innerHTML="kg:";
     document.getElementById("width").innerHTML="Width:";
     document.getElementById("length").innerHTML="Length:";
     break;

     case "width":
     document.getElementById("thickness").innerHTML="kg:";
     document.getElementById("width").innerHTML="Thickness:";
     document.getElementById("length").innerHTML="Length:";
         break;

     case "length":
     document.getElementById("thickness").innerHTML="kg:";
     document.getElementById("width").innerHTML="Thickness:";
     document.getElementById("length").innerHTML="Width:";
     break;

     case "kg":
     document.getElementById("thickness").innerHTML="Thickness:";
     document.getElementById("width").innerHTML="Width:";
     document.getElementById("length").innerHTML="Length:";
     break;
    }

   }

document.getElementById("compute").onclick=function(){
    let measurement1=document.getElementById("measurement1").value;
    let measurement2=document.getElementById("measurement2").value;
    let measurement3=document.getElementById("measurement3").value;

    a=document.getElementById("txtthickness").value;
    
    b=document.getElementById("txtwidth").value;
    
    c=document.getElementById("txtlength").value;



    switch(measurement1){
        case "mm":
        a=a/1000;
        break;
        
        case "cm":
        a=a/100;
        break;
        
        case "inch":
        a=a*0.0254;
        break;
  
        case "kg":
        a=a*1;
        break;
    }
    
    
        switch(measurement2){
        case "mm":
        b=b/1000;
        break;
        
        case "cm":
        b=b/100;
        break;
        
        case "inch":
        b=b*0.0254;
        break;
            
            case "ft":
        b=b*0.3048;
        break;
    }
    
        switch(measurement3){
        case "mm":
        c=c/1000;
        break;
        
        case "cm":
        c=c/100;
        break;
        
        case "inch":
        c=c*0.0254;
        break;
            
            case"ft":
        c=c*0.3048;
        break;
    }
    

    let channel=document.getElementById("channel").value;
    switch(channel){
    case "thickness":
    d=a/(b*c*7930);
    break;
     
    case "width":
    d=a/(b*c*7930);
    break;

    case "length":
    d=a/(b*c*7930);
    break;

    case "kg":
    d=a*b*c*7930;
    break;
    }
    
    let converter=document.getElementById("converter").value;
        
     switch(converter){
        case "mm":
        d=d*1000;
        document.getElementById("result").innerHTML= d +"mm";
        break;
        
        case "cm":
        d=d*100;
        document.getElementById("result").innerHTML=d +"cm";
        break;
        
        case "inch":
        d=d*39.37;
        document.getElementById("result").innerHTML=d +"inch";
        break;
  
        case "kg":
        d=d*1;
        document.getElementById("result").innerHTML=d +"kg";
        break;
         
         case "m":
        d=d*1;
        document.getElementById("result").innerHTML=d +"m";
        break;
         
         case "ft":
        d=d*3.28;
        document.getElementById("result").innerHTML=d +"ft";
        break;
    }

}

