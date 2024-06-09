const name = [];

// crud functionality
// middleware to log the request body
app.post('/addName',log,addName);
app.put('/updateName',updateName);
app.delete('/deleteName',log,deleteName);
app.get('/fetchName/:name',fetchName);

function log(request,response,next){
    console.log(request.body);
    next();
}

function addName(request,response){
    let {name} = request.body;
    name.push(name);
    response.send(200,"name added successfully");
}

function updateName(request,response){
    // arr = ['a','b','c']
    let isExist = false;
    let {updatedName,newName} = request.body;
    for(let i=0;i < name.length;i++){
        if(name[i] == updatedName){
            name.pop(updatedName);
            name.push(newName);
            isExist = true;
        }
    }

    if(!isExist)
     name.push(newName);

    return response.send(200,"name updated successfully");
}

function deleteName(request,response){
    let {delName} = request.body;

    for(let i=0;i < name.length;i++){
        if(name[i] === delName){
            name.pop(deleteName);
        }
    }
}

function fetchName(request,response){
    let {fetchName} = request.params;
}