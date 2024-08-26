type HobbiesType = {
    hobbies?: string[]
}
export default function Hobbies({hobbies}:HobbiesType){
    return(
        <ul>
            {
                hobbies?.map((hobby, i)=><li key={i}>{hobby}</li>)
            }
        </ul>
    )
}