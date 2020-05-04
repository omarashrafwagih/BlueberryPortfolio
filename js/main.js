// ---------------------------------------------------------------------------------------------------- Loading Spinner Show & Hide
let spinner = document.getElementById('spinner');
window.addEventListener('load', function () {
  spinner.style.display = 'none';
  document.body.style.overflowY = 'auto';
});

// Navbar AutoClose After Link Click
const navlinks = document.getElementsByClassName('nav-link');
const navbarSupportedContent = document.getElementById(
  'navbarSupportedContent'
);

for (var i = 0; i < 6; i++) {
  navlinks[i].addEventListener('click', function () {
    navbarSupportedContent.classList.remove('show');
  });
}

// ---------------------------------------------------------------------------------------------------- Laxxx Js
window.onload = function () {
  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

// ---------------------------------------------------------------------------------------------------- Custom Scroll
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  var progresswidth = (window.pageYOffset / totalHeight) * 100;
  progress.style.width = progresswidth + '%';
};

// ---------------------------------------------------------------------------------------------------- Get Date into Footer

let datey = document.getElementById('datey');
let datenow = new Date();
datey.innerHTML = datenow.getFullYear();

// ---------------------------------------------------------------------------------------------------- Dark and Light Versions

let light = document.getElementById('light');
let dark = document.getElementById('dark');
let wave = document.getElementById('wave');

light.addEventListener('click', function () {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  light.style.display = 'none';
  dark.style.display = 'inline';
  wave.style.fill = 'white';
});

dark.addEventListener('click', function () {
  document.body.style.backgroundColor = '#282c33';
  document.body.style.color = 'white';
  light.style.display = 'inline';
  dark.style.display = 'none';
  wave.style.fill = '#282c33';
});

// ---------------------------------------------------------------------------------------------------- Google Maps Restyling

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(24.6787261, 46.7296562), // Riyadh

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: 36,
          },
          {
            color: '#000000',
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#000000',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#8a00ff',
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8a00ff',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#8a00ff',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8a00ff',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
          {
            saturation: '-100',
          },
          {
            lightness: '30',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#8a00ff',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8a00ff',
          },
        ],
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
          {
            gamma: '0.00',
          },
          {
            lightness: '74',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [
          {
            lightness: '3',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000',
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(24.6787261, 46.7296562),
    map: map,
    title: 'Snazzy!',
  });
}
