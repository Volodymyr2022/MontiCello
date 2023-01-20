
function initMap() {
    const uluru = { lat: 52.65021496053638, lng: -7.25136715996576 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: uluru,
        mapTypeId: "hybrid",
        
    });
    const img = './img/Pin.png';
    const castle = { lat: 52.65047782953893, lng: -7.249295230124797 };
    const marker = new google.maps.Marker({
        position: castle,
        map: map,
        icon: img,
        opacity: 0.5,
        width: '10px',
    });
}

window.initMap = initMap;
