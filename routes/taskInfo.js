const taskData=require('../dataset.json');
const taskRoutes= require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require("fs");

taskRoutes.use(bodyParser.urlencoded({extended : false}));
taskRoutes.use(bodyParser.json());


// For Put request in specific task
taskRoutes.put('/:id',(req,res)=>{

    // if id did not match
    let taskDataModified = taskData;// for safety of not doing anything silly directly
    let RoutineArray= taskDataModified.Routine;
    let Passed_id= req.params.id;
    let result = RoutineArray.find(e=>e.id==Passed_id);
    if(!result) res.status(404).send(`Task with folloing id: ${Passed_id} is no availabel`);
   
    // if id has been matched   
        const taskDetails = req.body;
        let index = RoutineArray.indexOf(result);
        RoutineArray[index] = taskDetails;
        let writePath = path.join(__dirname, '..', 'dataset.json');
        fs.writeFileSync(writePath, JSON.stringify(taskDataModified), {encoding:'utf8', flag:'w'});
        res.status(200).send("course has been updated successfully");
})


// For Deleting any spicific task
taskRoutes.delete('/:id',(req,res)=>{
    //if id did not match
    let taskDataModified = taskData;// for safety of not doing anything silly directly
    let RoutineArray= taskDataModified.Routine;
    let Passed_id= req.params.id;
    let result = RoutineArray.find(e=>e.id==Passed_id);
    if(!result) res.status(404).send(`Task with folloing id: ${Passed_id} is not availabel`);
    
    //if id has been matched
    let index = RoutineArray.indexOf(result);
    RoutineArray.splice(index,1);
    let writePath = path.join(__dirname, '..', 'dataset.json');
    fs.writeFileSync(writePath, JSON.stringify(taskDataModified), {encoding:'utf8', flag:'w'});
    res.status(200).send(`course with id:${Passed_id} has been deleted successfully`);
})

//For Post request of adding a new task
taskRoutes.post('/', (req, res) => {
    const taskDetails = req.body;
    let taskDataModified = taskData;
    taskDataModified.Routine.push(taskDetails);
      let writePath = path.join(__dirname, '..', 'dataset.json');
      fs.writeFileSync(writePath, JSON.stringify(taskDataModified), {encoding:'utf8', flag:'w'});
      res.status(200).send("course has been added successfully");
  });

// For get request of a spicific task id
taskRoutes.get('/:id',(req,res)=>{
    let RoutineArray= taskData.Routine;
    let Passed_id= req.params.id;
    let result = RoutineArray.find(e=>e.id==Passed_id);
    if(!result) res.status(404).send(`Task with folloing id: ${Passed_id} is not availabel`);
    res.status(200).send(result);
});

// For all the get Request
taskRoutes.get('/',(req,res)=>{
    res.status(200);
    res.send(taskData);
});

module.exports = taskRoutes;