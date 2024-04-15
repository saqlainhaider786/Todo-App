import inq from "inquirer";

console.log("******************Todo******************");
let todos=new Array();
// let size=0;
let exe=true;//using to control loop iteration.
do{
    let op=await inq.prompt([{ //op means operations
        message:"What you want to do : ",
        type:"list",
        choices:["Add Task","Remove Task","View Tasks","Exit"],
        name:"option"
    }]);

    if(op.option==="Add Task"){
        let task=await inq.prompt([{
            name:"newTask",
            type:"input",
            message:"Add new Task : "
        }]);
        todos.push(task.newTask);
        console.log("Successfully added new task!..");
    }

    else if(op.option==="Remove Task"){
        if(todos.length<=0){
            console.log("List is empty!...");
        }
        else{
            todos.forEach((task,i)=>{
                console.log(`${i+1}. ${task}`);
            });

        let indx=await inq.prompt([{
            type:"number",
            name:"delTask",
            message:"Select the Task Index to Remove : ",
        }]);
        indx.delTask-=1;
       let newArr=new Array();
       todos.map((task,i)=>{
            if(i!==indx.delTask){
                 newArr.push(task);
            }
        })
        todos=newArr;
        if(todos.length<=0){
            console.log("List is Empty now!..");
        }
        else{
        console.log("\nUpdated List : ");
        todos.forEach((task,i)=>{
            console.log(`${i+1}. ${task}`);
        });
    }
}
    }

    else if(op.option==="View Tasks"){
        
        if(todos.length<=0){
            console.log("List is Empty!!.");
        }
        else{
        todos.forEach((task,i)=>{
            console.log(`${i+1}. ${task}`);
        });
    }
    }

    else if(op.option==="Exit"){
        exe=false;
    }
}
while(exe);
console.log("Thanks for using my Todo App!...");