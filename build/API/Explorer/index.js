"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = __importDefault(require("../../Errors/ApiError"));
class ExplorerApi {
    constructor(endpoint, namespace, args) {
        this.endpoint = endpoint;
        this.namespace = namespace;
        if (args.fetch) {
            this.fetchBuiltin = args.fetch;
        }
        else {
            this.fetchBuiltin = global.fetch;
        }
    }
    async getSales(options = {}, page = 1, limit = 100, data = {}) {
        const dataKeys = Object.keys(data);
        for (const key of dataKeys) {
            options['data.' + key] = data[key];
        }
        return await this.fetchEndpoint('/v1/sales', Object.assign({ page, limit }, options));
    }
    async getSale(id) {
        return await this.fetchEndpoint('/v1/sales/' + id, {});
    }
    async getAuctions(options = {}, page = 1, limit = 100, data = {}) {
        const dataKeys = Object.keys(data);
        for (const key of dataKeys) {
            options['data.' + key] = data[key];
        }
        return await this.fetchEndpoint('/v1/auctions', Object.assign({ page, limit }, options));
    }
    async getAuction(id) {
        return await this.fetchEndpoint('/v1/auctions/' + id, {});
    }
    async getMarketplaces() {
        return await this.fetchEndpoint('/v1/marketplaces', {});
    }
    async getMarketplace(name) {
        return await this.fetchEndpoint('/v1/marketplaces/' + name, {});
    }
    async getPrices(options = {}) {
        return await this.fetchEndpoint('/v1/prices', options);
    }
    async getConfig() {
        return await this.fetchEndpoint('/v1/config', {});
    }
    async getAssets(options = {}, page = 1, limit = 100, data = {}) {
        const dataKeys = Object.keys(data);
        for (const key of dataKeys) {
            options['data.' + key] = data[key];
        }
        return await this.fetchEndpoint('/v1/assets', Object.assign({ page, limit }, options));
    }
    async getAsset(id) {
        return await this.fetchEndpoint('/v1/assets/' + id, {});
    }
    async getAssetLogs(id, page = 1, limit = 100, order = 'desc') {
        return await this.fetchEndpoint('/v1/assets/' + id + '/logs', { page, limit, order });
    }
    async getTransfers(options = {}, page = 1, limit = 100) {
        return await this.fetchEndpoint('/v1/transfers', Object.assign({ page, limit }, options));
    }
    async getOffers(options = {}, page = 1, limit = 100) {
        return await this.fetchEndpoint('/v1/offers', Object.assign({ page, limit }, options));
    }
    async getOffer(id) {
        return await this.fetchEndpoint('/v1/offers/' + id, {});
    }
    async fetchEndpoint(path, args) {
        let response;
        const f = this.fetchBuiltin;
        const queryString = Object.keys(args).map((key) => {
            return key + '=' + encodeURIComponent(args[key]);
        }).join('&');
        try {
            response = await f(this.endpoint + '/' + this.namespace + path + (queryString.length > 0 ? '?' + queryString : ''));
        }
        catch (e) {
            throw new ApiError_1.default(e.message, 500);
        }
        const json = await response.json();
        if (response.status !== 200) {
            throw new ApiError_1.default(json.message, response.status);
        }
        if (!json.success) {
            throw new ApiError_1.default(json.message, response.status);
        }
        return json.data;
    }
}
exports.default = ExplorerApi;
