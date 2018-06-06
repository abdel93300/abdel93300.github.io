$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/acronyms",
          crossDomain : true,
          type: "GET"
    }).then(function(data) {
       $('.acronym-name').append(data[0].name);
       $('.acronym-summary').append(data[0].description.shortD);
       $('.acronym-definition').append(data[0].description.longD);
       $('.acronym-creation').append(data[0].creation);
       $('.acronym-author').append(data[0].author);
       $('.acronym-obsolete').append(data[0].obsolete);
       $('.acronym-motCle1').append(data[0].motClefs[0]);
       $('.acronym-motCle2').append(data[0].motClefs[1]);
       $('.acronym-motCle3').append(data[0].motClefs[2]);
    });
});
