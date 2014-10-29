// JavaScript Utilities for Adobe Acrobat (NOT Reader) tested on V8 of Acrobat Pro, should work at least up to V11
// (c) Richard Lukins 2014 (and others as noted below)
//
//   ************************************************************************************
//   ************************************************************************************
//   *****                                                                          *****
//   *****    	        	 ROTATE ODD PAGES ONLY 180 DEGREES                      *****
//   *****                                                                          *****
//   ************************************************************************************
//   ************************************************************************************
//
// These files can be found in an Open and Public Code Repository on GITHUB, please log any issues, feedback or comments etc: 
// https://github.com/stripey/Acrobat-Javascript
// any enhancements, bugs, fixes etc I'd love to hear about so that better stability, error trapping and performance can be obtained
// If you are working on anything similar I'd be more than happy to give shared access to the repository to try and centralise the efforts
// email me directly on stripey@lukins.co.uk
//
// Code and Ideas have been borrowed from many sources, General useful resources are listed in the Readme.md 
// Where code came from a specific Source this is acknowledged as per their terms here:
// Source url: 
//
// 
// Each script can be saved with a .js extension to the JavaScript directory of Acrobat under "Program Files"
// ie "C:\Program Files (x86)\Adobe\Acrobat 8.0\Acrobat\Javascripts" on a Windows Vista/7/8 64 bit install for V8.0
// Other Operating Systems and Versions of Adobe Acrobat might vary!
// you must restart Acrobat after copying the files to see the menu options change, as the JavaScript files are read at startup each time
//
// All these utilities are added to the "Edit" Menu
// to disable any utility, simply remove the .js file from the JavaScript directory and restart Acrobat
// Each utility is stand alone, so you can just save each utility as needed
// You can insert the contents of multiple utilities into a single file if you want, however 
// I prefer to keep each utility separate for ease of editing and debugging
//
// Lastly I have included lots of comments to make any modification easier to facilitate
//
// No warranty is given as to the operation of this code and it is provided on an "as is" basis
// If you re-use this code you agree to leave these comments within the file
// You accept all risks of using this code
// Backup your files before modifying them in case of unexpected results or system crashes
//
//
// Start of the Coding:
//
// Add a menu item to the Edit Menu
app.addMenuItem({  cName: "Rotate Odd Pages 180", cParent: "Edit", cExec: "RotOddPages180();",  cEnable: "event.rc = (event.target != null);", nPos: 0 });
//
// Define the Function
//
RotOddPages180 = app.trustedFunction(function() {
	try { // start error trapping
		app.beginPriv(); // explicitly elevate security privileges
		if (this.numPages > 0) { // check there is at least 1 page to work on
			var nRslt = 1;
			if (this.numPages%2 == 1) { // check for odd page count
				nRslt = app.alert ("Your Document has an odd number of Pages\n\n" + "This routine is best suited to even page counts\n\n" + "Are you Sure you want to continue?", 3, 1);
				}
			if (nRslt == 1) {		
				var rotation = 0;
				var tmr = app.thermometer; // create a progress bar to inform the user of progress
				tmr.duration = this.numPages;
				tmr.begin();
				for (var i=0; i< this.numPages; i=i+2) { // loop through ODD pages only, one at a time
					rotation = this.getPageRotation(i); // we need to know the current rotation of the page
					// the page rotation can be only 4 values 0, 90 ,180 , 270
					// the rotation is relative to the VERY original value, so  
					// any change in rotation must be relative to the current rotation not absolute!!
					if (rotation == 0) { 
						rotation = 180;
						} else {
						if (rotation == 90) { 
							rotation = 270; 
							} else {
							if (rotation == 180) { 
								rotation = 0; 
								} else {
								if (rotation == 270) { rotation = 90}
								} } }
					tmr.value = i; // update progress bar
					tmr.text = 'Rotating page ' + (i + 1) + ' of ' + (this.numPages); // update progress message
					this.setPageRotations(i,i,rotation); // issue the page rotation
					} // end of all pages loop
				tmr.end(); // end the progress bar
				} // End of warning skip loop
		} // end of core processing section
		app.endPriv();
	} // end of try section now catch any error
	catch(e) { app.alert("Processing error: "+e) }
} // end of the code section
) // end of the "app.trustedFunction"
//
// that's all folks!
// Any questions, comments, bugs, improvements or enhancements please report them here:
// https://github.com/stripey/Acrobat-Javascript
