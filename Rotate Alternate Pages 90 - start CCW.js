    // Add a menu item to collate with another document on the filesystem

    app.addMenuItem({  cName: "Rotate 90 Alt Pages Odd CCW", cParent: "Edit", cExec: "RotAltPagesOddCCW();",  cEnable: "event.rc = (event.target != null);", nPos: 0 });

 
RotAltPagesOddCCW = app.trustedFunction(function()
{
    // create a new document
    app.beginPriv();
	try {
	
	    for (i=0; i< this.numPages; i++)
    {
		// This is a bit tricky… Acrobat starts to count pages with page 0. The first page in the document is 90 counter clockwise ie 270
        if (i%2 == 0)
        {
        this.setPageRotations(i,i,270)
        }
        else
        {
        this.setPageRotations(i,i,90)
        }
    }
     app.endPriv();
	
} 
catch(e)
 
{
app.alert("Processing error: "+e)
}
	}

)

