import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import LoadMore from '../../components/LoadMore/LoadMore';
import styles from './productList.module.css';
import DATA from '../../data/data.js';
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import MobProductListItem from '../../components/MobProductListItem/MobProductListItem';
import MobProductCard from '../../components/MobProductCard/MobProductCard';
import Filter from '../../components/Filter/Filter';

import { isTabAndMobile, isMobile } from '../../utils/utils';

class ProductList extends Component {
    state = {

    }

    getStackAndFlatList() {
        return DATA.data.productList.reduce((acc, product) => {
            const { stack, flat } = acc;
            if (product.badgeText) {
                stack.push(product);
            } else {
                flat.push(product);
            }
            return acc;
        }, { stack: [], flat: [] });
    }

    render() {
        const { stack, flat } = this.getStackAndFlatList();
        const ListComponent = isTabAndMobile() ? MobProductListItem : ProductListItem;
        const ProductComponent = isTabAndMobile() ? MobProductCard : ProductCard;
        return (
            <div className={styles.productList}>
                <Header />
                <div className={styles.container}>
                    <h2 className={styles.heading}>Recommended Products</h2>
                    {!isMobile() && <Filter />}
                    <div className={styles.cardItem}>
                        {
                            stack.map((item, i) => {
                                return (
                                    <ProductComponent
                                        badgeText={item.badgeText}
                                        prodImage={item.thumbnail}
                                        prodName={item.productName}
                                        authImg={item.thumbnail2}
                                        type={item.type}
                                        modal={item.modal}
                                        price={item.actualPrice}
                                        totalPrice = {item.actualPrice*4}
                                        stock={item.inStock}
                                        btnText={item.inStock}
                                        variant="stack"
                                    /> 
                                )
                            })
                        }
                    </div>
                    <div className={styles.listItems}>
                        {
                            flat.map((item, i) => {
                                return ( 
                                    <ListComponent 
                                        prodName = {item.productName}
                                        authImg = {item.thumbnail2}
                                        type = {item.type}
                                        modal = {item.modal}
                                        stock = {item.inStock}
                                        price = {item.actualPrice}
                                        totalPrice ={item.actualPrice}
                                        badgeTxt = {item.badgeText}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <LoadMore text= 'Load More Items'/>
            </div>
        )
    }
}

export default ProductList;