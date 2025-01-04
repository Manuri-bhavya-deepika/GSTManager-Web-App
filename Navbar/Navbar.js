// import React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import IconButton from '@mui/material/IconButton';
// import PersonIcon from '@mui/icons-material/Person';
// import { ExpandMore } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PieChartIcon from '@mui/icons-material/PieChart';
// import ViewInArIcon from '@mui/icons-material/ViewInAr';
// import BookmarksIcon from '@mui/icons-material/Bookmarks';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import CategoryIcon from '@mui/icons-material/Category';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
// import FormatSizeIcon from '@mui/icons-material/FormatSize';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import PaymentsIcon from '@mui/icons-material/Payments';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import BookIcon from '@mui/icons-material/Book';
// import SettingsIcon from '@mui/icons-material/Settings';

// const Navbar = () => {
//     const [open, setOpen] = React.useState(true);
//     const toggleDrawer = () => {
//         setOpen(!open);
//     };

//     const drawerWidth = 250;
//     const list = () => (
//         <Box
//             sx={{ width: drawerWidth }}
//             role="presentation"
//             onClick={toggleDrawer}
//             onKeyDown={toggleDrawer}>
//             <List>
//                 <ListItem disablePadding>
//                     <ListItemButton component={Link} to="./Login" target="_blank">
//                         <ListItemText primary={"Login"} />
//                     </ListItemButton>
//                 </ListItem>

//                 <ListItem disablePadding>
//                     <ListItemButton component={Link} to="./Dashboard">
//                         <ListItemIcon>
//                             <HomeIcon style={{ color: 'blue' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary={"Dashboard"} />
//                     </ListItemButton>
//                 </ListItem>
                
//                 <input type="checkbox" id="toggleCollapseQuotations" className="collapse-checkbox" />
//                 <ListItemButton component="label" htmlFor="toggleCollapseQuotations">
//                   <ListItemIcon>
//                     <StorefrontIcon style={{ color: 'orange' }}/>
//                   </ListItemIcon>
//                   <ListItemText primary="Quotations" />
//                   <ExpandMore className="collapse-arrow" />
//                   </ListItemButton>
//                   <div className="collapse-content">
//                     <List component="div" disablePadding>
//                       <ListItemButton component={Link} to="./Qlist">
//                         <ListItemText primary="List" />
//                       </ListItemButton>
//                       <ListItemButton component={Link} to="./Qadd">
//                         <ListItemText primary="Add" />
//                       </ListItemButton>
//                     </List>
//                   </div>
                  
//                   <input type="checkbox" id="toggleCollapseSales" className="collapse-checkbox" />
//                   <ListItemButton component="label" htmlFor="toggleCollapseSales">
//                     <ListItemIcon>
//                       <ReceiptIcon style={{ color: 'orange' }} />
//                     </ListItemIcon>
//                     <ListItemText primary="Sales" />
//                     <ExpandMore className="collapse-arrow" />
//                   </ListItemButton>
//                   <div className="collapse-content">
//                     <List component="div" disablePadding>
//                       <ListItemButton component={Link} to="./POS">
//                         <ListItemText primary="POS" />
//                       </ListItemButton>
//                       <ListItemButton component={Link} to="./Salesummary">
//                         <ListItemText primary="Salesummary" />
//                       </ListItemButton>
//                     </List>
//                   </div>
                  
//                   <input type="checkbox" id="toggleCollapsePurchase" className="collapse-checkbox" />
//                   <ListItemButton component="label" htmlFor="toggleCollapsePurchase">
//                     <ListItemIcon>
//                       <ShoppingCartIcon style={{ color: 'blue' }}/>
//                     </ListItemIcon>
//                     <ListItemText primary="Purchase" />
//                     <ExpandMore className="collapse-arrow" />
//                     </ListItemButton>
//                     <div className="collapse-content">
//                       <List component="div" disablePadding>
//                         <ListItemButton component={Link} to="./Purchaseinvoice">
//                           <ListItemText primary="Purchase invoice" />
//                         </ListItemButton>
//                         <ListItemButton component={Link} to="./Purchasesummary">
//                           <ListItemText primary="Purchasesummary" />
//                         </ListItemButton>
//                       </List>
//                     </div>
                    
