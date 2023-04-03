class Performer {
    constructor(name, email, surname) {
        this.name = name;
        this.surname = surname;
        this.email = email;
      }
}


let global_Performer_list = new Array();


function AddPerformer(name,email,surname){
    let perf = new Performer(name,email, surname);
    global_Performer_list.push(perf);


    return perf;
}


function EditPerformer(name , surname, new_surname, new_name, new_email)
{
    for (let id = 0; id < global_Performer_list.length; id++) {


        let perf = global_Performer_list[id];


        if (perf.name === name &&
            perf.surname === surname){ 
                global_Performer_list[id].name = new_name;
                global_Performer_list[id].surname = new_surname;
                global_Performer_list[id].email = new_email
                return 1;
            }
    }


    return -1;
}


function RemovePerformer(name,surname)
{
    for (let id = 0; id < global_Performer_list.length; id++) {


        let perf = global_Performer_list[id];


        if (perf.name === name  &&
            perf.surname === surname ){
                global_Performer_list.splice(id, 1);
                return 1;
             }
    }
    return -1;
}


function SearchPerformer (name, surname) {


    for (let id = 0; id < global_Performer_list.length; id++) {


        let perf = global_Performer_list[id];


        if (perf.name === name &&
            perf.surname === surname) { 
                console.log(`Performer found: name: ${perf.name}\n surname ${perf.surname}\n email: ${perf.email}\n`)
                return perf; 
            }
    }
    return -1;
}


function PerformerList() {
    console.log("\n" + "List of all performers:");
    
    for (let id = 0; id < global_Performer_list.length; id++) {
        let perf = global_Performer_list[id];
        console.log(`Name: ${perf.name}\n surname ${perf.surname}\n email: ${perf.email}\n`);
    }
    console.log();
    return global_Performer_list;
}


exports.AddPerformer = AddPerformer
exports.RemovePerformer = RemovePerformer;
exports.EditPerformer = EditPerformer;
exports.AddPerformer = AddPerformer;
exports.SearchPerformer = SearchPerformer;
exports.PerformerList = PerformerList;
