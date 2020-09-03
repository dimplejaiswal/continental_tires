import React from 'react';
import styles from './productCount.module.css';

class ProductCount extends React.Component{
    state = { count: 1 };
                
    increment = () => this.setState({ count: this.state.count + 1 });

    decrement = () => this.state.count > 1 && this.setState({ count: this.state.count - 1 });

    render() {
        return (
            <div class={`${styles.container}`}>
                <button className={styles.counterBtn} onClick={this.decrement}>-</button>
                <span className={styles.counterVal}>{this.state.count}</span>
                <button className={styles.counterBtn} onClick={this.increment}>+</button>
            </div>
        );
    }
};
  
export default ProductCount;