//                     <input type="checkbox" id="toggleCollapseReports" className="collapse-checkbox" />
//                     <ListItemButton component="label" htmlFor="toggleCollapseReports">
//                       <ListItemIcon>
//                         <PieChartIcon style={{ color: 'pink' }}/>
//                       </ListItemIcon>
//                       <ListItemText primary="Reports" />
//                       <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Cashierwise">
//                             <ListItemText primary="Cashier-Wise" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Paymentmode">
//                             <ListItemText primary="Payment-Mode" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./HSNcode">
//                             <ListItemText primary="HSN-Code" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./GSTwise">
//                             <ListItemText primary="GST-Wise" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Salesmanwise">
//                             <ListItemText primary="Salesman-Wise" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Branchwise">
//                             <ListItemText primary="Branch-Wise" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Salesend">
//                             <ListItemText primary="Sales-End" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Partgst">
//                            <ListItemText primary="Party-GST" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Stock">
//                            <ListItemText primary="Stock Report" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Agewise">
//                             <ListItemText primary="Age-Wise" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Expiredprod">
//                             <ListItemText primary="Expired-Porduct" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Purchasewise">
//                             <ListItemText primary="Purchase-Wise" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Colorwise">
//                             <ListItemText primary="Color-Wise" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Brandwise">
//                             <ListItemText primary="Brand-Wise" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Sizewise">
//                             <ListItemText primary="Size-Wise" />
//                           </ListItemButton>
//                         </List>
//                       </div>
                      
//                       <input type="checkbox" id="toggleCollapseProducts" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseProducts">
//                         <ListItemIcon>
//                           <ViewInArIcon style={{ color: 'orange' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Products" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Plist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Padd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>
                      
//                       <input type="checkbox" id="toggleCollapseInventory" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseInventory">
//                         <ListItemIcon>
//                           <BookmarksIcon style={{ color: 'pink' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Inventory" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Ilist">
//                             <ListItemText primary="Inventory List" />
//                             </ListItemButton>
//                             <ListItemButton component={Link} to="./Transferinventory">
//                               <ListItemText primary="Transfer Inventory" />
//                             </ListItemButton>
//                         </List>
//                       </div>
                      
//                       <input type="checkbox" id="toggleCollapseDivision" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseDivision">
//                         <ListItemIcon>
//                           <ListAltIcon style={{ color: 'maroon' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Division" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Dlist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Dadd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>
                      
//                       <input type="checkbox" id="toggleCollapseCategory" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseCategory">
//                         <ListItemIcon>
//                           <CategoryIcon style={{ color: 'red' }}/>
//                           </ListItemIcon>
//                           <ListItemText primary="Category" />
//                           <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Clist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Cadd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>
                      
//                       <input type="checkbox" id="toggleCollapseUOM" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseUOM">
//                         <ListItemIcon>
//                           <BarChartIcon style={{ color: 'grey' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="UOM" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Ulist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Uadd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>
                      
//                       <input type="checkbox" id="toggleCollapseTax" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseTax">
//                         <ListItemIcon>
//                           <FormatAlignCenterIcon style={{ color: 'maroon' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Tax" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Tlist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Tadd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>
                      
//                       <input type="checkbox" id="toggleCollapseBrand" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseBrand">
//                         <ListItemIcon>
//                           <BrandingWatermarkIcon style={{ color: 'blue' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Brand" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Blist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Badd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>
                      
//                       <input type="checkbox" id="toggleCollapseColor" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseColor">
//                         <ListItemIcon>
//                           <ColorLensIcon style={{ color: 'red' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Color" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Colist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Coadd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>

//                       <input type="checkbox" id="toggleCollapseSize" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseSize">
//                         <ListItemIcon>
//                           <FormatSizeIcon style={{ color: 'black' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Size" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Sizelist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Sizeadd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>

//                       <input type="checkbox" id="toggleCollapseSupplier" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseSupplier">
//                         <ListItemIcon>
//                           < InventoryIcon style={{ color: 'pink' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Supllier" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Supplist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Suppadd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>

//                       <input type="checkbox" id="toggleCollapsePayments" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapsePayments">
//                         <ListItemIcon>
//                           <PaymentsIcon style={{ color: 'black' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Payments" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Paymentlist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Paymentadd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>

