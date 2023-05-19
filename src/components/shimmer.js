const Shimmer = () => {
    return (
        <>
        <div><h3><center>Looking for great food near you...</center></h3></div>
        <div className="loading blink">
              {Array(15)
                .fill()
                .map((_, id) => (
                    <>
                    <div class="load-card">
                        <div className="card-loader">
                            <div class="img_placeholder placeholder">
                            </div>
                        </div>
                        <div class="grid__meta">
                            <div class="title placeholder"></div>
                            <div class="price placeholder"></div>
                        </div>
                    </div>
                    </>
                ))}
            
        </div>
        </>
    );
  };

  export default Shimmer;