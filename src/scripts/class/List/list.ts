import ListItem from "./listItem";

export default class List {
  private _content: ListItem[];

  constructor(...listItems: ListItem[]) {
    this._content = listItems;
  }

  get content(): ListItem[] {
    return this._content;
  }

  set content(listItems: ListItem[]) {
    this._content = listItems;
  }

  pushListItem(listItem: ListItem) {
    this._content.push(listItem);
  }

  deleteListItem(idx: number) {}
}
