import React from 'react';

const Category = ({setcategory,category}) => {
  const myInformation = (value) =>{
     setcategory(value);
  }
  return (
    // 
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom d-flex justify-content-center" style={{fontSize:"45px",position:"relative",marginBottom:"40px",top:"4rem"}}>Category</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 justify-content-center">
        <button className="col btn" style={{height:"155px", width:"350px",backgroundColor:"transparent"}} id='navitems' onClick={()=>myInformation("Science")} >
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundSize:"cover",backgroundRepeat:"no-repeat"   }}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100 p-5 pb-3 text-shadow-1">
            <h3 style={{ color: "white", fontSize: "35px", fontWeight: "500", backgroundColor: "rgb(9 9 9 / 49%)" }}>Bussiness</h3>
            </div>
            </div>
          </button>

          <button className="col btn" style={{height:"155px", width:"350px",backgroundColor:"transparent"}} id='navitems' onClick={()=>myInformation("Science")} >
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundSize:"cover",backgroundRepeat:"no-repeat"   }}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100 p-5 pb-3 text-shadow-1">
            <h3 style={{ color: "white", fontSize: "35px", fontWeight: "500", backgroundColor: "rgb(9 9 9 / 49%)" }}>Science</h3>
            </div>
            </div>
          </button>

          <button className="col btn" style={{height:"155px", width:"350px",backgroundColor:"transparent"}} id='navitems' onClick={()=>myInformation("Entertainment")} >
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" ,backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
              <div className="d-flex flex-column justify-content-center align-items-center h-100 p-5 pb-3 text-shadow-1">
              <h3 style={{ color: "white", fontSize: "35px", fontWeight: "500", backgroundColor: "rgb(9 9 9 / 49%)" }}>Entertainment</h3>
              </div>
            </div>
          </button>
          <button className="col btn" style={{height:"155px", width:"350px",backgroundColor:"transparent"}} id='navitems' onClick={()=>myInformation("Sports")} >
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" ,backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100 p-5 pb-3 text-shadow-1">
              <h3 style={{ color: "white", fontSize: "35px", fontWeight: "500", backgroundColor: "rgb(9 9 9 / 49%)" }}>Sports</h3>
              </div>
            </div>
          </button>
          <button className="col btn" style={{height:"155px", width:"350px",backgroundColor:"transparent"}} id='navitems' onClick={()=>myInformation("Technology")} >
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundSize:"cover",backgroundRepeat:"no-repeat"  }}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100 p-5 pb-3 text-shadow-1">
              <h3 style={{ color: "white", fontSize: "35px", fontWeight: "500", backgroundColor: "rgb(9 9 9 / 49%)" }}>Technology</h3>
              </div>
            </div>
          </button>
          <button className="col btn" style={{height:"155px", width:"350px",backgroundColor:"transparent"}} id='navitems' onClick={()=>myInformation("Health")} >
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundSize:"cover" ,backgroundRepeat:"no-repeat" }}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100 p-5 pb-3 text-shadow-1">
              <h3 style={{ color: "white", fontSize: "35px", fontWeight: "500", backgroundColor: "rgb(9 9 9 / 49%)" }}>Health</h3>
              </div>
            </div>
          </button>
          <button className="col btn" style={{height:"155px", width:"350px",backgroundColor:"transparent"}} id='navitems' onClick={()=>myInformation("General")} >
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id='navitems2' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561491431-71b89da6056a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundSize:"cover" ,backgroundRepeat:"no-repeat" }}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100 p-5 pb-3 text-shadow-1">
              <h3 style={{ color: "white", fontSize: "35px", fontWeight: "500", backgroundColor: "rgb(9 9 9 / 49%)" }}>General</h3>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Category;


