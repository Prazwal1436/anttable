import React, { useState } from 'react'
import Data from '../data/data.json'






export default function Tableant() {
    let forId=0;
    let NewData = Data.map((el) => {
      
      // eslint-disable-next-line
    return {
      ...el,
      id:el?.id|| forId++,
      process:el?.process || '',
      minUnit: el?.minUnit || '',
      maxUnit: el?.maxUnit || '',
      duration: el?.duration || '',
      interval: el?.interval || "second",
    };
  });

  const[data,setData] = useState(NewData);
  const[drop, setDrop]= useState([]);
  const [dropvalue,setDropvalue]=useState("");


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value , id } = e.target;
  console.log(data);  
  setData(data.map((el) => {
    if(el.id==id){
  return {
    ...el,
    [name]:value,
  }}
  else{
  return{
    ...el
  }}
}));   
};

const handleadd = (e,index) => {
  e.preventDefault();
  let obj = data[index];
  const updatedata= [...data];
  updatedata.splice(index+1,0,obj);
  console.log(updatedata);
  setData(updatedata);
};
const handleDrop = (e)=>{

  setDropvalue(e.target.value);
}
const handleDropAdd = (e)=>{
  e.preventDefault();
    setDrop([...drop, dropvalue]);
    console.log(drop);
    setDropvalue("");
  
}
const handleDelete=(e,index)=>{
  e.preventDefault();
  const updatedArray = data.filter((el, i) => i !== index);
 setData(updatedArray);
}


const dropmapping = drop.map((el)=>{
  return(
    <option>{el}</option>
  )
})

    const tablemapping = data.map((el , index )=>{
      let ingredents = el.IngredientName;
      let categories =el.CategoryTitle;
      let subcatagories = el.RecipeSubCategoryTitle;
      let deleteRow =false;
      if(index>=1){
        let ind = [index]-1;
      if(data[ind].id==el.id){
          deleteRow=true;
      }
      if(el?.CategoryTitle===data[ind].CategoryTitle){
        categories = null;
      }
      if(el?.IngredientName===data[ind].IngredientName){
        ingredents=null;
      }
      if(el?.RecipeSubCategoryTitle===data[ind].RecipeSubCategoryTitle){
        subcatagories= null;
      }

    }
      return(
      <tr key={el?.id}>      <td>{ingredents}</td>
      <td>{categories}</td>
      <td>{subcatagories}</td>
      <td>{el?.BiologicalHazardTitle}</td>
      <td className='center'><input type='checkbox'/></td>
      <td className='m-1 row'><select className='col form-select'>
        {dropmapping}
        </select> <li className="nav nav-item dropdown col">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li className='row m-1 '><input type='text ' className='col form-control m-1' value={dropvalue} onChange={handleDrop}/><button className='col btn btn-primary m-1' onClick={handleDropAdd}>add</button></li>
          </ul>
        </li></td>
      <td><input type='text' name='minUnit' id={el?.id} value={el?.minUnit} className='form-control' onChange={ handleChange}/></td>
      <td><input type='text' className='form-control' name='maxUnit' id={el?.id} value={el?.maxUnit}  onChange={handleChange}/></td>
      <td><input type='number' className='form-control' name='duration' id={el?.id} value={el?.duration} onChange={handleChange}/></td>
      <td><select className='form-select'>
        <option>{el?.interval}</option>
        </select></td>
      <td><button type="submit" className="btn btn-primary m-1">Analyse</button></td>
      <td><button type="submit" className="btn btn-primary " onClick={(e)=>handleadd(e, index)}>Add</button>
      {deleteRow?<><button className=' btn btn-danger ms-1' onClick={(e)=>handleDelete(e, index,el)}>delete</button></>:null}
      </td>
      </tr>)
      
    });

  return (
    <div className='m-5'><table className="table table-bordered center ">
    <thead>
      <tr>
        <th scope="col" className='col-1'>Ingredents Name</th>
        <th scope="col" className='col-1'>Categories</th>
        <th scope="col" className='col-1'>Sub Categories</th>
        <th scope="col" className='col-1'>Biological Hazard</th>
        <th scope="col" className='col-1'>Hazard Address by suppliers</th>
        <th scope="col" className='col-1'>Process</th>
        <th scope="col" className='col-1'>Min Unit</th>
        <th scope="col" className='col-1'>Max Unit</th>
        <th scope="col" className='col-1'>Duration</th>
        <th scope="col" className='col-1'>Interval</th>
        <th scope="col" className='col-1'>Analyze</th>
      </tr>
    </thead>
    <tbody>
      {tablemapping}
    </tbody>
  </table></div>
  )
}
