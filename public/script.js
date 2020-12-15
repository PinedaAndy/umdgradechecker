
//Print the class grade results 
function runThisWithResultsFromServer(jsonFromServer) {
  console.log('jsonFromServer', jsonFromServer);
  $("div#main_table").show();

  //Remove old welcome notifcation 
  document.getElementById("introMessage").outerHTML = "";

  //Get Table Element
  const tableElement = document.getElementById('myTable');

  //Loop through each value and create a table out of it 
  for (let i = 0; i < jsonFromServer.length; i += 1){
    
    //Add each value into it's assigned column
    const newRow = `<tr>   <td>${jsonFromServer[i].semester.substring(0, jsonFromServer[i].semester.length - 2)}</td> <td>${jsonFromServer[i].professor}</td>   <td>${jsonFromServer[i].course}</td>   <td>${jsonFromServer[i].section}</td>   <td>${jsonFromServer[i]['A+']}</td>   <td>${jsonFromServer[i].A}</td>   <td>${jsonFromServer[i]["A-"]}</td>   <td>${jsonFromServer[i]["B+"]}</td>   <td>${jsonFromServer[i].B}</td>   <td>${jsonFromServer[i]["B-"]}</td>   <td>${jsonFromServer[i]["C+"]}</td>   <td>${jsonFromServer[i].C}</td>   <td>${jsonFromServer[i]["C-"]}</td>   <td>${jsonFromServer[i]["D+"]}</td>   <td>${jsonFromServer[i].D}</td>   <td>${jsonFromServer[i]["D-"]}</td>   <td>${jsonFromServer[i].F}</td>   <td>${jsonFromServer[i].Other}</td>   <td>${jsonFromServer[i].W}</td>   </tr>`;
    
    //Load the table row into the table 
    tableElement.innerHTML += newRow
    
  }

}



// Leave lines 52-67 alone; do your work in the functions above
document.body.addEventListener('submit', async (e) => {

  //Get the course name 
  //const courseName = document.getElementById('course_name').value; 


  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});



