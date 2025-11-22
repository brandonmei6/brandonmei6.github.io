(function () {
  'use strict';

  var alertText = 'If you have questions, contact me at:\n @bmei6@cps.edu';

  function initQuestionsButton() {
    var btns = document.querySelectorAll('#questionsBtn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        alert(alertText);
      });
    });
  }

  function initMapImpl() {
    var canvas = document.getElementById('canvas');
    if (!canvas) {
      return;
    }

    var center = { lat: 37.7749, lng: -122.4194 };

    var map = new google.maps.Map(canvas, {
      center: center,
      zoom: 12,
      mapTypeId: 'satellite',
      gestureHandling: 'auto'
    });

    var marker = new google.maps.Marker({
      position: center,
      map: map,
      title: 'My Location',
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 5,
        fillColor: '#49689c',
        fillOpacity: 1,
        strokeWeight: 1,
        strokeColor: '#ffffff'
      }
    });

    var infoWindow = new google.maps.InfoWindow({
      content: '<div style="color:#000;"><strong>My Location</strong><br/>This is San Francisco</div>'
    });

    marker.addListener('click', function () {
      infoWindow.open(map, marker);
    });

    var circle = new google.maps.Circle({
      strokeColor: '#49689c',
      strokeOpacity: 0.6,
      strokeWeight: 2,
      fillColor: '#49689c',
      fillOpacity: 0.12,
      map: map,
      center: center,
      radius: 2500 
    });

    function createMapTypeToggleControl(map) {
      var controlDiv = document.createElement('div');
      controlDiv.style.margin = '8px';

      var controlUI = document.createElement('button');
      controlUI.style.background = '#fff';
      controlUI.style.border = 'none';
      controlUI.style.borderRadius = '4px';
      controlUI.style.padding = '8px 10px';
      controlUI.style.cursor = 'pointer';
      controlUI.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
      controlUI.textContent = 'Toggle Map Type';
      controlDiv.appendChild(controlUI);

      controlUI.addEventListener('click', function () {
        var current = map.getMapTypeId();
        if (current === 'satellite') {
          map.setMapTypeId('roadmap');
        } else {
          map.setMapTypeId('satellite');
        }
      });

      map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);
    }

    createMapTypeToggleControl(map);

    var clickInfo = new google.maps.InfoWindow();
    map.addListener('click', function (e) {
      var latLng = e.latLng;
      clickInfo.setContent('Lat: ' + latLng.lat().toFixed(5) + '<br/>Lng: ' + latLng.lng().toFixed(5));
      clickInfo.setPosition(latLng);
      clickInfo.open(map);
    });
  }

  window.initMap = function () {
    try {
      initMapImpl();
    } catch (err) {
      console.error('initMap error:', err);
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    try {
      initQuestionsButton();
    } catch (err) {
      console.error('Questions button init error:', err);
    }
  });
})();