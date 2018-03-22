$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    console.log(parsedData, 'parseddata');

    pricefucntion(parsedData);
    var price = median(pricegroup);

    sqftfunction(parsedData);
    var size = median(sizegroup);

    bedfunction(parsedData);
    var beds = median(bedgroup);

    map1 = function(){
      $(".price").text(price);
      $(".size").text(size);
      $(".beds").text(beds);
      map.setView([40.000, -75.1190],12);
      _.each(parsedData.features,function(point){
        var color;
        switch (point.properties.beds) {
          case 1: color = 'green';
          break;
          case 2: color = 'red';
          break;
          case 3: color ='blue';
          break;
          default : color ='yellow';
        }

        var pathOpts = {'radius': Math.log(point.properties.prices)/3,
                        'fillColor': color, 'color':'grey', opacity: 0.9};
                        // create popup contents
       var customPopup = _.template("Property Detail<br> Address: <%= address %> <br> Prices: $<%= prices %> <br> Size: <%= size %>sqft" );

                  // specify popup options
        var customOptions =
                      {
                      'maxWidth': '400',
                      'width': '200',
                      'className' : 'custom-popup'
                    };
        mypoint = L.circleMarker([point.geometry.coordinates[1],point.geometry.coordinates[0]],pathOpts).bindPopup(customPopup({address:point.properties.address, prices:point.properties.prices, size:point.properties.sqft}),customOptions).addTo(pointGroup);
      });
      map.addLayer(pointGroup);
      //console.log(pointGroup, 'pointgroup');

    };
    map1();

    map2 = function(){
      resetMap();
      map.setView([39.952417, -75.163615],13);
      //console.log(pointGroup);
      _.each(parsedData.features,function(point){
        var color = 'green';
        var pathOpts = {'radius': Math.log(point.properties.prices)/3,
                        'fillColor': color, 'color':'grey', opacity: 0.9};
                        // create popup contents
       var customPopup = _.template("Property Detail<br> Address: <%= address %> <br> Prices: $<%= prices %> <br> Size: <%= size %>sqft" );

                  // specify popup options
        var customOptions =
                      {
                      'maxWidth': '400',
                      'width': '200',
                      'className' : 'custom-popup'
                    };
         if(point.properties.beds == 1){
            mypoint = L.circleMarker([point.geometry.coordinates[1],point.geometry.coordinates[0]],pathOpts).bindPopup(customPopup({address:point.properties.address, prices:point.properties.prices, size:point.properties.sqft}),customOptions).addTo(pointGroup);
         }
      });
      map.addLayer(pointGroup);
    };

    map3 = function(){
      resetMap();
      map.setView([40.000, -75.1190],12);
      //console.log(pointGroup);
      _.each(parsedData.features,function(point){
        var color = 'purple';
        var pathOpts = {'radius': Math.log(point.properties.prices)/3,
                        'fillColor': color, 'color':'grey', opacity: 0.9};
                        // create popup contents
       var customPopup = _.template("Property Detail<br> Address: <%= address %> <br> Prices: $<%= prices %> <br> Size: <%= size %>sqft" );

                  // specify popup options
        var customOptions =
                      {
                      'maxWidth': '400',
                      'width': '200',
                      'className' : 'custom-popup'
                    };
         if(point.properties.prices >= 500000){
            mypoint = L.circleMarker([point.geometry.coordinates[1],point.geometry.coordinates[0]],pathOpts).bindPopup(customPopup({address:point.properties.address, prices:point.properties.prices, size:point.properties.sqft}),customOptions).addTo(pointGroup);
         }
      });
      map.addLayer(pointGroup);
    };

    map4 = function(){
      resetMap();
      map.setView([40.000, -75.1190],12);
      //console.log(pointGroup);
      _.each(parsedData.features,function(point){
        var color = 'pink';
        var pathOpts = {'radius': Math.log(point.properties.prices)/3,
                        'fillColor': color, 'color':'grey', opacity: 0.9};
                        // create popup contents
       var customPopup = _.template("Property Detail<br> Address: <%= address %> <br> Prices: $<%= prices %> <br> Size: <%= size %>sqft" );

                  // specify popup options
        var customOptions =
                      {
                      'maxWidth': '400',
                      'width': '200',
                      'className' : 'custom-popup'
                    };
         if(point.properties.sqft >= 2000){
            mypoint = L.circleMarker([point.geometry.coordinates[1],point.geometry.coordinates[0]],pathOpts).bindPopup(customPopup({address:point.properties.address, prices:point.properties.prices, size:point.properties.sqft}),customOptions).addTo(pointGroup);
         }
      });
      map.addLayer(pointGroup);
    };

    map5 = function(){
      resetMap();
      map.setView([39.958203, -75.218990],14);
      _.each(parsedData.features,function(point){
        var color = 'green';
        switch (point.properties.beds) {
          case 1: color = 'green';
          break;
          case 2: color = 'red';
          break;
          case 3: color ='blue';
          break;
          default : color ='yellow';
        }

        var pathOpts = {'radius': Math.log(point.properties.prices)/3,
                        'fillColor': color, 'color':'grey', opacity: 0.9};
                        // create popup contents
       var customPopup = _.template("Property Detail<br> Address: <%= address %> <br> Prices: $<%= prices %> <br> Size: <%= size %>sqft" );

                  // specify popup options
        var customOptions =
                      {
                      'maxWidth': '400',
                      'width': '200',
                      'className' : 'custom-popup'
                    };
        mypoint = L.circleMarker([point.geometry.coordinates[1],point.geometry.coordinates[0]],pathOpts).bindPopup(customPopup({address:point.properties.address, prices:point.properties.prices, size:point.properties.sqft}),customOptions).addTo(pointGroup);
      });
      map.addLayer(pointGroup);
      //console.log(pointGroup, 'pointgroup');

    };

    map6 = function(){
      resetMap();
      map.setView([40.000, -75.1190],12);
      _.each(parsedData.features,function(point){
        var color = 'green';
        switch (point.properties.beds) {
          case 1: color = 'green';
          break;
          case 2: color = 'red';
          break;
          case 3: color ='blue';
          break;
          default : color ='yellow';
        }

        var pathOpts = {'radius': Math.log(point.properties.prices)/3,
                        'fillColor': color, 'color':'grey', opacity: 0.9};
                        // create popup contents
       var customPopup = _.template("Property Detail<br> Address: <%= address %> <br> Prices: $<%= prices %> <br> Size: <%= size %>sqft" );

                  // specify popup options
        var customOptions =
                      {
                      'maxWidth': '400',
                      'width': '200',
                      'className' : 'custom-popup'
                    };
        mypoint = L.circleMarker([point.geometry.coordinates[1],point.geometry.coordinates[0]],pathOpts).bindPopup(customPopup({address:point.properties.address, prices:point.properties.prices, size:point.properties.sqft}),customOptions).addTo(pointGroup);
      });
      map.addLayer(pointGroup);
      //console.log(pointGroup, 'pointgroup');

    };
    nextButton.click(function() {
      pagenumber++;
      if(pagenumber>=6){pagenumber=6;}
      switch (pagenumber) {
        case 1:
        $('#page1').show();
        break;
        case 2:
        $('#page1').hide();
        $('#previous').show();
        $('.legend').hide();
        map2();
        $('#page2').show();
        break;
        case 3:
        $('#page2').hide();
        map3();
        $('#page3').show();
        break;
        case 4:
        $('#page3').hide();
        map4();
        $('#page4').show();
        break;
        case 5:
        $('#page4').hide();
        map5();
        $('.legend').show();
        $('#page5').show();
        break;
        case 6:
        $('#page5').hide();
        $('#next').hide();
        map6();
        $('#page6').show();
        break;
      }
    });

    previousButton.click(function() {
      pagenumber--;
      if(pagenumber<=1){pagenumber=1;}
      switch (pagenumber) {
        case 1:
        $('#page2').hide();
        $('#previous').hide();
        map1();
        $('.legend').show();
        $('#page1').show();
        break;
        case 2:
        $('#page3').hide();
        $('#previous').show();
        map2();
        $('#page2').show();
        break;
        case 3:
        $('#page4').hide();
        map3();
        $('#page3').show();
        break;
        case 4:
        $('#page5').hide();
        map4();
        $('.legend').hide();
        $('#page4').show();
        break;
        case 5:
        $('#page6').hide();
        $('#next').show();
        map5();
        $('#page5').show();
        break;
      }
    });

    // use the latlng property of ev, and call google api afterwards
/*    map.on('click', function(ev) {
      console.log(ev,'ev');
    });
    */
  });
});
