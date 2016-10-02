import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import config from '../config';

import InventItemList from './component/InventItemList';
import InventItem from './component/InventItem';
import NavBar from './component/nav/navbar';
import SideNav from './component/nav/sidenav';

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

var itemData = {
    id: 1,
    name: 'Гвоздь',
    description: 'Материал - нержавеющая сталь',
    category: 'Крепеж'
};

var menuItems = [{
                    id: 1,
                    label: config.menuInventory,
                    active: true
                }, {
                    id: 2,
                    label: config.menuWarehouse,
                    active: false
                }, {
                    id: 3,
                    label: config.menuSettings,
                    active: false
                }];

class App extends Component {

    render() {
        return (
            <div>
                <NavBar appName={config.appName} />
                <div className='row'>
                    <div className='col-md-2'>
                        <SideNav items={menuItems} />
                    </div>
                    <div className='col-md-8'>
                        <InventItemList header={config.inventory} items={data} />
                    </div>
                </div>
            </div>
            );
    }
}

ReactDOM.render(<App />, document.getElementById('content'));

// <InventItem header={config.inventory} item={itemData} />





