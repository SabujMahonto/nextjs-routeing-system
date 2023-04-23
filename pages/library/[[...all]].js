import { useRouter } from "next/router"


function Documentation() {
    const {query:{all=[]}} = useRouter();
    console.log(all);
    if(all.length === 4){
        return (
            <p>documentation for topic : {all.at(0)} -lesson : {all.at(1)} -example : {all.at(2)} -line : {all.at(3)}</p>
        )
    }
    if(all.length === 3){
        return (
            <p>documentation for topic : {all.at(0)} -lesson : {all.at(1)} -example : {all.at(2)}</p>
        )
    }
    if(all.length === 2){
        return (
            <p>documentation for topic : {all.at(0)} -lesson : {all.at(1)} </p>
        )
    }
    if(all.length === 1){
        return (
            <p>documentation for topic : {all.at(0)}  </p>
        )
    }
  return (
    <div>Documentation</div>
  )
}

export default Documentation