
// Initialise the cozy sdk.

   cozy.client.init();


//   return getMaifAddress(){
//     .catch(getEDFAddress);
// }

function getEDFAddress() {
   // create an index, for the Client doctype, on the vendor field.
   return cozy.client.data.defineIndex('Client', ['vendor'])
     .then(function(index) {
       // Query the cozy database, using the previous index, to found the data.
       return cozy.client.data.query(index, { selector: { vendor: 'EDF' }});
     })
     .then(function(data) {
     if (data.length === 0) {
        return Promise.reject(null);
      }
       // extract the data we need.
       return data[0].address;
    });
}

function getMaifAddress() {
  return cozy.client.data.defineIndex('Maifuser', ['_id'])
  .then(function(index) {
     return cozy.client.data.query(index, { selector: { _id: '' }});
  })
  .then(function(data) {
     if (data.length === 0) {
      return Promise.reject(null);
    }

     var address = data[0].profile.MesInfos.foyer.address;
     address.formated = address.street + '\n' + adress.postcode + ' ' + address.city;
     return address
     })
    ;
 }




$(document).ready(function() {

    var divContainer = $("#DivDomApi");

        $(this).find('> .dropdown-menu').stop(true, true).fadeOut(timerOut);
        $(this).removeClass('open');
    });

   var address = null;
   getAddress().then(function(address) {
     console.log(address);
      $('#inputChercher').val(address.formated.replace(/\n/, ' '));
   });


function getAddress() {
  // Initialise the cozy sdk.
  cozy.client.init();

  // create an index, for the Client doctype, on the vendor field.
  return cozy.client.data.defineIndex('Client', ['vendor'])
    .then(function(index) {
      // Query the cozy database, using the previous index, to found the data.
      return cozy.client.data.query(index, { selector: { vendor: 'EDF' }});
    })
   .then(function(data) {
     // extract the data we need.
     return data[0].address;
   })
   ;
}
