import styled from "styled-components";
import MapItem from "./mapItem";

const MapListViewWapper = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 80px);
    padding: 0 50px 0 20px;
    .sort{
        display: flex;
        justify-content: flex-end;
        span{
            color: #7E96B8;   
            font-size: 16px;
            &.sortType{
                color: #03FCF7;
            }
        }
    }
    .listData{
        flex: 1;
        overflow: hidden;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        margin-top: 18px;
        > div{
            margin: 0 45px 45px 0;
        }
    }
`;

const ScrollBox = styled.div`
    overflow: hidden;
    height: calc(100% - 18px);
    overflow-y: auto;  
`;


const MapListView = () => {
    return (
        <MapListViewWapper>
            <div className="sort">
                <span>sorting : </span>
                <span className="sortType">Price</span>
            </div>
            <ScrollBox>
                <div className="listData">
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                    <MapItem></MapItem>
                </div>
            </ScrollBox>
        </MapListViewWapper>
    )
}

export default MapListView