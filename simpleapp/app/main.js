import React from 'react';
import ReactDOM from 'react-dom';

import InventItemList from './component/InventItemList';
import InventItem from './component/InventItem';

var data = [{
        id: 1,
        name: 'Гвоздь',
        description: 'Материал - нержавеющая сталь',
        category: 'Крепеж'
    }, {
        id: 2,
        name: 'Валенки',
        description: 'Теплая и очень удобная зимняя обувь :)',
        category: 'Обувь'
    }, {
        id: 3,
        name: 'Лопата',
        description: 'Для уборки снега. Материал - пластик.',
        category: 'Инструмент'
    }, {
        id: 4,
        name: 'Колоши',
        description: 'Черного цвета, повышеный комфорт.',
        category: 'Обувь'
    }, {
        id: 5,
        name: 'Молоток',
        description: 'С гвоздодером, прорезиненая рукоять.',
        category: 'Инструмент'
    }
];

// ReactDOM.render(
//     <InventItemList header='Номенклатура' items={data} />,
//     document.getElementById('content'));


var data = {
        id: 1,
        name: 'Гвоздь',
        description: 'Материал - нержавеющая сталь',
        category: 'Крепеж'
    };


ReactDOM.render(
    < InventItem item={data} />,
    document.getElementById('content'));