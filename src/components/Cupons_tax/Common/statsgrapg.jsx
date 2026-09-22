function Graph({width="138px",height="96px",title}){
    return(
        <div className="shirnk-0 flex flex-col items-center">
        <div 
        style={{width,height}}
        className="shrink-0 rounded-t-[8px] bg-[#E67E22]">

</div>
   <span className="mt-[20px] text-center font-dm text-[11px] font-medium leading-none text-[#8A9BB0]">
    {title}
   </span>
        </div>
    );
}

export default Graph;


