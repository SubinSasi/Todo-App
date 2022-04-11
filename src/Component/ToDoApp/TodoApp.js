import React, { Component } from 'react'
import "./TodoApp.css"
export default class TodoApp extends Component {

    state = {
        input: "",
        items: []
    }
    handleChange = event => {
        this.setState({
            input:event.target.value
        })
    }

    storeItems = event =>{
        event.preventDefault()
        const {input} = this.state
      
        this.setState({
            items:[...this.state.items,input],
            input: ""
        })
    }
    deleteItem=key=>{
        const allItems = this.state.items
        allItems.splice(key, 1)
        this.setState({
            items: allItems
        })
    }

  render() {
      const {input, items} = this.state
      console.log(items);
    return (
        <div class="container">
        <div class="container__item">

        <h1 class="glitch" data-text="ToDo">ToDo</h1>

            <form class="form" onSubmit={this.storeItems}>
                <input value={input} onChange={this.handleChange} type="text" class="form__field" placeholder="Enter items..." />
            </form>
        </div>

        <ul>
            {items.map((data,index)=>(
            <li key={index}>
                <article class="leaderboard__profile">
                <img src="eyes.gif" alt="Mark Zuckerberg" class="leaderboard__picture"></img>
                <span class="leaderboard__name">{data}</span>
                <i class="w3-xlarge fa-solid fa-trash" onClick={()=> this.deleteItem(index)}></i>
                </article>
            </li>
                ))}
        </ul>
    </div>
    )
  }
}
