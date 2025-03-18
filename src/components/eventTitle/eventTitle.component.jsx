import './eventTitle.style.css';


const EventTitle = (props) => {
    const {title, subTitle, imgTitle, styleType} = props.titleData;
    if(styleType == 1){
        return (    
            <div className="elements-title-container-1">
                <div className="title-container-1">
                    <h1>{title}</h1>
                </div>
                    <div className="sub-title-container-1">
                        <span>{subTitle}</span>
                    </div>
                    <div className="img-title-container-1">
                        <img src={imgTitle} alt="" />
                    </div>
            </div>
        );
    }
};

export default EventTitle;