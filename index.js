
let editor =document.getElementById("editor").value
console.log(marked.parse(editor))
document.getElementById("preview").innerHTML=marked.parse(editor)





function renderPreview(event) {
    console.log(event.code)
    if(event.code=="Enter"){
        
        document.getElementById("preview").innerHTML=marked.parse(event.target.value)

    }
    else{
        console.log(event.target.value)
        document.getElementById("preview").innerHTML=marked.parse(event.target.value)
    }
   
   
        

    }