//                       <input type="checkbox" id="toggleCollapseExpense" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseExpense">
//                         <ListItemIcon>
//                           <BarChartIcon style={{ color: 'pink' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Expense" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Expenses">
//                             <ListItemText primary="Expenses" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Elist">
//                             <ListItemText primary="Expenses List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Etype">
//                             <ListItemText primary="Expenses Type" />
//                           </ListItemButton>
//                         </List>
//                       </div>

//                       <input type="checkbox" id="toggleCollapseReceipt" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseReceipt">
//                         <ListItemIcon>
//                           < BookIcon style={{ color: 'green' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Receipt" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Rlist">
//                             <ListItemText primary="List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Radd">
//                             <ListItemText primary="Add" />
//                           </ListItemButton>
//                         </List>
//                       </div>

//                       <input type="checkbox" id="toggleCollapseMyaccount" className="collapse-checkbox" />
//                       <ListItemButton component="label" htmlFor="toggleCollapseMyaccount">
//                         <ListItemIcon>
//                           <SettingsIcon style={{ color: 'blue' }}/>
//                         </ListItemIcon>
//                         <ListItemText primary="Myaccount" />
//                         <ExpandMore className="collapse-arrow" />
//                       </ListItemButton>
//                       <div className="collapse-content">
//                         <List component="div" disablePadding>
//                           <ListItemButton component={Link} to="./Mycompany">
//                             <ListItemText primary="My Company" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./WM">
//                             <ListItemText primary="Whats App Manager " />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Designation">
//                             <ListItemText primary="Designation" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Paymentmode">
//                             <ListItemText primary="Payment Mode" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Employee">
//                             <ListItemText primary="Employee" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./SP">
//                             <ListItemText primary="Suffix/Prefix" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./SPl">
//                             <ListItemText primary="Suffix/Prefix List" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./PC">
//                             <ListItemText primary="Party/Customers" />
//                           </ListItemButton>
//                           <ListItemButton component={Link} to="./Billnote">
//                             <ListItemText primary="Billnote" />
//                           </ListItemButton>
//                         </List>
//                       </div>
//             </List>
//         </Box>
//     );

//     return (
//         <div>
//             <div className='Navbar'>
//                 <IconButton onClick={toggleDrawer}>
//                     <MenuIcon className='MenuIcon' />
//                 </IconButton>
//                 <div className='Navbar-right'>
//                     <PersonIcon className='PersonIcon' />
//                     <span className='Name'>Bhavya</span>
//                 </div>
//             </div>
//             <Drawer sx={{width: drawerWidth,flexShrink: 0,'& .MuiDrawer-paper': {width: drawerWidth,boxSizing: 'border-box',},}}
//                 variant="persistent"
//                 anchor="left"
//                 open={open}
//             >
//                 {list()}
//             </Drawer>
//         </div>
//     );
// };

// export default Navbar;







