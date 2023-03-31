const React = require('react')

const e = React.createElement(
  'button',
  {
    onClick: () => console.log(1),
  },
  'count is '
)

console.log(e)
/*
{
    '$$typeof': Symbol(react.element),
    type: 'button',
    key: null,
    ref: null,
    props: { onClick: [Function: onClick], children: 'count is ' },
    _owner: null,
    _store: {}
}
*/
