import classes from './Liver.module.css'

const Liver = (props)=>{

    return(
        <>
        {props.data.map((data, idx)=>{
        return   <div key={idx}>
            <h1 className={classes.ko}>{data.title}</h1>
            <p>{data.description}</p>
            </div>
        })}
        </>
    )
}

export default Liver;