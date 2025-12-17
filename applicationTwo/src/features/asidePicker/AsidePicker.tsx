import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../product/productsSlice';
import { RootState } from '../../app/store';
import '../../css/main.scss';
import DeleatBar from "../deleatBar/DeleatBar";
import RangeBar from "../rangePicker/rangePicker";
// interface AsidePickerProps {
//     categoryMatch?: string;
// }

const AsidePicker = () => {
    const dispatch = useDispatch();
    const selectedFilter = useSelector((state: RootState) => state.product.filter);

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: "electronics", label: 'Electronics' },
        { id: "jewelery", label: 'Jewelery' },
        { id: "men's clothing", label: "Men's Clothing" },
        { id: "women's clothing", label: "Women's Clothing" },
    ];

    const handleCategoryClick = (categoryId: string) => {
        dispatch(setFilter(categoryId));
    };
    console.log(selectedFilter, "asdasd")

    return (
        <div className="asidebar-container">
            <div className="asidebar">
                <h3 className="asidebar-title">Categories</h3>
                <ul className="asidebar-list">
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            className={`asidebar-item ${selectedFilter === category.id || (selectedFilter === "" && category.id === "all") ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.label}
                        </li>
                    ))}
                </ul>
                <RangeBar />
                <DeleatBar />
            </div>
        </div>
    );
};

export default AsidePicker;