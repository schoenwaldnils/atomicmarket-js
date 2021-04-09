export declare enum AuctionState {
    Waiting = 0,
    Listed = 1,
    Canceled = 2,
    Sold = 3,
    Invalid = 4
}
export declare enum SaleState {
    Waiting = 0,
    Listed = 1,
    Canceled = 2,
    Sold = 3,
    Invalid = 4
}
export declare enum OfferState {
    Pending = 0,
    Invalid = 1,
    Unknown = 2,
    Accepted = 3,
    Declined = 4,
    Canceled = 5
}
export interface Sale {
    market_contract: string;
    asset_contract: string;
    sale_id: string;
    seller: string;
    buyer: string;
    offer_id: string;
    price: Price;
    listing_symbol: string;
    assets: Asset[];
    maker_marketplace: string;
    taker_marketplace: string;
    collection: LightCollection;
    sale_state: SaleState;
    offer_state: OfferState;
    collection_blacklisted: boolean;
    collection_whitelisted: boolean;
    seller_blacklisted: boolean;
    seller_whitelisted: boolean;
    updated_at_block: string;
    updated_at_time: string;
    created_at_block: string;
    created_at_time: string;
    created_at_txid: string;
}
export interface Marketplace {
    marketplace_name: string;
    creator: string;
    created_at_block: string;
    created_at_time: string;
}
export interface Pair {
    listing_symbol: string;
    settlement_symbol: string;
    delphi_pair_name: string;
    invert_delphi_pair: boolean;
}
export interface Config {
    atomicassets_contract: string;
    atomicmarket_contract: string;
    delphioracle_contract: string;
    version: string;
    maker_market_fee: string;
    taker_market_fee: string;
    maximum_auction_duration: string;
    minimum_bid_increase: string;
    supported_tokens: Token[];
    supported_pairs: Pair[];
}
export interface Auction {
    market_contract: string;
    asset_contract: string;
    auction_id: string;
    seller: string;
    buyer: string;
    price: Price;
    assets: Asset[];
    bids: Bid[];
    maker_marketplace: string;
    taker_marketplace: string;
    collection: LightCollection;
    state: AuctionState;
    collection_blacklisted: boolean;
    collection_whitelisted: boolean;
    seller_blacklisted: boolean;
    seller_whitelisted: boolean;
    end_time: string;
    updated_at_block: string;
    updated_at_time: string;
    created_at_block: string;
    created_at_time: string;
    created_at_txid: string;
}
export declare enum SortOrder {
    Asc = "asc",
    Desc = "desc"
}
export declare enum AuctionSort {
    Created = "created",
    Ending = "ending",
    AuctionId = "auction_id",
    Price = "price"
}
export declare enum SaleSort {
    Created = "created",
    SaleId = "sale_id",
    Price = "price"
}
export declare enum AssetSort {
    AssetId = "asset_id",
    Minted = "minted",
    Updated = "updated"
}
export declare enum TransferSort {
    Created = "created"
}
export declare enum OfferSort {
    Created = "created"
}
export interface AuctionParams extends Omit<SaleParams, 'state' | 'sort'> {
    state?: AuctionState[];
    sort?: AuctionSort;
}
export interface SaleParams extends SearchParams {
    state?: SaleState[];
    max_assets?: string;
    show_blacklisted?: boolean;
    whitelisted_seller_only?: boolean;
    whitelisted_collections_only?: boolean;
    whitelisted_only?: boolean;
    marketplace?: string[];
    maker_marketplace?: string[];
    taker_marketplace?: string[];
    symbol?: string;
    seller?: string[];
    buyer?: string[];
    min_price?: string;
    max_price?: string;
    owner?: string;
    collection_name?: string;
    schema_name?: string;
    template_id?: string;
    match?: string;
    sort?: SaleSort;
}
export interface AssetParams extends SearchParams {
    owner?: string;
    collection_name?: string;
    schema_name?: string;
    template_id?: string;
    authorized_account?: string;
    match?: string;
    sort?: AssetSort;
}
export interface OfferParams extends SearchParams {
    account?: string[];
    sender?: string[];
    recipient?: string[];
    state?: OfferState[];
    is_recipient_contract?: boolean;
    asset_id?: string[];
    sort?: OfferSort;
}
export interface TransferParams extends SearchParams {
    account?: string[];
    sender?: string[];
    recipient?: string[];
    asset_id?: string[];
    sort?: TransferSort;
}
export interface SearchParams {
    order?: SortOrder;
}
export interface PriceParams {
    collection_name?: string;
    template_id?: string;
    schema_name?: string;
    symbol?: string;
}
export interface Price extends Token {
    price: string;
    block_time: string;
    block_num: string;
}
export interface Token {
    token_precision: string;
    token_contract: string;
    token_symbol: string;
}
export interface Price extends Token {
    amount: string;
}
export interface ListingAsset extends Asset {
    sales: Pick<Sale, 'market_contract' | 'sale_id'>[];
    auction: Pick<Auction, 'market_contract' | 'auction_id'>;
}
export interface AssetLog {
    log_id: string;
    name: string;
    data: any;
    txid: string;
    created_at_block: string;
    created_at_time: string;
}
export interface ListingTransfer {
    contract: string;
    sender_name: string;
    recipient_name: string;
    memo: string;
    assets: ListingAsset[];
    created_at_block: string;
    created_at_time: string;
}
export interface ListingOffer {
    contract: string;
    offer_id: string;
    sender_name: string;
    recipient_name: string;
    memo: string;
    state: OfferState;
    is_sender_contract: boolean;
    is_recipient_contract: boolean;
    sender_assets: ListingAsset[];
    recipient_assets: ListingAsset[];
    updated_at_block: string;
    updated_at_time: string;
    created_at_block: string;
    created_at_time: string;
}
export interface Asset {
    contract: string;
    asset_id: string;
    owner: string;
    name: string;
    is_transferable: boolean;
    is_burnable: boolean;
    collection: LightCollection;
    schema: LightSchema;
    template: LightTemplate;
    backed_tokens: Price[];
    immutable_data: any;
    mutable_data: any;
    data: any;
    burned_at_block: string;
    burned_at_time: string;
    updated_at_block: string;
    updated_at_time: string;
    minted_at_block: string;
    minted_at_time: string;
}
export interface LightCollection {
    collection_name: string;
    name: string;
    author: string;
    allow_notify: boolean;
    authorized_accounts: string[];
    notify_accounts: string[];
    market_fee: string;
    created_at_block: string;
    created_at_time: string;
}
export interface LightSchema {
    schema_name: string;
    format: SchemaFormat[];
    created_at_block: string;
    created_at_time: string;
}
export interface SchemaFormat {
    name: string;
    type: string;
}
export interface LightTemplate {
    template_id: string;
    max_supply: string;
    issued_supply: string;
    is_transferable: boolean;
    is_burnable: boolean;
    immutable_data: any;
    created_at_block: string;
    created_at_time: string;
}
export interface Bid {
    number: string;
    account: string;
    amount: string;
    txid: string;
    created_at_block: string;
    created_at_time: string;
}
