import axios from 'axios';
var parseString = require('xml2js').parseString;
let category = [];
let product = [];
const ticket = "9_bnzj6idcn_b2n3c4_u55_a_-b_b62aj76bai3q4wh7vxwmb2afnrbds5bwhnyk773wbges298cyhiuwe_bg6ga2k";
const appToken = "c7799jfc39zytqbyhjnmnc4svkzj";

/**
 * api call for categories acion for categries
 */
const API_START_CAT = () => {
    return ({
        type: "API_STARTED_CAT"
    })
}

const API_SUCCESS_CAT = (data) => {
    return ({
        type: "API_SUCCESS_CAT",
        data: data
    })
}

const API_ERROR_CAT = () => {
    return ({
        type: "API_ERROR_CAT"
    })
}

/**
 * get categpry a[i cal from quickbase
 */
export const getCategory = () => {
    return (dispatch) => {
        dispatch(API_START_CAT());
        const api = 'https://mcftech.quickbase.com/db/bnyikxdat?a=API_DoQuery&ticket=' + ticket + '&apptoken=' + appToken + '&query={' + 3 + '.XEX.""}&clist=3.4.5.6.8&slist=3&options=sortorder-A';
        axios.get(api).then((response) => {
            parseString(response.data, function (err, result) {
                result.qdbapi.record.map((record, index) => {
                    let cat = {}
                    cat["id"] = record.record_id_;
                    cat["name"] = record.categoryname;
                    category.push(cat)
                });

                dispatch(API_SUCCESS_CAT(category));
            });

        }).catch((error) => {
            dispatch(API_ERROR_CAT());
        })
    }
}

/**
 * api call for categories acion for categries
 */
const API_START_PRO = () => {
    return ({
        type: "API_STARTED_PRO"
    })
}

const API_SUCCESS_PRO = (data) => {
    return ({
        type: "API_SUCCESS_PRO",
        data: data
    })
}

const API_ERROR_PRO = () => {
    return ({
        type: "API_ERROR_PRO"
    })
}

/**
 * get product api call from quickbase
 */
export const getProduct = () => {
    return (dispatch) => {
        dispatch(API_START_PRO());
        const api = 'https://mcftech.quickbase.com/db/bnyimfw99?a=API_DoQuery&ticket=' + ticket + '&apptoken=' + appToken + '&query={' + 3 + '.XEX.""}&clist=3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18&slist=3&options=sortorder-A';
        axios.get(api).then((response) => {
            parseString(response.data, function (err, result) {
                result.qdbapi.record.map((record, index) => {
                    let cat = {}
                    cat["id"] = record.record_id_;
                    cat["productname"] = record.product_name;
                    cat["categoryid"] = record.categoryid;
                    cat["image"] = record.image;
                    cat["base_price"] = record.base_price;
                    cat["selling_price"] = record.selling_price;
                    cat["in_stock"] = record.in_stock;
                    cat["details"] = record.details;
                    cat["rating"] = record.rating;
                    product.push(cat)
                });

                dispatch(API_SUCCESS_PRO(product));
            });

        }).catch((error) => {
            dispatch(API_ERROR_PRO());
        })
    }
}


