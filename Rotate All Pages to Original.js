// JavaScript Utilities for Adobe Acrobat (NOT Reader) tested on V8 of Acrobat Pro, should work at least up to V11
// (c) Richard Lukins 2014 (and others as noted below)
//
//   ************************************************************************************
//   ************************************************************************************
//   *****                                                                          *****
//   *****    	                   UNROTATE ALL PAGES                               *****
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
app.addMenuItem({  cName: "UnRotate ALL Pages", cParent: "Edit", cExec: "UnRotAllPages();",  cEnable: "event.rc = (event.target != null);", nPos: 0 });
//
// Define the Function
//
UnRotAllPages = app.trustedFunction(function() {
	try { // start error trapping
		app.beginPriv(); // explicitly elevate security privileges
		if (this.numPages > 0) { // check there is at least 1 page to work on
			this.setPageRotations(0,this.numPages-1,0);
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
