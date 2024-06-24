function Fragment() {
    let foodItems =[];
    // let foodItems = ['dal', 'chawal', 'vegetables', 'fruits', 'salad'];
    // if(foodItems.length==0){
    //     return <h3>I am Hungry</h3>
    // }
  let emptymessage=foodItems.length==0?<h3>I am hungry </h3>:null;
    return (
        <><h1>Healhty Foood</h1>
        {emptymessage}
        {/* {foodItems.length==0?<h3>I am hungry </h3>:null}         logical  */}
        {foodItems.length==0&&<h3>i am hungry</h3>}
            <ul>
                {foodItems.map((item) => {
                    return <li>{item}</li> 
                })}
            </ul>
        </>
    );
  }
  export default Fragment;  