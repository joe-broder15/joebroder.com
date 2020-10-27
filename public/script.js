var mammoth = require("mammoth");

mammoth.convertToHtml({path: "./test1.docx"}).then(function (resultObject) {
    
    return resultObject.value;
}) 