<script lang="ts">
    import { setMap } from '~shared/actions/map';

    export let location: {
        latitude: number;
        longitude: number;
    };
    export let zoom: number = 17;
    export let markerMarkup: string = '';

    const { latitude, longitude } = location;
    const baseurl = import.meta.env.BASE_URL;
</script>

<figure use:setMap={{ latitude, longitude, zoom, markerMarkup, baseurl }} />

<style>
    figure {
        width: 30rem;
        max-width: 100%;
        height: 15rem;
        box-shadow: var(--shadow-elevation-low);
        margin-left: 0px;
    }
</style>
