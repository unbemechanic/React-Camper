import React from 'react'
import { campcar } from '../data/mockdata'
import { useParams } from 'react-router-dom';
import { Backgrounds, Seperated } from '../../style';

const DocumentsComponent = () => {
    const data = campcar.maindata;
    let {id} = useParams();
    const separatedData = data.filter((value)=> value.id === parseInt(id));
    console.log(separatedData)
  return (
    <div style={{backgroundColor:'#fafafa'}}>
        {separatedData.map((value)=>{
            return <Seperated key={value.id}>
              <Backgrounds>
                <img src={value.car.photo} alt='car'/>
                <button>Purchase price {value.car.cost}W</button>
              </Backgrounds>
                
            </Seperated>
        })}
    </div>
  )
}

export default DocumentsComponent