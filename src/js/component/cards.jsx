import React from 'react';


export class Cards extends React.Component{
    
    render(){
        return (<div className="row text-center"><div className="col-lg-3 col-md-6 mb-4"><div className="card"><img className="card-img-top" src="https://loremflickr.com/g/320/240/paris" alt=""/><div className="card-body"><h4 className="card-title">Card title</h4><p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p></div>
            <div className="card-footer"><a href="#" className="btn btn-primary">Find Out More!</a></div></div>
        </div><div className="col-lg-3 col-md-6 mb-4"> <div className="card">
            <img className="card-img-top" src="https://loremflickr.com/320/240/paris,girl/all" alt=""/><div className="card-body"><h4 className="card-title">Card title</h4><p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div className="card-footer"><a href="#" className="btn btn-primary">Find Out More!</a>
            </div></div>
        </div><div className="col-lg-3 col-md-6 mb-4"><div className="card">
            <img className="card-img-top" src="https://loremflickr.com/320/240/newyork" alt=""/>
            <div className="card-body">  <h4 className="card-title">Card title</h4><p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div className="card-footer"> <a href="#" className="btn btn-primary">Find Out More!</a>
            </div></div>
        </div><div className="col-lg-3 col-md-6 mb-4"><div className="card">
            <img className="card-img-top" src="https://loremflickr.com/320/240" alt=""/><div className="card-body"> <h4 className="card-title">Card title</h4> <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div className="card-footer"><a href="#" className="btn btn-primary">Find Out More!</a>
            </div></div>
        </div></div>
 );       
   
    }
    
}




