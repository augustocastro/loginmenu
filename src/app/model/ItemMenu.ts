export class ItemMenu {

    constructor(public readonly item: string, public readonly permissoes: string[]) {
        this.item = item;
        this.permissoes = permissoes;
    }
}