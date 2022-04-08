
import './Sub.css'
function SubComponet(props){

    let month = props.date.toLocaleString('en-us',{month:'long'});
    let year=props.date.getFullYear()
    let day =props.date.toLocaleString('en-us',{day:'2-digit'});


    return (
    <div className="con">
        <h1>Use of Props How to data passing from one to another component</h1>
      
      <div className='Container'>
        {props.title}</div>
<div className="row-Cont">
    <h1>{props.price}</h1>
</div>
<div className="row-1">
    <div>{month}</div>
    <div>{year}</div>
    <div>{day}</div>
</div>

    </div>)
}

export default SubComponet