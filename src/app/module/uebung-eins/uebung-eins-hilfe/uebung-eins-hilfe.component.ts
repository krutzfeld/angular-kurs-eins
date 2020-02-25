import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-uebung-eins-hilfe',
    templateUrl: './uebung-eins-hilfe.component.html',
    styleUrls: ['./uebung-eins-hilfe.component.css']
})
export class UebungEinsHilfeComponent implements OnInit {
    private readonly helpKeyToOpen: Map<string, boolean> = new Map<string, boolean>();

    constructor() {
    }

    ngOnInit(): void {
    }

    isOpen(key: string): boolean {
        return this.helpKeyToOpen.get(key);
    }

    toggleOpen(key: string): void {
        const isOpen = this.helpKeyToOpen.get(key);
        this.helpKeyToOpen.set(key, !isOpen);
    }
}
