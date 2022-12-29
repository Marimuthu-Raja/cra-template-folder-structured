import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const PageLoader = () => {
  return (
    <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <MoonLoader
            color={'red'}
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
  )
};

export default PageLoader;
