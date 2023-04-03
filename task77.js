const mod = require('./custom_module/module.js')


// customers
let cust_1 = mod.AddCustomer("John", "ffdsfdsfds@gmail.com","Doe")
let cust_2 = mod.AddCustomer("Soft", "soft@gmai.com","Serve")
let cust_3 = mod.AddCustomer("John", "admin@lpnu.ua","Smith")




mod.CustomerList()
mod.SearchCustomer("John", "Doe")
mod.RemoveCustomer("John","Smith")
mod.CustomerList()


//Performers
let perf_1 = mod.AddPerformer("Bobik", "fghfghyjhn@gmail.com","Abobik")
let perf_2 = mod.AddPerformer("jfdl", "dsfsd2004@gmai.com","iofuoisd")
let perf_3 = mod.AddPerformer("vdsa", "fdsfsd1k@lpnu.ua", "ofifosd")
let perf_4 = mod.AddPerformer("podspoas", "dasdsik@gmail.com", "sdpoifs")
let perf_5 = mod.AddPerformer("Tfgfddfdf", "teatat@gmail.com","osfoifds")


mod.PerformerList()
mod.SearchPerformer("Bobik", "Abobik")
mod.RemovePerformer("Tfgfddfdf","osfoifds")
mod.PerformerList()


//projects
let proj_1 = mod.AddProject("Project1", "Description 1", cust_1.name, [perf_1.name,perf_2.name,perf_3.name])
let proj_2 = mod.AddProject("Project2", "Description 2", cust_2.name, [perf_5.name])
let proj_3 = mod.AddProject("Project3", "Description 3", cust_3.name, [perf_1.name])
let proj_4 = mod.AddProject("Project4", "Description 4", cust_3.name, [perf_4.name])


mod.ProjectList()


mod.EditProject("Project1", "Project222228", "Description22228")


mod.ProjectList()
mod.RemoveProject("Project3")
mod.ProjectList()


//search by customer
const CustomerProjects = mod.SearchProjectsByCustomer(cust_1.name);
console.log(`Projects for ${cust_1.name}:`);
CustomerProjects.forEach(project => console.log(project.name));


console.log()


//search by Performer
const PerformerProjects = mod.SearchProjectsByPerformer(perf_1.name);
console.log(`Projects for ${perf_1.name}:`);
PerformerProjects.forEach(project => console.log(project.name));

