  const  count = (tasks:any) => {
    let doneCount = 0
        tasks.map((item:any) => {
            if(item.status === true){
                doneCount = doneCount + 1 
            }
        })
        return tasks.length === 0 ? null : Math.floor(doneCount / tasks?.length * 100)  
} 

export default count;

