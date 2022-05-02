// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import { sidebar } from "../components/navbar.js";
document.getElementById("sidebar").innerHTML=sidebar();


// var query=document.getElementById("")

let  news= async()=>{
    try{
        let res= await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
        let data= await res .json();
        
        append(data.articles)
    }catch(err){
        console.log("error")
    }

   
}
 news()

//  obj{
//      india:in
//  }
//how image, description and title 
var array=[];
var ans=document.getElementById("results");
 function append(data){
    // console.log(data);

    data.forEach(({urlToImage,title,description})=>{
        //    ans.innerHTML=null;
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
            // console.log(p)
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
    // array.push(el);
    localStorage.setItem("news",JSON.stringify(el))
    window.location.href="search.html"

}