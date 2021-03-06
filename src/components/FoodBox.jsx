import React, {Component} from 'react';

class FoodBox extends Component {

  state = {
    name: this.props.food.name,
    calories: this.props.food.calories,
    image: this.props.food.image,
    quantity: this.props.food.quantity
}

  addTodayFoodHandler = () => {
    this.props.addTheTodayFood(this.state)
  }

  handleChange = (e) => {
    const {value} = e.target
    this.setState({
      quantity: value,
      calories: this.props.food.calories * value
    }, () => console.log(this.state.quantity, this.state.calories))
  }

    render() {
        const {quantity} = this.state
        const {name, image, calories} = this.props.food
        return <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={image} alt={name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={quantity} onChange={this.handleChange} />
        </div>
        <div className="control">
          <button className="button is-info" onClick={this.addTodayFoodHandler}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    }
}

export default FoodBox;
