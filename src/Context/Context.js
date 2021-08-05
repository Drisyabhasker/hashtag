import React,{createContext,useState} from 'react'
const ListContext = createContext()
const ListProvider = (props) => {
    const [List, setList] = useState([])
    return(
        <ListContext.Provider value={[List, setList]} >
        {props.children}
        </ListContext.Provider>
    )
}
export {ListProvider}
export default ListContext