import { AssetLog, AssetParams, Auction, AuctionParams, Config, ListingAsset, ListingOffer, ListingTransfer, Marketplace, OfferParams, Price, PriceParams, Sale, SaleParams, TransferParams } from './Types';
declare type Fetch = (input?: Request | string, init?: RequestInit) => Promise<Response>;
declare type ApiArgs = {
    fetch?: Fetch;
    rateLimit?: number;
};
export default class ExplorerApi {
    private readonly endpoint;
    private readonly namespace;
    private readonly fetchBuiltin;
    constructor(endpoint: string, namespace: string, args: ApiArgs);
    getSales(options?: SaleParams & {
        [key: string]: any;
    }, page?: number, limit?: number, data?: {
        [key: string]: any;
    }): Promise<Sale[]>;
    getSale(id: string): Promise<Sale>;
    getAuctions(options?: AuctionParams & {
        [key: string]: any;
    }, page?: number, limit?: number, data?: {
        [key: string]: any;
    }): Promise<Auction[]>;
    getAuction(id: string): Promise<Auction>;
    getMarketplaces(): Promise<Marketplace[]>;
    getMarketplace(name: string): Promise<Marketplace>;
    getPrices(options?: PriceParams): Promise<Price[]>;
    getConfig(): Promise<Config>;
    getAssets(options?: AssetParams & {
        [key: string]: any;
    }, page?: number, limit?: number, data?: {
        [key: string]: any;
    }): Promise<ListingAsset[]>;
    getAsset(id: string): Promise<ListingAsset>;
    getAssetLogs(id: string, page?: number, limit?: number, order?: string): Promise<AssetLog[]>;
    getTransfers(options?: TransferParams, page?: number, limit?: number): Promise<ListingTransfer[]>;
    getOffers(options?: OfferParams, page?: number, limit?: number): Promise<ListingOffer[]>;
    getOffer(id: string): Promise<ListingOffer>;
    fetchEndpoint(path: string, args: any): Promise<any>;
}
export {};
