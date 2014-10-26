// JavaScript Utilities for Adobe Acrobat (NOT Reader) tested on V8 of Acrobat Pro, should work at least up to V11
// 
// Code and Ideas have been borrowed from many sources, these are listed where possible at the end of the Code
// 
// Each script can be saved with a .js extension to the javascript directory
// ie "C:\Program Files (x86)\Adobe\Acrobat 8.0\Acrobat\Javascripts" on a Windows Vista/7/8 64 bit install for V8.0
// you must restart Acrobat after copying to see the menu options change
// All these utilities are added to the "Edit" Menu
// to disbale them, remove from the Javascript directory and restart Acrobat
// Each utility is stand alone, so you can just save each utility as needed
// You can insert the contents of multiple utilities into a single file, although I prefer to keep them separate for ease of editing
//
// Lastly I Have included lots of comments to make any modification easier to facilitate
// No warranty is given as to operation, and you accept all risks of using this code
// Backup files before modifying them in case of unexpected results or system crashes

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

