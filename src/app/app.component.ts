import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  option1 = false;
  option2 = false; 
  option3 = false; 
  showoption1Details = false; 
  showoption2Details = false; 
  showoption3Details = false; 
  expandedTask = {}; 

  currentTask = {};

  tasklist = [
    {"name": "task 1", "description": "task 1 description", "subtasks": [
      {"name": "subtask 11", "description": "subtask 11 description" },
      {"name": "subtask 12", "description": "subtask 12 description" },
      {"name": "subtask 13", "description": "subtask 13 description" },
      {"name": "subtask 14", "description": "subtask 14 description" },
    ]},
    {"name": "task 2", "description": "task 1 description", "subtasks": [
      {"name": "subtask 21", "description": "subtask 21 description" },
      {"name": "subtask 22", "description": "subtask 22 description" },
      {"name": "subtask 23", "description": "subtask 23 description" },
      {"name": "subtask 24", "description": "subtask 24 description" },
    ]},
    {"name": "task 3", "description": "task 1 description", "subtasks": [
      {"name": "subtask 31", "description": "subtask 31 description" },
      {"name": "subtask 32", "description": "subtask 32 description" },
      {"name": "subtask 33", "description": "subtask 33 description" },
      {"name": "subtask 34", "description": "subtask 34 description" },
    ]},
    {"name": "task 4", "description": "task 1 description", "subtasks": [
      {"name": "subtask 41", "description": "subtask 41 description" },
      {"name": "subtask 42", "description": "subtask 42 description" },
      {"name": "subtask 43", "description": "subtask 43 description" },
      {"name": "subtask 44", "description": "subtask 44 description" },
    ]},
  ];

  reset() {
    this.option1 = 
    this.option2 = 
    this.option3 = 
    this.showoption1Details = 
    this.showoption2Details = 
    this.showoption3Details = false; 
  }

  option(value){
    // this.option1= this.option2 = this.option3 = false; 
    this.reset(); 
    if (value === 1) 
      this.option1 = true; 
    else if (value === 2 )
      this.option2 = true;
    else 
      this.option3 = true;  
  }

  option1clicked(event){
    console.log("option1clicked: ", event); 
    this.reset(); 
    this.currentTask = event; 
    this.showoption1Details = true; 
  }
  option2clicked(event){
    console.log("option2clicked: ", event); 
    this.reset(); 
    this.currentTask = event; 
    this.option2 = true;
    this.showoption2Details = true; 
  }
  option3clicked(event){
    console.log("option3clicked: ", event); 
    this.reset(); 
    this.currentTask = event; 
    this.showoption3Details = true; 
  }
}
