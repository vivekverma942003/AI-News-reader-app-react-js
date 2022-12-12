import React,{useEffect, useState} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Newscards from "./components/newscards/newscards";
import useStyles from "./style.js";

const alankey ="a47cbebe31cedc528eb33aad69841cba2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App=()=>{
    const[newsArticles,setNewsArticles]=useState([]);
    const[activeArticle,setActiveArticle]=useState(-1);
    const classes=useStyles();
    useEffect(()=>{
        alanBtn({
            key:alankey,
            onCommand: ({command,articles})=>{
                if(command==='newHeadlines'){
                    setNewsArticles(articles) ;
                    setActiveArticle(-1);  
                }else if(command==='highlight'){
                 setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
                }
            }
        })
    },[])
    return(
        <div>
            <div className={classes.logoContainer}>
             <img src="https://www.glbitm.org/iics2021/img/logo.png"  className={classes.alanLogo} alt="GL BAJAJ"/>
            </div>
            <Newscards articles={newsArticles} activeArticle={activeArticle}/>


        </div>
    )
}
export default App;
