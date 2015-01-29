exports.viewProject = function(req, res) { 
  // controller code goes here 
  var name = req.params.name; 
  console.log("The project name is: " + name);
  console.log("ASDF");
  res.render('project', {
    'projectName': name
  });
};