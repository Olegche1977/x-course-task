import './cart-added.css'
import {useNavigate, Navigate} from "react-router-dom"
import React from 'react'
import {useContext} from 'react'
import {Context} from '../context'

export default function CartAdded() {
    const navigate = useNavigate();
    const {userName, setUserName, books, setBooks, booksChoosen, setBooksChoosen} = useContext(Context)
    
    const removeAll=()=>{
        setBooksChoosen([])
        navigate("/cart")
    }
    const removeElem=(elem)=>{
        const remArr = booksChoosen.slice(); 
        const result = remArr.filter(element => elem.id!==element.id);
            setBooksChoosen(result)
            if(booksChoosen.length === 1){
                navigate("/cart")
            }
    }

   let total = booksChoosen.reduce((acc,elem)=>{return acc+ Number(elem['number'])*Number(books[elem['id']-1]['price'])},0).toFixed(2)

       if(!userName){
          return <Navigate to="/"/>
        }

    return <div className ="imageCartAdded">
       
        <button 
            onClick={removeAll}
            className = "purchaseButton">Purchase</button>
            {booksChoosen.map((elem, index)=>{return <div key={index}>
                    <div className = "fooBar">
                        <div className = "BookNameCount">
                            <div className= "BookName">Book Name: {books[elem['id']-1]['title']}</div>
                            <div className= "BookCount">Book Count:<strong>{elem['number']}</strong>    Book Price: <strong>{books[elem['id']-1]['price']}$</strong></div>
                        </div> 
                        <div>
                            <div className = "TotalPrice">Total price:<strong>{(Number(elem['number'])*Number(books[elem['id']-1]['price'])).toFixed(2)}$</strong></div>
                            <button 
                                onClick={()=>removeElem(elem)}
                                style={{color:"red"}}>Delete from the Cart</button>
                        </div>
                    </div>
        
            </div>})}
            <div className = "fooBar-result">
                <div className = "total"><strong>Total: {total}$</strong></div>
            </div>
         </div>
}