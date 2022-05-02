// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

// let query=document.getElementById("search_input").value;
// console.log(query)
let  search= async()=>{
    try{
        // let query=document.getElementById("search_input").value;
        // console.log(query)
        const res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=tesla`)
        const data= await res .json();
        // console.log(data);
        append(data.articles)
        console.log(data.articles);
    }catch(err){
        console.log("error")
    }

   
}
 search()

 var array=[];
var ans=document.getElementById("results");
 function append(data){
    // console.log(data);

    data.forEach(({urlToImage,title,description})=>{
    //     //    ans.innerHTML=null;
        var main=document.createElement("div")
            var row=document.createElement("div")
            main.setAttribute("class","news")
            var img=document.createElement("img")
            img.src=urlToImage
            // console.log(img)
            var rowright=document.createElement("div")
            // rowright.setAttribute("class","news")
            var p=document.createElement("h3")
            p.innerText=title
            console.log(p)
            var p2=document.createElement("p")
            p2.innerText=description
           
            row.append(img);
            rowright.append(p,p2);
            main.append(row,rowright);
            ans.append(main);


            // ans.addEventListener()
            main.addEventListener("click",function(){
                additem({urlToImage,title,description})
                
                {urlToImage,title,description}
            })


    })
   
 }

 let additem  =(el)=>{
        console.log(el)
        array.push(el);
        localStorage.setItem("news",JSON.stringify(el))
        window.location.href
    
    }