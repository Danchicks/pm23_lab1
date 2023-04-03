const project = require("./project")
const customer = require("./customer")
const performer = require("./performer")


exports.AddProject = project.AddProject
exports.ProjectList = project.ProjectsList
exports.RemoveProject = project.RemoveProject
exports.EditProject = project.EditProject
exports.SearchProjectsByCustomer = project.SearchProjectsByCustomer
exports.SearchProjectsByPerformer = project.SearchProjectsByPerformer


exports.RemoveCustomer = customer.RemoveCustomer
exports.EditCustomer = customer.EditCustomer
exports.AddCustomer = customer.AddCustomer
exports.SearchCustomer = customer.SearchCustomer
exports.CustomerList = customer.CustomerList


exports.RemovePerformer = performer.RemovePerformer
exports.EditPerformer = performer.EditPerformer
exports.AddPerformer = performer.AddPerformer
exports.SearchPerformer = performer.SearchPerformer
exports.PerformerList = performer.PerformerList
