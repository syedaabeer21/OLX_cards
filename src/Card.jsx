const Card = ({src, rs, title , description, time}) => {
    return(
        <>
            <img style={{width:'200px',height:'150px'}} src={src}/>
            <h5>{rs}</h5>
            <p>{title}</p>
            <p>{description}</p>
            <p >{time}</p>
        </>
    )
}

export default Card;