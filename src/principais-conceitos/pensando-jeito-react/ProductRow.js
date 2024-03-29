import React from 'react';

export default class ProductRow extends React.Component {
    render() {
        const { product } = this.props;

        const name = product.stocked
            ? product.name
            : <span style={{ color: 'red' }}>
                {product.name}
            </span>;

        return (
            <tr style={{ border: '2px solid yellow' }}>
                <td >{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}
