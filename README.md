## React component for the nicon

A React component for the nicon project <https://icofont.com/>. It renders a `<i>` tag with icofont classes.

#### prerequisite:

Ensure you have **React** and **Webpack** installed

#### Examples:

<https://icofont.com/examples>

#### How to use:

Install it with npm:

    npm install react-nicon

Include in your component:

    import Icon from 'react-nicon';

Use it in JSX:

    <Icon icon="apple"/>

nicon supports size, Rotate, and flip option. Pass values with props:

    <Icon icon="apple" rotate="180" flip="v" size="5"/>

Supported values for the props:

**icon** (Required):

Any valid icon name from the icofont website (<https://icofont.com/icons>).

**size** (Optional):

Size can have value from `1` to `10`. For example, `size="2"`.

**rotate** (Optional):

`90`,`180`,`270`rotate angles values are supported.

**flip** (Optional):

Filp icon using `horizontal` or `h` and `vertical` or `v`.

#### Standard Props Support:

All standard props like `style`, `onClick` are supported.

#### License:

This project, like the [icofont](https://icofont.com) project, is released under the [MIT License](https://opensource.org/licenses/MIT)
