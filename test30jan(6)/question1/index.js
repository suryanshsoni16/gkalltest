function getInputValue(){
  var inputVal = document.getElementById("myInput").value;
  var cname = inputVal.replace(' ', '+');

  var container = document.getElementById("container");
  var table = document.getElementById("table");


  var url = `http://universities.hipolabs.com/search?country=${cname}`

    fetch(url)
    .then((response) => {
        console.log("response first resolved");
        return response.json();
    })
  .then((data) => {
      console.log("response seconnd resolved");
      console.log(data);

        for(let i = 0; i < data.length; i++)
        {

            tr = document.createElement("tr");

           var td = document.createElement("td");
           var td1 = document.createElement("td");
           var td2 = document.createElement("td");
           var td3= document.createElement("td");


            td.innerText = data[i].name;
            td1.innerText = data[i].domains[0];
            td2.innerText = data[i]["state-province"];
            td3.innerText = data[i].country;

            tr.append(td,td1,td2,td3)
            table.appendChild(tr)
           
        }
  })



  .catch((error) => console.log("API has failed"))
  
  
}





