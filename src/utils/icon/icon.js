export default function Icon({data,alt,height,width}){
    return <div className="p-cursor" style={{display:'inline-block'}}>
        <img style={{width: height || '24px',height: width || '24px'}} src={data} alt={alt} />
    </div>
}