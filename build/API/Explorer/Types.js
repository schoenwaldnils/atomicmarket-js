"use strict";
// Thanks to Hugo Martinez for the types
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferSort = exports.TransferSort = exports.AssetSort = exports.SaleSort = exports.AuctionSort = exports.SortOrder = exports.OfferState = exports.SaleState = exports.AuctionState = void 0;
var AuctionState;
(function (AuctionState) {
    AuctionState[AuctionState["Waiting"] = 0] = "Waiting";
    AuctionState[AuctionState["Listed"] = 1] = "Listed";
    AuctionState[AuctionState["Canceled"] = 2] = "Canceled";
    AuctionState[AuctionState["Sold"] = 3] = "Sold";
    AuctionState[AuctionState["Invalid"] = 4] = "Invalid";
})(AuctionState = exports.AuctionState || (exports.AuctionState = {}));
var SaleState;
(function (SaleState) {
    SaleState[SaleState["Waiting"] = 0] = "Waiting";
    SaleState[SaleState["Listed"] = 1] = "Listed";
    SaleState[SaleState["Canceled"] = 2] = "Canceled";
    SaleState[SaleState["Sold"] = 3] = "Sold";
    SaleState[SaleState["Invalid"] = 4] = "Invalid";
})(SaleState = exports.SaleState || (exports.SaleState = {}));
var OfferState;
(function (OfferState) {
    OfferState[OfferState["Pending"] = 0] = "Pending";
    OfferState[OfferState["Invalid"] = 1] = "Invalid";
    OfferState[OfferState["Unknown"] = 2] = "Unknown";
    OfferState[OfferState["Accepted"] = 3] = "Accepted";
    OfferState[OfferState["Declined"] = 4] = "Declined";
    OfferState[OfferState["Canceled"] = 5] = "Canceled";
})(OfferState = exports.OfferState || (exports.OfferState = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["Asc"] = "asc";
    SortOrder["Desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var AuctionSort;
(function (AuctionSort) {
    AuctionSort["Created"] = "created";
    AuctionSort["Ending"] = "ending";
    AuctionSort["AuctionId"] = "auction_id";
    AuctionSort["Price"] = "price";
})(AuctionSort = exports.AuctionSort || (exports.AuctionSort = {}));
var SaleSort;
(function (SaleSort) {
    SaleSort["Created"] = "created";
    SaleSort["SaleId"] = "sale_id";
    SaleSort["Price"] = "price";
})(SaleSort = exports.SaleSort || (exports.SaleSort = {}));
var AssetSort;
(function (AssetSort) {
    AssetSort["AssetId"] = "asset_id";
    AssetSort["Minted"] = "minted";
    AssetSort["Updated"] = "updated";
})(AssetSort = exports.AssetSort || (exports.AssetSort = {}));
var TransferSort;
(function (TransferSort) {
    TransferSort["Created"] = "created";
})(TransferSort = exports.TransferSort || (exports.TransferSort = {}));
var OfferSort;
(function (OfferSort) {
    OfferSort["Created"] = "created";
})(OfferSort = exports.OfferSort || (exports.OfferSort = {}));
