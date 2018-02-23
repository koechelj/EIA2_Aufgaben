namespace Aufgabe13 {
    window.addEventListener("load", init);
    

    function init(_event: Event): void {
        console.log("Init");
        
        //insert fügt ein Dokument in die Collection ein
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");  //insert fügt ein Dokument in die Collection ein
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
     //   searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=find";  //find findet alle Daten, die mit dem AbfrageQuery übereinstimmen
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        //xhr.open("GET", "http://localhost:8100?" + _query, true);
        xhr.open("GET", "https://eia2-servertest-koechelj.herokuapp.com/?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
    
   // function search(event): void {
      //  sendRequest("command=find", handleSearchResponse);
    //}
   // function handleSearchResponse(event) {
     //   var xhr = _event.target;
      //  if (xhr.readyState == XMLHttpRequest.DONE) {
       //     var responseAsJson = JSON.parse(xhr.response);
        //    array = JSON.parse(xhr.response);
          //  console.log(responseAsJson);
       // }
      //  var matInput = document.getElementById("matrikelsearch");
      //  var mat = matInput.value;
      //  for (var i = 0; i < array.length; i++) {
       //     console.log("Stelle " + i + array[i]);
      //  }  
//}
    
    }