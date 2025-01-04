import React,{useState} from 'react';
import './Padd.css';

const Padd = () => {
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const validateHSNCode = (event) => {
        event.target.value = event.target.value.replace(/[^\d]/g, '');
      };

      const MRP = (event) => {
        event.target.value = event.target.value.replace(/[^\d]/g, '');
      };

      const Discount = (event) => {
        event.target.value = event.target.value.replace(/[^\d]/g, '');
      };

      const prate = (event) => {
        event.target.value = event.target.value.replace(/[^\d]/g, '');
      };

      const openingstock = (event) => {
        event.target.value = event.target.value.replace(/[^\d]/g, '');
      };

      const closingstock = (event) => {
        event.target.value = event.target.value.replace(/[^\d]/g, '');
      };

      const reorderlevel = (event) => {
        event.target.value = event.target.value.replace(/[^\d]/g, '');
      };

return (
<div className="card"><br/><br/><br/><br/>
    <div className="card-header"><h3>ADD PRODUCT DETAILS</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="">HSN Code*</label>
                    <input type="text" placeholder="Enter HSN Code" onInput={validateHSNCode}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Product Name*</label>
                    <input type="text" placeholder="Product Name"/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Product Code*</label>
                    <input type="text" placeholder="Product Code"/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="">Product Category*</label>
                    <select id="product-category" name="product-category">
                        <option value="">--Select Category--</option>
                        <option value="stationary">Stationary</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </div>
                <div className="col-md-3">
                <label htmlFor="">Unit Of Measurement*</label>
                    <select id="" name="product-category">
                        <option value="">--Select Uom--</option>
                        <option value="stationary">Packs</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Batch No*</label>
                    <input type="text"  placeholder="Batch No"/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="">Add Supplier Name*</label>
                    <select id="" name="product-category">
                        <option value="">--Select Supplier name--</option>
                        <option value="stationary">bhavani</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Add GST Slab Rate*</label>
                    <select id="" name="product-category">
                        <option value="">--Select GST--</option>
                        <option value="stationary">5 (GST)</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">MRP*</label>
                    <input type="text" placeholder="MRP" onInput={MRP}/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="">Sale Rate*</label>
                    <input type="text" placeholder="Sale Rate" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Discount% *</label>
                    <input type="text"  placeholder="0" onInput={Discount}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Purchase Rate*</label>
                    <input type="text"  placeholder="Purchase Rate" onInput={prate}/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="">Opening Stock*</label>
                    <input type="text" placeholder="Opening Stock" onInput={openingstock}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Closing Stock*</label>
                    <input type="text"  placeholder="Closing Stock" onInput={closingstock}/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Reorder Level</label>
                    <input type="text"  placeholder="Reorder Level" onInput={reorderlevel}/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="">Brand Name</label>
                    <select id="" name="product-category">
                        <option value="">--Select Brand name--</option>
                        <option value="stationary">US POLO</option>
                        <option value="stationary">Oneplus</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Color Name</label>
                    <select id="" name="product-category">
                        <option value="">--Select Color name--</option>
                        <option value="stationary">White</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Size Name</label>
                    <select id="" name="product-category">
                        <option value="">--Select size name--</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="">expiry date</label>
                    <input type="text" placeholder="dd-mm-yyyy"/>
                    {/* <button>Clear Date</button> */}
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Generic Name</label>
                    <input type="text"  placeholder="--Select Size Name--"/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="">Status</label>
                    <div className="toggle-switch">
                        <input type="checkbox" id="statusToggle" onChange={handleToggle} />
                        <label htmlFor="statusToggle" className="toggle">
                            <span className="toggle-text">{isActive ? 'Active' : 'Inactive'}</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div className="save-button-container">
            <button className="save-button">Save</button>
        </div>
    </div>
</div>
  );
};

export default Padd;