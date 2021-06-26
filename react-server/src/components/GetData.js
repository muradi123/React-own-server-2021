import React,{useState, useEffect }  from 'react'
import axios from 'axios'

const GetData = () => {
    let [datas, setData] = useState({ data : []})
    useEffect(async () => {
        const result = await axios(
          'http://localhost:5000/blogs',
        );
        
        console.log(result)
        setData(result)
      }, []);   
    
      const DeleteTask =  async(id) => {
          await axios.delete(
            `http://localhost:5000/blogs/${id}`,
          );
           let deletedData = datas.data
           console.log(deletedData)
           let filteredData = deletedData.filter((task) => task.id !== id)
           console.log(filteredData)
           let objData = { data : filteredData}
           console.log(objData)
           console.log(objData.data)
           setData(objData)
      }
     

    return (
        <ul> 
            {
              datas.data.sort((a,b) => (a.title < b.title ? -1 : 1)).map((div) => (
                    <li key={div.id}  className={`list ${div.id}`}>
                      <div className="close_icon"><img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
                      onClick={() => DeleteTask(div.id)}
                      /></div>
                      <h1 className="blog_title">{div.title}</h1>
                      <div>{div.body}</div>
                    </li>
                    
                ))
            }
        </ul>
    )
}

export default GetData
