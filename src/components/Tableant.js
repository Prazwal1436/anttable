import React, { useState } from 'react'
import Data from '../data/data.json'






export default function Tableant() {
    var idss=0;
    let NewData = Data.map((object) => {
      
      // eslint-disable-next-line
    return {
      ...object,
      id:object?.id|| idss++,
      process:object?.process || '',
      minUnit: object?.minUnit || '',
      maxUnit: object?.maxUnit || '',
      duration: object?.duration || '',
      interval: object?.interval || "second",
    };
  });
  const handleChange = e => {
    e.preventDefault();
    const { name, value,id } = e.target;
    let FinalData = NewData.map((object) => {
      if(object.id===id){
    return {
      ...object,
      [name]:object?.$[name]||value,
    }}
    else{
    return{
      object
    }}
  });
  console.log(data);  
  setData(FinalData);
  console.log(data);  
    
    
};

  const[data,setData] = useState(NewData)
    const tablemapping = data.map((object,)=>{
      return(
      <tr>
      <td>{object?.IngredientName}</td>
      <td>{object?.CategoryTitle}</td>
      <td>{object?.RecipeSubCategoryTitle}</td>
      <td>{object?.BiologicalHazardTitle}</td>
      <td className='center'><center><input type='checkbox'/></center></td>
      <td><select className='form-select'></select></td>
      <td><input type='text' name='minUnit' id={object?.id} value={object?.minUnit} className='form-control' onChange={handleChange}/></td>
      <td><input type='text' className='form-control'/></td>
      <td><input type='text' className='form-control'/></td>
      <td><select className='form-select'>
        <option>{object?.interval}</option>
        </select></td>
      <td><button type="submit" class="btn btn-primary mb-3">Analyse</button></td>
      </tr>)
    });

  return (
    <div className='m-5'><table className="table table-bordered ">
    <thead>
      <tr>
        <th scope="col">Ingredents Name</th>
        <th scope="col">Categories</th>
        <th scope="col">Sub Categories</th>
        <th scope="col">Biological Hazard</th>
        <th scope="col">Hazard Address by suppliers</th>
        <th scope="col">Process</th>
        <th scope="col">Min Unit</th>
        <th scope="col">Max Unit</th>
        <th scope="col">Duration</th>
        <th scope="col">Interval</th>
        <th scope="col">Analyze</th>
      </tr>
    </thead>
    <tbody>
      {tablemapping}
    </tbody>
  </table></div>
  )
}