import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CategoryIcon from '@mui/icons-material/Category';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentsIcon from '@mui/icons-material/Payments';
import BarChartIcon from '@mui/icons-material/BarChart';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const drawerWidth = 300;
    const list = () => (
        <Box
            sx={{ width: drawerWidth }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="./Login" target="_blank">
                        <ListItemText primary={"Login"} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="./Dashboard">
                        <ListItemIcon>
                            <HomeIcon style={{ color: 'blue' }}/>
                        </ListItemIcon>
                        <ListItemText primary={"Dashboard"} />
                    </ListItemButton>
                </ListItem>
                
                <input type="checkbox" id="toggleCollapseQuotations" className="collapse-checkbox" />
                <ListItemButton component="label" htmlFor="toggleCollapseQuotations">
                  <ListItemIcon>
                    <StorefrontIcon style={{ color: 'orange' }}/>
                  </ListItemIcon>
                  <ListItemText primary="Quotations" />
                  <ExpandMore className="collapse-arrow" />
                  </ListItemButton>
                  <div className="collapse-content">
                    <List component="div" disablePadding>
                      <ListItemButton component={Link} to="./Qlist">
                        <ListItemText primary="List" />
                      </ListItemButton>
                      <ListItemButton component={Link} to="./Qadd">
                        <ListItemText primary="Add" />
                      </ListItemButton>
                    </List>
                  </div>
                  
                  <input type="checkbox" id="toggleCollapseSales" className="collapse-checkbox" />
                  <ListItemButton component="label" htmlFor="toggleCollapseSales">
                    <ListItemIcon>
                      <ReceiptIcon style={{ color: 'orange' }} />
                    </ListItemIcon>
                    <ListItemText primary="Sales" />
                    <ExpandMore className="collapse-arrow" />
                  </ListItemButton>
                  <div className="collapse-content">
                    <List component="div" disablePadding>
                      <ListItemButton component={Link} to="./POS">
                        <ListItemText primary="POS" />
                      </ListItemButton>
                      <ListItemButton component={Link} to="./Salesummary">
                        <ListItemText primary="Salesummary" />
                      </ListItemButton>
                    </List>
                  </div>
                  
                  <input type="checkbox" id="toggleCollapsePurchase" className="collapse-checkbox" />
                  <ListItemButton component="label" htmlFor="toggleCollapsePurchase">
                    <ListItemIcon>
                      <ShoppingCartIcon style={{ color: 'blue' }}/>
                    </ListItemIcon>
                    <ListItemText primary="Purchase" />
                    <ExpandMore className="collapse-arrow" />
                    </ListItemButton>
                    <div className="collapse-content">
                      <List component="div" disablePadding>
                        <ListItemButton component={Link} to="./Purchaseinvoice">
                          <ListItemText primary="Purchase invoice" />
                        </ListItemButton>
                        <ListItemButton component={Link} to="./Purchasesummary">
                          <ListItemText primary="Purchasesummary" />
                        </ListItemButton>
                      </List>
                    </div>
                    
                    <input type="checkbox" id="toggleCollapseReports" className="collapse-checkbox" />
                    <ListItemButton component="label" htmlFor="toggleCollapseReports">
                      <ListItemIcon>
                        <PieChartIcon style={{ color: 'pink' }}/>
                      </ListItemIcon>
                      <ListItemText primary="Reports" />
                      <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Cashierwise">
                            <ListItemText primary="Cashier-Wise" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Paymentmode">
                            <ListItemText primary="Payment-Mode" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./HSNcode">
                            <ListItemText primary="HSN-Code" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./GSTwise">
                            <ListItemText primary="GST-Wise" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Salesmanwise">
                            <ListItemText primary="Salesman-Wise" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Branchwise">
                            <ListItemText primary="Branch-Wise" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Salesend">
                            <ListItemText primary="Sales-End" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Partgst">
                           <ListItemText primary="Party-GST" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Stock">
                           <ListItemText primary="Stock Report" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Agewise">
                            <ListItemText primary="Age-Wise" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Expiredprod">
                            <ListItemText primary="Expired-Porduct" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Purchasewise">
                            <ListItemText primary="Purchase-Wise" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Colorwise">
                            <ListItemText primary="Color-Wise" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Brandwise">
                            <ListItemText primary="Brand-Wise" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Sizewise">
                            <ListItemText primary="Size-Wise" />
                          </ListItemButton>
                        </List>
                      </div>
                      
                      <input type="checkbox" id="toggleCollapseProducts" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseProducts">
                        <ListItemIcon>
                          <ViewInArIcon style={{ color: 'orange' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Products" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Plist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Padd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>
                      
                      <input type="checkbox" id="toggleCollapseInventory" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseInventory">
                        <ListItemIcon>
                          <BookmarksIcon style={{ color: 'pink' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Inventory" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Ilist">
                            <ListItemText primary="Inventory List" />
                            </ListItemButton>
                            <ListItemButton component={Link} to="./Transferinventory">
                              <ListItemText primary="Transfer Inventory" />
                            </ListItemButton>
                        </List>
                      </div>
                      
                      <input type="checkbox" id="toggleCollapseDivision" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseDivision">
                        <ListItemIcon>
                          <ListAltIcon style={{ color: 'maroon' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Division" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Dlist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Dadd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>
                      
                      <input type="checkbox" id="toggleCollapseCategory" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseCategory">
                        <ListItemIcon>
                          <CategoryIcon style={{ color: 'red' }}/>
                          </ListItemIcon>
                          <ListItemText primary="Category" />
                          <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Clist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Cadd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>
                      
                      <input type="checkbox" id="toggleCollapseUOM" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseUOM">
                        <ListItemIcon>
                          <BarChartIcon style={{ color: 'grey' }}/>
                        </ListItemIcon>
                        <ListItemText primary="UOM" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Ulist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Uadd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>
                      
                      <input type="checkbox" id="toggleCollapseTax" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseTax">
                        <ListItemIcon>
                          <FormatAlignCenterIcon style={{ color: 'maroon' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Tax" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Tlist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Tadd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>
                      
                      <input type="checkbox" id="toggleCollapseBrand" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseBrand">
                        <ListItemIcon>
                          <BrandingWatermarkIcon style={{ color: 'blue' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Brand" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Blist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Badd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>
                      
                      <input type="checkbox" id="toggleCollapseColor" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseColor">
                        <ListItemIcon>
                          <ColorLensIcon style={{ color: 'red' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Color" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Colist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Coadd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>

                      <input type="checkbox" id="toggleCollapseSize" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseSize">
                        <ListItemIcon>
                          <FormatSizeIcon style={{ color: 'black' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Size" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Sizelist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Sizeadd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>

                      <input type="checkbox" id="toggleCollapseSupplier" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseSupplier">
                        <ListItemIcon>
                          < InventoryIcon style={{ color: 'pink' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Supllier" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Supplist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Suppadd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>

                      <input type="checkbox" id="toggleCollapsePayments" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapsePayments">
                        <ListItemIcon>
                          <PaymentsIcon style={{ color: 'black' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Payments" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Paymentlist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Paymentadd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>

                      <input type="checkbox" id="toggleCollapseExpense" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseExpense">
                        <ListItemIcon>
                          <BarChartIcon style={{ color: 'pink' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Expense" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Expenses">
                            <ListItemText primary="Expenses" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Elist">
                            <ListItemText primary="Expenses List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Etype">
                            <ListItemText primary="Expenses Type" />
                          </ListItemButton>
                        </List>
                      </div>

                      <input type="checkbox" id="toggleCollapseReceipt" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseReceipt">
                        <ListItemIcon>
                          < BookIcon style={{ color: 'green' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Receipt" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Rlist">
                            <ListItemText primary="List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Radd">
                            <ListItemText primary="Add" />
                          </ListItemButton>
                        </List>
                      </div>

                      <input type="checkbox" id="toggleCollapseMyaccount" className="collapse-checkbox" />
                      <ListItemButton component="label" htmlFor="toggleCollapseMyaccount">
                        <ListItemIcon>
                          <SettingsIcon style={{ color: 'blue' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Myaccount" />
                        <ExpandMore className="collapse-arrow" />
                      </ListItemButton>
                      <div className="collapse-content">
                        <List component="div" disablePadding>
                          <ListItemButton component={Link} to="./Mycompany">
                            <ListItemText primary="My Company" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./WM">
                            <ListItemText primary="Whats App Manager " />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Designation">
                            <ListItemText primary="Designation" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Paymentmode">
                            <ListItemText primary="Payment Mode" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Employee">
                            <ListItemText primary="Employee" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./SP">
                            <ListItemText primary="Suffix/Prefix" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./SPl">
                            <ListItemText primary="Suffix/Prefix List" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./PC">
                            <ListItemText primary="Party/Customers" />
                          </ListItemButton>
                          <ListItemButton component={Link} to="./Billnote">
                            <ListItemText primary="Billnote" />
                          </ListItemButton>
                        </List>
                      </div>
            </List>
        </Box>
    );

    return (
        <div>
            <div className='Navbar'>
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon className='MenuIcon' />
                </IconButton>
                {/* <img src="./src/ecounter.jpg" alt="ecounter" className='Navbar-image' /> */}
                <div className='Navbar-right'>
                    <PersonIcon className='PersonIcon' />
                    <span className='Name'>Bhavya</span>
                </div>
            </div>
            <Drawer sx={{width: drawerWidth,flexShrink: 0,'& .MuiDrawer-paper': {width: drawerWidth,boxSizing: 'border-box',},}}
                variant="persistent"
                anchor="left"
                open={open}
            >
                {list()}
            </Drawer>
        </div>
    );
};

export default Navbar;

