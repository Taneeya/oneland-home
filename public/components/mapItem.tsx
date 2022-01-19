import styled from "styled-components";

const MapItemWarpper = styled.div<{ height?: string, width?: string }>`
    height: ${({ height }) => height || '308px'};
    height: ${({ height }) => height || '421px'};
    border-radius: 16px;
    border: 2px solid #574D79;
    filter: drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.1));
    padding: 20px;
    display: flex;
    flex-direction: column;
    .titleBox{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        margin-top: 12px;
        color: #7E96B8;
        .left{
            color: #FFFFFF;
            font-size: 18px;
            .coordinate{
                font-size: 14px;
                color: #7E96B8;
            }
        }
    }
    .address{
        color:rgba(18, 220, 246, 1)
    }
    .contribute{
        height: 64;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin:10px 0;
        div{
            display: flex;
            justify-content: space-between;
            .name{
                color: #7E96B8;
            }
            .value{
                color: white;
            }
        }
    }
    .price{
        display: flex;
        justify-content: space-between;
        .price-name{
            color: #7E96B8;
        }
        .price-value{
            color: #F33ABF;
            font-weight: bold;
        }
    }
`;
interface IPorps{
    width?: string;
    height?: string
}
const MapItem = (props:IPorps) => {
    const {width, height} = props;
    return (
        <MapItemWarpper width={width} height={height}>
            <img src="images/temp-map-bg.svg" alt="" />
            <div className="titleBox">
                <div className="left">
                    <span>#Land</span>
                    <span className="coordinate">(-46,-110)</span>
                </div>
                <div>@Disctrict 1</div>
            </div>
            <div className="address">
                @0xb7e390707864a....f98a707afe423f
            </div>
            <div className="contribute">
                <div>
                    <span className="name">Size</span>
                    <span className="value">1x1</span>
                </div>
                <div>
                    <span className="name">Heat</span>
                    <span className="value">62%</span>
                </div>
                <div>
                    <span className="name">value index</span>
                    <span className="value">9</span>
                </div>
            </div>
            <div className="price">
                <span className="price-name">Current Price</span>
                <span className="price-value">3.5 ETH</span>
            </div>
        </MapItemWarpper>
    )
}
export default MapItem