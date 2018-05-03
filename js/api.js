$(document).ready(function() {
    /*$.ajax({
        url: "http://rest-service.guides.spring.io/greeting",
        type: 'GET',
        crossDomain: true
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });*/
    $.ajax({
      url: "http://rest-service.guides.spring.io/greeting",
        dataType: "jsonp",
        crossDomain: true,
      success: function(data) {
        alert(data);
      }
    });
});


// // Ici, la requête sera émise de façon synchrone.
// const req = new XMLHttpRequest();
// req.open('GET', 'http://www.mozilla.org/', false);
// req.send(null);
//
// if (req.status === 200) {
//     console.log("Réponse reçue: %s", req.responseText);
// } else {
//     console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
// }
