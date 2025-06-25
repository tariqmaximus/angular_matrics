ng-moringa-table

A dynamic and responsive Angular table component with smart filtering, custom buttons, checkboxes, and pagination.

✨ Features

✅ Customizable column definitions

🔍 Built-in search and date filters

📊 Progress tracking bar per status

🔁 Tabs or dropdown filters

📦 Fully standalone component (Angular 17+ compatible)

📱 Mobile-friendly responsive layout

📦 Installation

npm install ng-moringa-table

🔧 Usage

Import in your Angular component or module:

import { NgMoringaTableComponent } from 'ng-moringa-table';

@NgModule({
  imports: [NgMoringaTableComponent]
})
export class YourModule {}

Use in template:

<ng-moringa-table
  [data]="tableData"
  [columns]="columnDefs"
  [searchButton]="true"
  [filterSearch]="true"
  [filterStyle]="'tabs'"
  [headerButtons]="headerActions"
  [actionButtons]="rowActions"
  [Sorting]="true"
  [paginated]="true"
  [collapsible]="true"
  [progressBy]="'status'"
></ng-moringa-table>

🧩 Inputs

Input

Type

Description

data

any[]

Table data

columns

{ key: string, label: string }[]

Column definitions

searchButton

boolean

Show/hide search toggle

filterSearch

boolean

Show keyword & date filter bar

filterStyle

`'tabs'

'dropdown'`

Filter style UI

headerButtons

CardButton[]

Buttons in the header toolbar

actionButtons

ActionButton[]

Buttons for each row

Sorting

boolean

Enable column sorting

paginated

boolean

Enable pagination controls

collapsible

boolean

Enable collapse toggle

progressBy

string

Key for progress tracking (e.g., 'status')

searchOptions

string[]

Options for filter (tabs/dropdown)

📤 Outputs

Output

Type

Description

rowSelected

EventEmitter<any>

Emits when a row is selected

buttonClicked

EventEmitter<{ button: ActionButton, row: any }>

Emits when row button clicked

📘 Types

CardButton

interface CardButton {
  label?: string;
  icon?: string;
  targetId: string;
  action?: () => void;
}

ActionButton

interface ActionButton {
  label?: string;
  tooltip: string;
  icon?: string;
  className?: string;
  isDropdown?: boolean;
  options?: string[];
  action?: (row: any) => void;
  dropdownAction?: (selected: string, row: any) => void;
}

🧪 Development

To build the library:

npm run build:moringa

To publish to npm:

cd dist/ng-moringa-table
npm publish --access public

🔗 Links

Live Demo (Coming Soon)

GitHub Repository (if public)

📄 License

MIT © 2025 Tariq Mehmood