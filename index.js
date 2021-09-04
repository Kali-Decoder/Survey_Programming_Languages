import Languages from './languages.js';
       
        const date=document.querySelector(".date");
        const btn=document.querySelector(".btn-dark");
        btn.addEventListener("click",()=>{

            var i=0;
        var id=setInterval(()=>{
            date.innerHTML=Languages[i].Date;
            

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Abap)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw1").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Ada)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw2").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].C["C++"])*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw3").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i]["C#"])*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw4").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Cobol)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw5").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Dart)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw5").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Delphi)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw7").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Go)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw8").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Groovy)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw9").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Haskell)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw10").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Java)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw11").innerHTML+=div;


            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].JavaScript)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw12").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Julia)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw13").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Kotlin)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw14").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Lua)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw15").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Matlab)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw16").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i]["Objective-C"])*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw17").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].PHP)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw18").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Perl)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw19").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Python)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw20").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].R)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw21").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Ruby)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw22").innerHTML+=div;



            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Rust)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw23").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Scala)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw24").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].Swift)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw25").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].TypeScript)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw26").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i].VBA)*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw27").innerHTML+=div;

            var div=`<div style="width: 8px  ; background-color: black; height: ${parseFloat(Languages[i]["Visual Basic"])*20}px; margin-top: 10px; margin-bottom:10px"></div>`;
            document.querySelector(".draw28").innerHTML+=div;

            

            if(i==Languages.length-1)
            {
                clearInterval(id);
            }
            i++;
        },100)
            



        })
       

     
