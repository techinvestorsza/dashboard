import React from 'react'
import { Page, GridComponent, ColumnsDirective, ColumnDirective, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title='Customers' />
      <GridComponent
        id='gridcomp'
        dataSource={customersData}
        // enable pagination
        allowPaging
        allowSorting
        toolbar={[ 'Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width='auto'
      >
        <ColumnsDirective>
           {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
           ))}
        </ColumnsDirective>

        {/* enable pagination */}
        <Inject services={[ Page, Toolbar, Selection, Edit, Sort, Filter]} />

      </GridComponent>
    </div>
  )
}

export default Customers
