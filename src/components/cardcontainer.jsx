import Taskcard from "./taskcard"
import { useState } from "react";
import { EventHandler } from "react";
import { useEffect } from "react";
export default function Cardcontainer(){
    const [tasktitle, setTasktitle] = useState("");
    const [taskdesc, setTaskdesc] = useState("");
    
    const [taskid, settaskid] = useState(0);
  
const  [todotaskdetails , settodotaskdetails] = useState([]);

const  [todotaskdetailsforfilter , settodotaskdetailsforfilter] = useState([]);   


function handleaddtasktitle(e){



setTasktitle(e.target.value);


}


function handleaddtaskdesc(e){


    
    setTaskdesc(e.target.value);
    
    }

function addtasks(){


  const newid = taskid + 1;
  settaskid(newid);

var taskdetails ={
"id" : newid ,
"tasktitle": tasktitle ,
"taskdesc": taskdesc,
"status" : "Not completed"



}



var copytaskdetails  = [...todotaskdetails];

copytaskdetails.push(taskdetails);

 settodotaskdetails(copytaskdetails);
 settodotaskdetailsforfilter(copytaskdetails);
 

setTasktitle("");
setTaskdesc("");


}


function handlestatus(taskid , newstatus){
todotaskdetails.map((d)=>console.log(d));
console.log(`${taskid}hloo`);
console.log(`${newstatus}`);

  const updatedTaskstatus = todotaskdetails.map((task) => {
    if (task.id === taskid) {
      return {
        ... task ,
       status : newstatus
      };
    } else {
      return task;
    }
  });
  settodotaskdetailsforfilter(updatedTaskstatus);
  settodotaskdetails(updatedTaskstatus);
  





}













function handleedit(tasktitlee, taskdescc, edittaskid) {
  var newtasktile = prompt(`Enter New task title :`);
  var newtaskdesc = prompt(`Enter new task desc`);

  const updatedTaskDetails = todotaskdetails.map((task) => {
    if (task.id === edittaskid) {
      return {
        ... task ,
        tasktitle: newtasktile,
        taskdesc: newtaskdesc
      };
    } else {
      return task;
    }
  });

  settodotaskdetailsforfilter(updatedTaskDetails);
  settodotaskdetails(updatedTaskDetails);


  console.log(todotaskdetails);
}




  
    useEffect(() => {
        console.log(` ${tasktitle}`);
      }, [tasktitle]);
        
    function handledelete(tasktitle , taskdesc , taskid){
    
      var newtodotaskdetails = todotaskdetails.filter((datas)=>{

if(datas.id != taskid ){

return {
  ... datas 
}

}



      })
      settodotaskdetailsforfilter(newtodotaskdetails);
      settodotaskdetails(newtodotaskdetails);
       console.log("DE;;");
        
        
        }


function handlefilterstatus(value){
console.log(value);

if(value === 'completed'){
var completeddetails = todotaskdetails.filter((datas) => datas.status === value);
settodotaskdetailsforfilter(completeddetails);
}


else if(value === 'Not completed'){
  var notcompleteddetails = todotaskdetails.filter((datas) => datas.status === value);
  settodotaskdetailsforfilter(notcompleteddetails);
  }


else {
settodotaskdetailsforfilter(todotaskdetails);



}

}


return(

<>




<div className="container-fluid">
        
        <div className="row">
          <div className="col-lg-12 col-sm-12">

        
            <div className="headcontents">
       
              <h5>To Do</h5>
              <div className="headcontentsmain">
              <input type="text" name="" id="tasktitle" placeholder='Todo Name'value={tasktitle} onChange={(e)=>(


handleaddtasktitle(e)

              )





              }/>
              <input type="text" name="" id="taskdesc"  placeholder='ToDo Description' value={taskdesc} onChange={(e)=>(

handleaddtaskdesc(e)

              )}/>
              <button type="button" className="btn btn-secondary btn-sm" id='button' onClick={addtasks}>To Do</button>
            </div>
    
            </div>
            <div className="maincontents">
            <div className="secondcontents">
              <h5>My To dos</h5>
              <div className="dropdown">
                <label htmlFor="dropdown">Select:</label>
                <select name="select" id="select" onChange={(e)=>{

handlefilterstatus(e.target.value);


                }}>
  <option value="filter">filter</option>
  <option value="completed">completed</option>
  <option value="Not completed">Not completed</option>
  <option value="All">All</option>
</select>

             
              </div>
            </div>
            <div className="cardcontents">
              <div className="row">
             
              {

todotaskdetailsforfilter.map((data , index)=> 

<Taskcard key={index}
tasktitle = {data.tasktitle}
taskdesc ={data.taskdesc}
handleedit = {handleedit}
handledelete = {handledelete}
taskid = {data.id}
status={data.status}
handlestatus ={handlestatus}
/>

)


              }
            
             
         
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>

  



</>




)




}