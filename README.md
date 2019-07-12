## Key points takeaway:

#### Using constructor for Component Class instead of shortcut syntax `state = {}`

- Define State and Props interface and pass to Class as arguments so that we have type check for State and Props
- Doing shortcut syntax will overwrite the interface, potentially cause problems
- Doing shortcut syntax, we'll not have type checks in cases like:
  > setState((prevState) => { ... })

#### Actions

- Define interfaces for every action separately with `type` and `payload`
- Define interfaces for data returned from api
- Define ActionTypes as `enum` to limit possible values that's considered as valid type for a `action`

#### Reducers

- Define a type that is union of all related actions to do type checks for reducers

#### Typescript

- Some lib will include type def file inside, some will not, and require installing separately like @types/react-redux
