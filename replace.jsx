// replace text elements in type layers;

// 2013, use it at your own risk;

#target photoshop

if (app.documents.length > 0) {

          for (var n = 0; n < app.documents.length; n++) {

                    app.activeDocument = app.documents[n];

                    app.activeDocument.suspendHistory("replace text", "main()")

                    }

          };

// the opertation;

function main () {

          var myDocument = app.activeDocument;

          var theArray1 = [".L", ".R"];

          var theArray2 = ["", ""];

          for (var b = 0; b < theArray1.length; b++) {

                    replaceText (theArray1[b], theArray2[b])

                    }

          };

////// reoplace text //////

function replaceText (replaceThis, replaceWith) {

// =======================================================

var idreplace = stringIDToTypeID( "replace" );

    var desc22 = new ActionDescriptor();

    var idnull = charIDToTypeID( "null" );

        var ref3 = new ActionReference();

        var idPrpr = charIDToTypeID( "Prpr" );

        var idreplace = stringIDToTypeID( "replace" );

        ref3.putProperty( idPrpr, idreplace );

        var idTxLr = charIDToTypeID( "TxLr" );

        var idOrdn = charIDToTypeID( "Ordn" );

        var idAl = charIDToTypeID( "Al  " );

        ref3.putEnumerated( idTxLr, idOrdn, idAl );

    desc22.putReference( idnull, ref3 );

    var idUsng = charIDToTypeID( "Usng" );

        var desc23 = new ActionDescriptor();

        var idfind = stringIDToTypeID( "find" );

        desc23.putString( idfind, replaceThis );

        var idreplace = stringIDToTypeID( "replace" );

        desc23.putString( idreplace, replaceWith );

        var idcheckAll = stringIDToTypeID( "checkAll" );

        desc23.putBoolean( idcheckAll, true );

        var idFwd = charIDToTypeID( "Fwd " );

        desc23.putBoolean( idFwd, true );

        var idcaseSensitive = stringIDToTypeID( "caseSensitive" );

        desc23.putBoolean( idcaseSensitive, false );

        var idwholeWord = stringIDToTypeID( "wholeWord" );

        desc23.putBoolean( idwholeWord, false );

        var idignoreAccents = stringIDToTypeID( "ignoreAccents" );

        desc23.putBoolean( idignoreAccents, true );

    var idfindReplace = stringIDToTypeID( "findReplace" );

    desc22.putObject( idUsng, idfindReplace, desc23 );

executeAction( idreplace, desc22, DialogModes.NO );

};