#target photoshop  
var doc = activeDocument  
var textFile = new File(Folder.desktop+ '/test.txt');  
var list = readText (textFile).split('\n');  
  
for (var i = 0;i<list.length;i++){  
    var artLayerRef = doc.artLayers.add()  
    artLayerRef.kind = LayerKind.TEXT;  
    var textItemRef = artLayerRef.textItem;  
    textItemRef.contents = list[i]  
    }  
  
function readText(file){  
     if (textFile.exists) {  
    textFile.encoding = "UTF8";  
    textFile.lineFeed = "unix";  
    textFile.open("r", "TEXT", "????");  
    var str = textFile.read();  
    textFile.close();  
    return str;  
    }  
}  
