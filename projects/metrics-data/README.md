# matric-table

A powerful, reusable Angular smart table component designed with flexibility and interactivity in mind. Easily integrate search filters, sorting, pagination, status tags, actions, and progress indicators — all without relying on Bootstrap or external icon libraries.

---

## 📦 Installation

```bash
npm install matric-table
```

Make sure your project is using Angular v15+.

---

## 🧩 Usage

Import and use the component directly since it's standalone:

### In Your Component

```ts
import { MetricsDataComponent } from 'matric-table';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [MetricsDataComponent],
  template: `<metrics-data [data]="myData" [columns]="columns"></metrics-data>`
})
export class MyPageComponent {
  columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' }
  ];

  myData = [
    { name: 'John Doe', email: 'john@example.com', status: 'active' },
    { name: 'Jane Doe', email: 'jane@example.com', status: 'inactive' }
  ];
}
```

---

## ⚙️ Inputs

| Input               | Type                               | Description |
|--------------------|------------------------------------|-------------|
| `data`             | `any[]`                            | Table row data |
| `columns`          | `{ key: string; label: string }[]` | Column definitions |
| `filterStyle`      | `('tabs' \| 'dropdown' \| 'keyword' \| 'date')[]` | Filter UI modes |
| `searchButton`     | `boolean`                          | Show search input |
| `Sorting`          | `boolean`                          | Enable sorting |
| `paginated`        | `boolean`                          | Enable pagination |
| `pageSize`         | `number`                           | Items per page |
| `statusMap`        | `Record<string, string>`           | Status color classes |
| `actionButtons`    | `ActionButton[]`                   | Row action buttons |
| `headerButtons`    | `CardButton[]`                     | Header-level buttons |
| `progressBy`       | `string`                           | Key to base progress bar on |
| `collapsible`      | `boolean`                          | Make card collapsible |
| `title` / `sub`    | `string`                           | Header text |
| `icon`             | `string`                           | Optional icon class |
| `excludeColumns`   | `string[]`                         | Hide auto-generated columns |
| `valueLenthColumns`| `string[]`                         | Apply ellipsis style |

---

## 🔁 Outputs

| Output     | Type                                      | Description |
|------------|-------------------------------------------|-------------|
| `rowAction`| `EventEmitter<{ action: string; row: any }>` | Emits when action button is clicked |

---

## 🎨 Customization

- Use `variant` input to apply a custom style class to the whole table
- Provide a `statusMap` for color-coding status values:

```ts
statusMap = {
  active: 'success',
  inactive: 'danger',
  pending: 'warning'
};
```

---

## 📅 Date Picker Filter

Enable `filterStyle` with `'date'` to show an inline calendar. Date filtering works on rows with a `date` property.

---

## 📌 Action Button Example

```ts
actionButtons = [
  {
    label: 'Edit',
    tooltip: 'Edit row',
    icon: 'bi bi-pencil',
    className: 'btn-edit',
    action: (row) => console.log('Edit', row)
  }
];
```

---

## ✅ License

MIT License © [Tariq Jarral](https://github.com/tariq-jarral)