import { Component } from '@angular/core';
import {ChordService} from '../chord.service';

@Component({
  selector: 'edit-chord',
  templateUrl: './edit-chord.component.html',
  styleUrls: ['./edit-chord.component.css'],
  providers:[ChordService]
})
export class EditChordComponent{



  errors = [];
  clearSelected = '';

  constructor(private chordService: ChordService,) { 
  } 

  
  
  clear(){
    if (this.clearSelected == ''){
      this.clearSelected = 'xxx';
    }
    else{
      this.clearSelected = '';
    }
       
  }

validateChordPro(text){
  //Break chordpro into lines, remove whitespace
  var lines = text.split('\n'); 
  for (let i = 0; i < lines.length; i++){
    lines[i] = lines[i].trim();
  }
  
  //control varaibles
  this.errors = [];
  let titleFound = 0;
  let startSong = 0;

  for (let i = 0; i< lines.length; i++){
    let currentLine = lines[i];
    if (currentLine[0] == "#"){continue;} //ignore comment line
    
    //deal with possible directive line
    if (currentLine.indexOf("{") > -1 || currentLine.indexOf("}") > -1){
      let tempa = currentLine.length - currentLine.replace("{", "").length;
      let tempb = currentLine.length- currentLine.replace("}", "").length;

      if (tempa == 1 && tempb == 1){
      
        if (currentLine == "{ns}" || currentLine == "{new_song}"){
           startSong++;
           if (startSong > 1) {
                this.errors.push("Warning: More than one new song is not alowed. See line: " + i.toString()); 
              
           }

        }
        else if (currentLine.indexOf("t") == 1 || currentLine.indexOf("title") == 1 ){
    
                  if (currentLine.indexOf(":") == -1 || currentLine[currentLine.indexOf(":") + 1] == "}"){
                     this.errors.push("Error: Missing seperator or text after sepeator or misspled directive: " + i.toString());
            }
            titleFound++;
            if (titleFound > 1){
               this.errors.push("Error: More than one title directive. See line: " + i.toString()); 

            }

        }
        else if (currentLine.indexOf("st") == 1 || currentLine.indexOf("subtitle") == 1 ){
                 if (currentLine.indexOf(":") == -1 || currentLine[currentLine.indexOf(":") + 1] == "}"){
              this.errors.push("Error: Missing seperator or text after sepeator or misspled directive: " + i.toString());
            }

        }
        else if (currentLine.indexOf("c") == 1 || currentLine.indexOf("comment") == 1 ){
                if (currentLine.indexOf(":") == -1 || currentLine[currentLine.indexOf(":") + 1] == "}"){
               this.errors.push("Error: Missing seperator or text after sepeator or misspled directive: " + i.toString());
            }

        }
        else if (currentLine.indexOf("define") == 1){
             if (currentLine.indexOf(":") == -1 || currentLine[currentLine.indexOf(":") + 1] == "}"){
              this.errors.push("Error: Missing seperator or text after sepeator or misspled directive: " + i.toString()); 
            }
            //Check more stuff here
        }
        else if (currentLine.indexOf("soc") > -1 || currentLine.indexOf("start_of_chorus") > -1){
          if (currentLine != "{soc}" || currentLine != "{start_of_chorus}"){
            this.errors.push("Error: The directive has some extra characters : " + i.toString()); 
          }
             
        }
         else if (currentLine.indexOf("eoc") > -1 || currentLine.indexOf("end_of_chorus") > -1){
          if (currentLine != "{eoc}" || currentLine != "{end_of_chorus}"){
            this.errors.push("Error: The directive has some extra characters : " + i.toString()); 
          }
             
        }
        else if (currentLine.indexOf("eot") > -1 || currentLine.indexOf("end_of_tab") > -1){
          if (currentLine != "{eot}" || currentLine != "{end_of_tab}"){
            this.errors.push("Error: The directive has some extra characters : " + i.toString()); 
          }
             
        }
         else if (currentLine.indexOf("sot") > -1 || currentLine.indexOf("start_of_tab") > -1){
          if (currentLine != "{sot}" || currentLine != "{start_of_tab}"){
            this.errors.push("Error: The directive has some extra characters : " + i.toString()); 
          }
             
        }
        
       
        else{
             this.errors.push("Warning: Undefined directive on line: " + i.toString()); 
        }
        
      
      
      } //end of individual directive problems
      else {
        this.errors.push("Error: Brace Mismatch on line: " + i.toString()); 
      }
    }//end of possible directive detection
//normal line operation


else{
  if (titleFound == 0 || startSong == 0){
     this.errors.push("Error: You must have both a ns and t directive before starting lyrics. See line: " + i.toString());


  }
}



  }//end of for loop

//case where no content
if (titleFound == 0 || startSong == 0){
      this.errors.push("Error: You must have both a ns and t directive.");
}
} //end of function


  submit(text){
    this.validateChordPro(text);

    

    this.chordService.createChord(text, "Evan", "1", "Hotel California", true).subscribe(); //subscribe to the stream of events (the observable)
  


  } 


}
