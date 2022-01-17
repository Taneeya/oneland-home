import { ReactElement } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 100%;
    height: 76px;
    padding: 0  50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLeft = styled.div`
    display: flex;
    img{
        width: 38px;
        height: 38px;
		margin-right: 10px;
    }
	span{
	color: #FFFFFF;
    font-size: 24px;   
      span{
        font-size: 20px;
        color: #7E96B8;
      }
    }
`;

const HeaderRight = styled.div`
    display: flex;
		align-items: center;
`;

const NavList = styled.div`
	display: flex;
	div{
		font-size: 16px;
		font-weight: 500;
		color: #7E96B8;
		margin-right: 24px;
		&.active{
			color: white;
		}
	}
`;

const ConnectWallet = styled.div`
	width: 160px;
	height: 38px;
	border-radius: 8px;
	line-height: 38px;
	text-align: center;
	background-color: rgba(18, 220, 246, 0.15);
	color: white;
`;

interface INavItem {
	name: string;
	path: string;
	isCanDropDown: boolean;
}
interface IProps {
	navList: INavItem[],
	currentTab: INavItem
}

export default function Header(props: IProps): ReactElement {
	const { navList, currentTab } = props;
	return (
		<HeaderWrapper>
			<HeaderLeft>
				<img src="images/logo.svg" alt="" />
				<span>ONELAND<span>.finance</span> </span>
			</HeaderLeft>
			<HeaderRight>
				<NavList>
					{
						navList.map((item: INavItem) => (
							<div key={item.name} className={item.name == currentTab.name ? 'active' : ''} >
								{item.name} {item.isCanDropDown && <img src="images/arrow-down.svg" alt="" />}
							</div>
						))
					}
				</NavList>
				<ConnectWallet>Connect Wallet</ConnectWallet>
			</HeaderRight>
		</HeaderWrapper>
	);
}
