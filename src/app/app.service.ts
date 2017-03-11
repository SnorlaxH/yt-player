import { Injectable } from '@angular/core';

let IS_SEARCH: boolean;

@Injectable()
export class AppService {
    getSearch(): boolean {
        return IS_SEARCH;
    }

    setSearch(isSearch: boolean): void {
        IS_SEARCH = isSearch;
    }
}