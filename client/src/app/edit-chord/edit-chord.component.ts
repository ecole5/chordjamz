import { Component, Input } from '@angular/core';
import {ChordService} from '../chord.service';

@Component({
  selector: 'edit-chord',
  templateUrl: './edit-chord.component.html',
  styleUrls: ['./edit-chord.component.css'],
  providers:[ChordService]
})
export class EditChordComponent{

  @Input()
  myUsername;

  chordpro = require("chordprojs");

  util = require("util");
  

  errors = [];
  constructor(private chordService: ChordService) { 
  } 

  //Clear Button operation
  clearSelected = '';
  clear(){
    if (this.clearSelected == ''){this.clearSelected = 'xxx';}
    else{this.clearSelected = '';}     
  }

submit(text, type){
  //Break chordpro into lines, remove whitespace
  var lines = text.split('\n'); 
  for (let i = 0; i < lines.length; i++){
    lines[i] = lines[i].trim();
  }
  
  //control varaibles
  this.errors = [];
  let titleFound = 0;
  let startSong = 0;
  let warningFound = false;
  let errorFound = false;
  let songName;

  for (let i = 0; i< lines.length; i++){
    let currentLine = lines[i];
    if (currentLine[0] == "#"){continue;} //ignore comment line
    
    //deal with possible directive line
    if (currentLine.indexOf("{") > -1 || currentLine.indexOf("}") > -1){
      let tempa = (currentLine.split("{").length - 1)
      let tempb = (currentLine.split("}").length - 1)
      if (tempa == 1 && tempb == 1){
      
        if (currentLine == "{ns}" || currentLine == "{new_song}"){
           startSong++;
           if (startSong > 1) {
                this.errors.push("Warning: More than one new song is not alowed. See line: " + i.toString()); 
                warningFound = true;
              
           }

        }
        else if (currentLine.indexOf("t") == 1 || currentLine.indexOf("title") == 1 ){
    
                  if (currentLine.indexOf(":") == -1 || currentLine[currentLine.indexOf(":") + 1] == "}"){
                     this.errors.push("Error: Missing seperator or text after sepeator or misspled directive: " + i.toString());
                     errorFound = true;
            }
            titleFound++;
            songName = currentLine.substring(currentLine.indexOf(":")+1,currentLine.length-1); //get song name
            if (titleFound > 1){
               this.errors.push("Error: More than one title directive. See line: " + i.toString()); 
               errorFound = true;

            }

        }
        else if (currentLine.indexOf("st") == 1 || currentLine.indexOf("subtitle") == 1 ){
                 if (currentLine.indexOf(":") == -1 || currentLine[currentLine.indexOf(":") + 1] == "}"){
              this.errors.push("Error: Missing seperator or text after sepeator or misspled directive: " + i.toString());
              errorFound = true;
            }

        }
        else if (currentLine.indexOf("c") == 1 || currentLine.indexOf("comment") == 1 ){
                if (currentLine.indexOf(":") == -1 || currentLine[currentLine.indexOf(":") + 1] == "}"){
               this.errors.push("Error: Missing seperator or text after sepeator or misspled directive: " + i.toString());
               errorFound = true;
            }

        }
        else if (currentLine.indexOf("define") == 1){
             if (currentLine.indexOf(":") == -1 || currentLine[currentLine.indexOf(":") + 1] == "}"){
              this.errors.push("Error: Missing seperator or text after sepeator or misspled directive: " + i.toString()); 
              errorFound = true;
            }
            //Define specific directive shit
            
              let temp = currentLine.split(":");
              let temp1 = temp[1].trim();
              let checkpart1 = false;
              let checkpart2 = false;

              if (temp1.charCodeAt(0) >= 65 && temp1.charCodeAt(0) <= 71) {
                  let temp2 = temp1.split(" ");

                  if (temp2.length == 2) {
                      var temp3 = temp2[1];
                      checkpart1 = true;
                      if (!(temp3.length == 8)) {
                          checkpart1 = true;
                      }
                  }
              }

              if (checkpart1) {
                  if (temp3[0] == "X" || temp3[0] == 'x') {
                      for (let e = 1; e < temp3.length-1; e++) {
                        
                          if (!(temp3.charCodeAt(e) >= 48 && temp3.charCodeAt(e) <= 57)) {
                              checkpart2 = true;
                              
                              
                          }
                      }

                  }
                  else {
                    
                      checkpart2 = true;
                  }
                  
              }

              if (!checkpart1) {
                warningFound = true;
                 this.errors.push("Warning: name paramater for define directive does not start with uppercase letter A-G or contains bad spacing. See line: " + i.toString()); 
              }
              else if (checkpart2) {
               warningFound = true;
                 this.errors.push("Warning: code paramter for define directivie is not exactly 6 characters long or contains characters other than X or x and 0-9. See line: " + i.toString()); 
              }


        }
        else if (currentLine.indexOf("soc") > -1 || currentLine.indexOf("start_of_chorus") > -1){
          if (currentLine != "{soc}" || currentLine != "{start_of_chorus}"){
            this.errors.push("Error: The directive has some extra characters : " + i.toString()); 
            errorFound = true;
          }
             
        }
         else if (currentLine.indexOf("eoc") > -1 || currentLine.indexOf("end_of_chorus") > -1){
          if (currentLine != "{eoc}" || currentLine != "{end_of_chorus}"){
            this.errors.push("Error: The directive has some extra characters : " + i.toString());
            errorFound = true; 
          }
             
        }
        else if (currentLine.indexOf("eot") > -1 || currentLine.indexOf("end_of_tab") > -1){
          if (currentLine != "{eot}" || currentLine != "{end_of_tab}"){
            this.errors.push("Error: The directive has some extra characters : " + i.toString()); 
            errorFound = true;
          }
             
        }
         else if (currentLine.indexOf("sot") > -1 || currentLine.indexOf("start_of_tab") > -1){
          if (currentLine != "{sot}" || currentLine != "{start_of_tab}"){
            this.errors.push("Error: The directive has some extra characters : " + i.toString()); 
            errorFound = true;
          }
             
        }
        
       
        else{
             this.errors.push("Warning: Undefined directive on line: " + i.toString()); 
             warningFound = true;
        }
        
      
      
      } //end of individual directive problems
      else {
        this.errors.push("Error: Brace Mismatch on line: " + i.toString()); 
        errorFound = true;
      }
    }//end of possible directive detection
//normal line operation


else{
  if (titleFound == 0 || startSong == 0){
     this.errors.push("Error: You must have both a ns and t directive before starting lyrics. See line: " + i.toString());
     errorFound = true;


  }
}



  }//end of for loop

//case where no content
if (titleFound == 0 || startSong == 0){
      this.errors.push("Error: You must have both a ns and t directive.");
      errorFound = true;
}

//Build the submission to the server if reequired

if (errorFound){
  this.errors.push("Chord will not be saved, please correct the errors.");
}
else{ //will build a query
  console.log("Made it this far");
  if(warningFound){this.errors.push("Chord will not display until warnings are fixed.")}
  console.log(this.chordpro.format(text).html);
  
  this.chordService.createChord(text, this.myUsername, songName, type, !warningFound).subscribe(); //subscribe to the observale
  this.errors.push("Chord saved.")
  
}//end of submit

} //end of function


}
