import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {
    searchUpdated: EventEmitter<any> = new EventEmitter();
    footerUpdated: EventEmitter<any> = new EventEmitter();

    IS_SEARCH: boolean;
    FTR: number;

    getSearch(): boolean {
        return this.IS_SEARCH;
    }

    setSearch(isSearch: boolean): void {
        this.IS_SEARCH = isSearch;
        this.searchUpdated.emit(this.IS_SEARCH);
    }

    getFooter(): number {
        return this.FTR;
    }

    setFooter(ftr: number): void {
        this.FTR = ftr;
        this.footerUpdated.emit(this.FTR);
    }
}