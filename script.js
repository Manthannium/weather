const wrapper=document.querySelector(".wrapper"),searchInput=wrapper.querySelector("input"),infoText=wrapper.querySelector(".info-text"),synonyms=wrapper.querySelector(".synonyms .list"),removeIcon=wrapper.querySelector(".search span");function getWeather(e){wrapper.classList.remove("active"),infoText.style.color="#000",infoText.innerHTML=`Searching the weather of <span>"${e}"</span>`,fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid=2a48853259e00909adba884fffdf7072&units=metric").then(e=>e.json()).then(e=>{let t=e.name,r=e.sys.country,n=e.coord.lon,a=e.coord.lat,i=e.weather[0].description,o=e.weather[0].icon,s=e.main.temp+"\xb0 C",p=e.main.feels_like+"\xb0 C",l=e.main.temp_min+"\xb0 C",d=e.main.temp_max+"\xb0 C",h=e.main.pressure+" hPa",c=e.main.humidity+"%",u=e.visibility+" metres",m=e.wind.speed+" m/s",y=e.wind.deg,w=parseFloat(e.timezone)/3600,T=60*(w-parseInt(w));w=parseInt(w);let f=w+"hour "+T+" min ahead of GMT";w<0&&(f=w+"hour "+T+" min behind GMT");let g=e.sys.sunrise,S=e.sys.sunset;console.log(t,r,n,a),console.log(s,p,l,d),console.log(h,c,u,m,y),console.log(f,g,S),wrapper.classList.add("active"),wrapper.querySelector(".word i").innerHTML="<img src=http://openweathermap.org/img/wn/"+o+"@2x.png>",document.querySelector(".word p").innerText=t+", "+r;let x=n.toFixed(2)+" longitude, "+a.toFixed(2)+" latitude";document.querySelector(".word span").innerText=x,document.querySelector(".weather span").innerText=i,document.querySelector(".temperature span").innerHTML=`
        <table>
            <tr>
                <th>Temperature</th>
                <td>`+s+`</td>
            </tr>
            <tr>
                <th>Feels like</th>
                <td>`+p+`</td>
            </tr>
        </table>`,document.querySelector(".atmosphere span").innerHTML=`
        <table>
            <tr>
                <th>Pressure</th>
                <td>`+h+`</td>
            </tr>
            <tr>
                <th>Humidity</th>
                <td>`+c+`</td>
            </tr>
            <tr>
                <th>Visibility</th>
                <td>`+u+`</td>
            </tr>
            <tr>
                <th>Wind Speed</th>
                <td>`+m+`</td>
            </tr>
        </table>`,document.querySelector(".timez span").innerHTML=`
        <table>
            <tr>
                <th>Timezone</th>
                <td>`+f+`</td>
            </tr>
            <tr>
                <th>Sunrise</th>
                <td>`+g+`</td>
            </tr>
            <tr>
                <th>Sunset</th>
                <td>`+S+`</td>
            </tr>
        </table>`}).catch(()=>{infoText.innerHTML=`Can't find the weather of <span>"${e}"</span>. Please, try to search for another city`,console.log("Invalid place name")})}searchInput.addEventListener("keyup",e=>{let t=e.target.value.replace(/\s+/g," ");"Enter"==e.key&&t&&getWeather(t)}),removeIcon.addEventListener("click",()=>{searchInput.value="",searchInput.focus(),wrapper.classList.remove("active"),infoText.style.color="#9A9A9A",infoText.innerHTML="Type any existing place in the world and press enter to know its weather"});
