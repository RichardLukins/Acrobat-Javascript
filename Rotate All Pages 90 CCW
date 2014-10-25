 // Add a menu item to collate with another document on the filesystem
app.addMenuItem({ cName: "Rotate all Pages 90 CCW", cParent: "Edit", cExec: "RotAllCCW();", cEnable: "event.rc = (event.target != null);", nPos: 0 });
RotAllCCW = app.trustedFunction(function()
{
// create a new document
app.beginPriv();
try {
this.setPageRotations(0,this.numPages,270)
}
app.endPriv();
catch(e)
{
app.alert("Processing error: "+e)
}
}
)
