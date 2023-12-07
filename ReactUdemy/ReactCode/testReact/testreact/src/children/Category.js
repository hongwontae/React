


const Category = (props)=>{

    console.log(props.children[0].props.children)

    return (
        <div>
            <div>{props.children[0].props.children}</div>
        <ul>{props.children}</ul>
        </div>
    )

}

export default Category