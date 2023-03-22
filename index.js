const inquirer = require('inquirer')
const fs = require('fs')

const generateHTML = ({name, location, github, linkedin}) => 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is <a href="https://github.com/${github}">${github}</a></li>
        <li class="list-group-item">LinkedIn:<a href="${linkedin}">${linkedin}</a></li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your Name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Please enter your Linkedin URL.'
        }
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.error(err) : console.log("HTML file successfully generated!")
        )
    })