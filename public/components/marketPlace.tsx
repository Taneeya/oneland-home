import { useState } from "react";
import styled from "styled-components"
import MapFilterGroup from "./mapFilterGroup";
import MapListView from "./mapListView";
import MapView from "./mapView";
import OverView from "./overView";
import { SandBoxInfo } from "./sandBoxInfo";


const MarketWapper = styled.div`
    display: flex;
	height: calc(100% - 76px);
`;
const LeftWapper = styled.div`
    width: 368px;
    padding-left: 50px;
    padding-top: 60px;
	display: flex;
	flex-direction: column;
`;
const LeftProjectInfo = styled.div`
    display: flex;
    align-items: center;
    span{
        color: #7E96B8;
        font-size: 18px;
        margin-right: 22px;
    }
    div{
        display: flex;
        align-items: center;
        span{
            color: white;
            font-weight: 600;
            font-size: 18px;
            padding: 0 33px 0 8px;        
        }
    }
`;
const RightWapper = styled.div`
	flex: 1;
	background: #131823;
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
	display: flex;
	flex-direction: column;
`;

const TabWapper = styled.div`
	
`;
const TabList = styled.div`
	height: 80px;
	display: flex;
  	align-items: center;
  	justify-content: center;
	cursor: pointer;
	div{
		color: #7E96B8;
		font-size: 16px;
		font-weight: 500;
		display: flex;
  		align-items: center;
		margin-right: 50px;
		position: relative;
		img{
			margin-right: 8px;
		}
		&.active{
			font-weight: bold;
			color: #12DCF6;
			&::after{
				content: " ";
				display: flex;
				width: 20px;
				height: 2px;
				background: #12DCF6;
				position: absolute;
				bottom: -10px;
				left: calc(50% - 10px);
			}
		}
	}
`;

export const MarketPlace: React.FC = () => {
	const selectTabList = [
		{
			key: 'overView',
			name: 'Overview',
			icon: 'images/overview.svg',
			hoverIcon: 'images/overview-hover.svg'
		},
		{
			key: 'mapView',
			name: 'Map view',
			icon: 'images/mapview.svg',
			hoverIcon: 'images/mapview-hover.svg'
		},
		{
			key: 'listView',
			name: 'List view',
			icon: 'images/listview.svg',
			hoverIcon: 'images/listview-hover.svg'
		}
	];
	const [selectkey, setSelectKey] = useState(selectTabList[0].key);
	return (
		<MarketWapper>
			<LeftWapper>
				<LeftProjectInfo>
					<span>Project</span>
					<div>
						<img src="images/sandBox.svg" alt="" />
						<span>The SandBox</span>
						<img src="images/arrow-down.svg" alt="" />
					</div>
				</LeftProjectInfo>
				{
					selectkey == 'overView' && <SandBoxInfo></SandBoxInfo>
				}
				{
					(selectkey == 'mapView' || selectkey == 'listView') && <MapFilterGroup></MapFilterGroup>
				}
			</LeftWapper>
			<RightWapper>
				<TabWapper>
					<TabList>
						{
							selectTabList.map(item => (
								<div key={item.key} className={item.key == selectkey ? 'active' : ''} onClick={() => {
									if (item.key != selectkey) {
										setSelectKey(item.key);
									}
								}}>
									<img src={item.key == selectkey ? item.hoverIcon : item.icon} alt="" />{item.name}
								</div>
							))
						}
					</TabList>
				</TabWapper>
				{
					selectkey == 'overView' && <OverView></OverView>
				}
				{
					selectkey == 'mapView' && <MapView></MapView>
				}
				{
					selectkey == 'listView' && <MapListView></MapListView>
				}
			</RightWapper>
		</MarketWapper>
	);
}