import SubComponet from './All_component/SubComponet'
import './app.css'

function app(){


    let ReDate = new Date(2022,1,12);
    let Retitile= 'Mobile';
    let Reprice = 12000;
    return(
        <div>
        <SubComponet 
        date= {ReDate}
        title={Retitile}
        price= {Reprice}
        ></SubComponet>
    </div>)}
export default app