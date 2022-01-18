import { Checkbox, CheckboxProps, withStyles } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

const SkyBuleCheckbox = withStyles({
    root: {
      color: '#7E96B8',
      '&$checked': {
        color: '#12DCF6',
      },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const MapViewWarpper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const SelectGroup = styled.div`
    display: flex;
    margin-left: 20px;
    div{
        display: flex;
        align-items: center;
        margin-right: 24px;
        margin-bottom: 24px;
        i{
            margin-left: 6px;
            font-size: 14px;
            color: #7E96B8;
            &.active{
                color: #12DCF6;
            }
        }
    }
`;

const Map = styled.div`
    flex: 1;
    background: url('images/map.svg') no-repeat;
    background-size: 100%,100%;
`;

const MapView = () => {
    const [priceOnMap, setPriceOnMap] = useState(false);
    const [heatMap, setHeatMap] = useState(false);
    return (
        <MapViewWarpper>
            <SelectGroup>
                <div>
                    <SkyBuleCheckbox checked={priceOnMap} onChange={(e)=>{
                        setPriceOnMap(e.target.checked)
                    }}/>
                    <i className={priceOnMap ? 'active' : ''}>Price on map</i>
                </div>
                <div>
                    <SkyBuleCheckbox checked={heatMap} onChange={(e)=>{
                        setHeatMap(e.target.checked)
                    }}/>
                    <i className={heatMap ? 'active' : ''}>Heat map</i>
                </div>
            </SelectGroup>
            <Map>
            </Map>
        </MapViewWarpper>
    )
}

export default MapView