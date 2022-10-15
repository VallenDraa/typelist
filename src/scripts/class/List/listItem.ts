export default class ListItem {
  private _title: string;
  private _content: string;
  private _date: Date;

  constructor(title: string, content: string, date: Date = new Date()) {
    this._title = title;
    this._content = content;
    this._date = date;
  }

  get title(): string {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  get content(): string {
    return this._content;
  }
  set content(title: string) {
    this._content = title;
  }

  get date(): Date {
    return this._date;
  }
  set date(date: Date) {
    this._date = date;
  }
}
