function Input({label, id, error, ...props}){


    return(
        <>
        <div className="control no-margin">
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            {...props}
          />
        </div>

        </>
    )
}

export default Input;