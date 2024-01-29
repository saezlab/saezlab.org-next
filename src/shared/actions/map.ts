export function setMap(
    mapElement: HTMLElement,
    {
        latitude,
        longitude,
        zoom,
        markerMarkup = '',
    }: { latitude: number; longitude: number; zoom: number; markerMarkup?: string },
    ) {
    (async () => {
        const {
            icon: leafletIcon,
            map: leafletMap,
            marker: leafletMarker,
            tileLayer,
            LatLng
        } = await import('leaflet');

        const markerIcon = leafletIcon({
            iconUrl: '/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [10, 41],
            popupAnchor: [2, -40],
            iconRetinaUrl: '/marker-icon-2x.png',
            shadowUrl: '/marker-shadow.png',
        });

        const map = leafletMap(mapElement).setView([latitude, longitude], zoom);
        tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                attribution:
                    'Map data &copy; <a href="https://openstreetmap.org/">\
                    OpenStreetMap</a> contributors, <a \
                    href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
                detectRetina: true,
            },
        ).addTo(map);


        if (markerMarkup !== '') {
            markerMarkup = `${markerMarkup}<a
                href="https://www.openstreetmap.org/#map=19/${latitude}/${longitude}"
                target="_blank">Open map</a>`;
            leafletMarker([latitude, longitude], { icon: markerIcon }).
                bindPopup(markerMarkup).addTo(map).openPopup();
        } else {
            leafletMarker([latitude, longitude], { icon: markerIcon }).addTo(map);
        }
    })();
}
