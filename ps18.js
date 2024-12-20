function domainName(url){
    let urlLink = new URL(url.includes("http") ? url : `https://${url}`).hostname;
    let str = urlLink.toString();
    let cleanUrl;
    if(str.startsWith("www.")){
        cleanUrl=str.replace("www.","")
    }else{
        cleanUrl=str
    }
    for(let i=0;i<cleanUrl.length;i++){
        if(cleanUrl[i]=="."){
            let newStr=cleanUrl.substring(0,i)
            cleanUrl=newStr
        }
    }
    return cleanUrl;
}
console.log(domainName("www.xakep.ru"))

// Write a function that when given a URL as a string, parses out 
// just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"