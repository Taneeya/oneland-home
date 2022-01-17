import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';
import { CheckboxProps, withStyles } from "@material-ui/core";
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
            &.i{
                color: '#12DCF6'
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
            &.i{
                color: '#12DCF6'
            }
        }
    }
`;

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
                            <i>{item.label}</i>
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
                            <i>{item.label}</i>
                        </div>
                    })
                }
            </ClassGroup>
        </MapFilterWarper>
    );
}
export default MapFilterGroup