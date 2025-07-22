export const youtube_api='AIzaSyBrFCSe8heuj7Uev9rSnwmasGODXSQMBss'
export const calculate =(views)=>{
    if(views>=1000000) return Math.floor(views/1000000)+'M'
    else if(views>=1000) return Math.floor(views/1000)+'K'
    else return views
}