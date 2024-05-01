// ** Navigation sections imports
import apps from './apps'
import pages from './pages'
import others from './others'
import dashboards from '../vertical/dashboards'
import uiElements from './ui-elements'
import formsAndTables from './forms-tables'
import chartsAndMaps from './charts-maps'
import stores from '../vertical/stores'
import inventories from '../vertical/inventories'
import products from '../vertical/products.js'
import sales from '../vertical/sales'
import users from '../vertical/users'
import servers from '../vertical/servers'
import reports from '../vertical/reports'
import settings from '../vertical/settings'

const userData = JSON.parse(localStorage.getItem('userData'))

// ** Merge & Export
// export default [...dashboards, ...apps, ...uiElements, ...formsAndTables, ...pages, ...chartsAndMaps, ...others]

export default userData?.role === 'ADMIN'
	? [...dashboards, ...stores, ...sales, ...products, ...inventories, ...users, ...servers, ...reports, ...settings]
	: userData?.role === 'SALES_REP'
	? [...dashboards, ...stores, ...sales, ...settings]
	: [...dashboards, ...stores, ...sales, ...inventories, ...reports, ...settings]
