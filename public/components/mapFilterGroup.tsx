import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';
import { CheckboxProps, Slider, withStyles } from "@material-ui/core";
import { useState } from "react";

const SkyBuleCheckbox = withStyles({
    root: {
      color: '#7E96B8',
      '&$checked': {
        color: '#12DCF6',
      },
    },
    checked: {},
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const MapFilterWarper = styled.div`
    flex: 1;
    margin: 40px 30px 0 0;
`;
const InputWarpper = styled.div`
    border: 1px solid #7E96B8;
    height: 50px;
    border-radius: 4px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    input{
        flex: 1;
        outline: none;
        background: none;
        border: none;
        height: 100%;
        color: #7E96B8;
    }
`;

const TypeGroup = styled.div`
    display: flex;
    flex-direction: column;
    .title{
        color: #7E96B8;
        font-size: 16px;
        margin-bottom: 6px;
    }
    div{
        display: flex;
        align-items: center;
        margin-bottom: 6px;
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

const ClassGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 42px;
    .title{
        color: #7E96B8;
        font-size: 16px;
        margin-bottom: 6px;
    }
    div{
        display: flex;
        align-items: center;
        margin-bottom: 6px;
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

const SizeGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 42px;
    .title{
        color: #7E96B8;
        font-size: 16px;
        margin-bottom: 6px;
    }
    div{
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        div{
            width: 80px;
        }
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
 
const RecentGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 42px;
    .title{
        color: #7E96B8;
        font-size: 16px;
        margin-bottom: 6px;
    }
    div{
        .sliderTitleGroup{
            position: relative;
            height: 16px;
            span{
                position: absolute;
                color: #7E96B8;
                font-size: 14px;
                &.sliderActive{
                    color: #12DCF6;
                }
            }
        }
        .MuiSlider-thumb{
            width: 20px;
            height: 20px;
            background-color: #000000;
            border: 3px solid #12DCF6;
            margin-top: -8px;
        }
        .MuiSlider-track{
            height: 4px;
        }
        .MuiSlider-root{
            color: #12DCF6; 
            height: 4px;
        }
        .MuiSlider-rail{
            color: #7E96B8;
            height: 4px;
        }
        .MuiSlider-mark{
            width: 8px;
            height: 8px;
            background-color: #12DCF6;
            border-radius: 100%;
            top: 36%;
        }
    }
`


const MapFilterGroup = () => {
    const [typeCheckBoxList,setTypeCheckBoxList] = useState([
        {
            label: 'ALL',
            checked:true
        },
        {
            label: 'For Sale',
            checked:true
        },
        {
            label: 'For Rent',
            checked:true
        }
    ]); 
    const [classCheckBoxList,setClassCheckBoxList] = useState([
        {
            label: 'ALL',
            checked:true
        },
        {
            label: 'Normal',
            checked:true
        },
        {
            label: 'Premium',
            checked:true
        }
    ]); 
    const [sizeCheckBoxList,setSizeCheckBoxList] = useState([
        {
            label: 'ALL',
            checked:true
        },
        {
            label: '1x1',
            checked:true
        },
        {
            label: '3x3',
            checked:true
        },
        {
            label: '6x6',
            checked:true
        },
        {
            label: '12x12',
            checked:true
        },
        {
            label: '24x24',
            checked:true
        }
    ]); 
    const marks = [
        {
            value: 0,
            label: '7D',
        },
        {
            value: 25,
            label: '30D',
        },
        {
            value: 50,
            label: '90D',
        },
        {
            value: 75,
            label: '180D',
        },
        {
            value: 100,
            label: 'ALL',
        },
    ];
    const [sliderValue, setSliderValue] = useState(25);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        setSliderValue(newValue as number);
    };
    return (
        <MapFilterWarper>
            <InputWarpper>
                <input type="text" placeholder="name, address, District..." />
                <img src="images/search.svg" alt="" />
            </InputWarpper>
            <TypeGroup>
                <span className="title">TYPE</span>
                {
                    typeCheckBoxList.map(item => {
                        return <div key={item.label}>
                            <SkyBuleCheckbox  checked={item.checked}/>
                            <i className={item.checked ? 'active' : ''}>{item.label}</i>
                        </div>
                    })
                }
            </TypeGroup>
            <ClassGroup>
                <span className="title">CLASS</span>
                {
                    classCheckBoxList.map(item => {
                        return <div key={item.label}>
                            <SkyBuleCheckbox  checked={item.checked}/>
                            <i className={item.checked ? 'active' : ''}>{item.label}</i>
                        </div>
                    })
                }
            </ClassGroup>
            <SizeGroup>
                <span className="title">SIZE</span>
                <div>
                    {
                        sizeCheckBoxList.slice(0,3).map(item => {
                            return <div key={item.label}>
                                <SkyBuleCheckbox checked={item.checked} />
                                <i className={item.checked ? 'active' : ''}>{item.label}</i>
                            </div>
                        })
                    }
                </div>
                <div>
                    {
                        sizeCheckBoxList.slice(3,6).map(item => {
                            return <div key={item.label}>
                                <SkyBuleCheckbox checked={item.checked} />
                                <i className={item.checked ? 'active' : ''}>{item.label}</i>
                            </div>
                        })
                    }    
                </div>    
            </SizeGroup>
            <RecentGroup>
                <span className="title">Recent Listed</span>
                <div>
                    <div className="sliderTitleGroup">
                        {
                            marks.map((item,index)=>{
                                return <span style={{left:`${item.value - (index == 0 ? 0 : 4)}%`}} className={item.value == sliderValue ? 'sliderActive' : ''}>{item.label}</span>
                            })
                        }
                    </div>
                    <Slider
                        step={null}
                        value={sliderValue}
                        valueLabelDisplay="auto"
                        marks={marks}
                        onChange={handleChange}
                    />
                </div>
            </RecentGroup>
        </MapFilterWarper>
    );
}
export default MapFilterGroup