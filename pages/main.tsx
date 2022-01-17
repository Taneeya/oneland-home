import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Header from "../public/components/header";
import { MarketPlace } from "../public/components/marketPlace";

const MainWarpper = styled.div`
    width: 100%;
    height: 100%;
    background: url('/images/main-bg.svg') no-repeat;
    background-size: 100% 445px;
    background-color: #07090F;
	display: flex;
	flex-direction: column;
`;

const MainPage: NextPage = () => {
	const navList = [
		{
			name: "Market Place",
			path: "/",
			isCanDropDown: false
		},
		{
			name: "Landfi",
			path: "/?type=Landfi",
			isCanDropDown: true
		},
		{
			name: "Build",
			path: "/?type=Build",
			isCanDropDown: true
		},
		{
			name: "Launchpad",
			path: "/?type=Launchpad",
			isCanDropDown: false
		},
		{
			name: "Forum",
			path: "/?type=Forum",
			isCanDropDown: false
		},
		{
			name: "DAO",
			path: "/?type=DAO",
			isCanDropDown: false
		},
	];
	const [selectTab, setSelectTab] = useState(navList[0]);
    return (
        <MainWarpper>
            <Header navList={navList}  currentTab={selectTab}></Header>
			<MarketPlace></MarketPlace>
        </MainWarpper>
    );
}
export default MainPage