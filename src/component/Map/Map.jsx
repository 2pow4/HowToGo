import React from "react";
import ReactMapGL, {NavigationControl} from "react-map-gl"

const TOKEN = "pk.eyJ1IjoieXVqZW9uZzIiLCJhIjoiY2swamRhMDNjMDlvNTNkbmoycjZudWRtdiJ9.kihZ3dv0cUG6FuvlPCw3qQ"
const MAP_STYLE = 'mapbox://styles/yujeong2/ck1amg72r0r981cpa7g8wqj72'


class Map extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            viewport: {
                width: 500,
                height: 550,
                latitude: 36.1824,
                longitude: 127.6,
                zoom: 5.6
            },
            srcPos: {
                srcLng: 126.9783,
                srcLat: 37.5667
            },
            destPos: {
                destLng: 129.0756,
                destLat: 35.1784
            }
        }
    }
    
    componentDidMount(){
        const map = this.reactMap.getMap();
        map.on('load', () => {

            map.addLayer({
                "id": "route",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [
                                [this.state.srcPos.srcLng, this.state.srcPos.srcLat],
                                [this.state.destPos.destLng, this.state.destPos.destLat]
                            ]
                        }
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#9d8ae0",
                    "line-width": 5
                }
            })

            map.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [this.state.srcPos.srcLng, this.state.srcPos.srcLat],
                        },
                        "properties": {
                            "title": "Seoul",
                        }   
                    }, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                        "coordinates": [this.state.destPos.destLng, this.state.destPos.destLat],
                        },
                        "properties": {
                            "title": "Busan",
                        }
                    }]
                    }
                    },
                    "layout": {
                        "text-field": "{title}",
                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                        "text-offset": [0, -0.4],
                        "text-anchor": "top",
                        "text-size": 18,
                    },
                    "paint": {
                        "text-halo-color": "rgba(255,255,255,0.8)",
                        "text-halo-width": 1.8
                    }
            });
        })
    }

    render(){
        const {viewport} = this.state;

        return(
            <div className='map'> 
                <ReactMapGL
                    width={500}
                    height={550}
                    ref={(reactMap) => this.reactMap = reactMap} 
                    {...viewport}
                    mapboxApiAccessToken={TOKEN}
                    onViewportChange={newViewport => {
                        this.setState({viewport: newViewport}) }}
                    mapStyle={MAP_STYLE}
                >
                    <div style={{position: 'absolute', left: 5, bottom: 33}}>
                        <NavigationControl />
                    </div>
                </ReactMapGL>
            </div>
        )
    }
}

export default Map;