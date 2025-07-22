export const youtube_api='Your-Api-Key'
export const calculate =(views)=>{
    if(views>=1000000) return Math.floor(views/1000000)+'M'
    else if(views>=1000) return Math.floor(views/1000)+'K'
    else return views
}
