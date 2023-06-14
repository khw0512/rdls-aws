window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.5400456, lng: 126.9921017 },
      zoom: 10
    });
  
    const malls = [
      { label: "IFC MALL", name: "IFC몰", lat: 37.5251644, lng: 126.9255491 },
      { label: "REALDATALABS", name: "리얼데이터랩스", lat: 37.524050, lng: 126.926084}
    ];
  
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();
  
    malls.forEach(({ label, name, lat, lng }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
        map
      });
      bounds.extend(marker.position);
  
      marker.addListener("click", () => {
        map.panTo(marker.position);
        infoWindow.setContent(name);
        infoWindow.open({
          anchor: marker,
          map
        });
      });
    });
  
    map.fitBounds(bounds);
  };
  