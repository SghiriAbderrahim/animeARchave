import RelationDiv from './RelationDiv';

export default function Relations(promps) {
  const { data } = promps;
  return(
    <>
     
      { data.entry.map((item,i)=>{
        return <RelationDiv key={i} data={item}/>
      })}
     
 </>
  )
}



 