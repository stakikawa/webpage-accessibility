// Module for scraping the content of the website

const Axios = require('axios');

// String -> AxiosResponse<T>
// grabs the webpage
function scrape(url) {
    return Axios.get(url);
}

// FormatterInput is Array of Elements
// Element is one of:
//    type: head(h1h2h3h4h5...etc), para, img
//    head and para have text: key
//    img has source and alt: key
// AxiosResponse<T> -> FormatterInput<T>
// parse: formats the data
function parse(doc){
    //select the data field from response
    let data = doc.data;
    //extract article
    let beginning = data.indexOf("<article");
    let end = data.indexOf("</article>");
    let article = data.substring(beginning,end+10);
    //split elements into arrays
    let arr = article.split("><");
    //filter elements for img, header, para
    arr = arr.filter(function (x) {
        return tagcheck(gettag(x));
    });
    //init resultant array
    let formatterinput = [];
    //format and create objects
    for (const x of arr){
        if (gettag(x) == "p") {
            let begin = x.indexOf(">");
            let end = x.indexOf("</p");
            if (begin != -1) {
                let element = new Object();
                element.type = "para";
                element.text = x.substring(begin+1, end);
                formatterinput.push(element);
            }
        } else if(isheader(gettag(x))){
            let begin = x.indexOf(">");
            let end = x.indexOf("</h");
            if (begin != -1) {
                let element = new Object();
                element.type = gettag(x);
                element.text = x.substring(begin+1, end);
                formatterinput.push(element);
            }
        } else if(gettag(x) == "img"){
            let srci = x.indexOf("src=\"");

            if (srci != -1){
                srci = x.substring(srci+5);
                let element = new Object();
                element.type = "img";
                element.source = srci.substring(0,srci.indexOf("\""));
                //TODO: call to image handler
                //TODO: make hacky fix for small dupe images with src: ......?q=20
                formatterinput.push(element);
            }
        }
    }
    return formatterinput;
}

function gettag(s){
    return s.substring(0,s.indexOf(" "));
}

function tagcheck(tag){
    return tag == "p"  | tag == "a" | tag == "img" | tag == "h1" | tag == "h2" | tag == "h3" | tag == "h4" | tag == "h5" | tag == "h6";
}

function isheader(tag){
    return tag == "h1" | tag == "h2" | tag == "h3" | tag == "h4" | tag == "h5" | tag == "h6";
}
scrape("https://towardsdatascience.com/4-common-types-of-hackathons-7daba7296ae1").then(parse).then(
    //TODO CALL RENDERER RIGHT HERE
    console.log
);