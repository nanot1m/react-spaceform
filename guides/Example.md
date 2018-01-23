## Examples

Top aligned labels

```js
const { Form, FormRow, FormLabel, FormControl } = require("../src");

<Form>
  <FormRow>
    <FormLabel>Login</FormLabel>
    <FormControl>
      <input placeholder="login" />
    </FormControl>
  </FormRow>
  <FormRow>
    <FormLabel>Password</FormLabel>
    <FormControl>
      <input placeholder="password" type="password" />
    </FormControl>
  </FormRow>
  <FormRow>
    <FormLabel />
    <FormControl>
      <input type="submit" value="Sign in" />
    </FormControl>
  </FormRow>
</Form>;
```

Left aligned labels

```js
const { Form, FormRow, FormLabel, FormControl } = require("../src");

<Form labelWidth="80px" labelAlign="left">
  <FormRow>
    <FormLabel>Login</FormLabel>
    <FormControl>
      <input placeholder="login" />
    </FormControl>
  </FormRow>
  <FormRow>
    <FormLabel>Password</FormLabel>
    <FormControl>
      <input placeholder="password" type="password" />
    </FormControl>
  </FormRow>
  <FormRow>
    <FormLabel />
    <FormControl>
      <input type="submit" value="Sign in" />
    </FormControl>
  </FormRow>
</Form>;
```

Right aligned labels

```js
const { Form, FormRow, FormLabel, FormControl } = require("../src");

<Form labelWidth="80px" labelAlign="right">
  <FormRow>
    <FormLabel>Login</FormLabel>
    <FormControl>
      <input placeholder="login" />
    </FormControl>
  </FormRow>
  <FormRow>
    <FormLabel>Password</FormLabel>
    <FormControl>
      <input placeholder="password" type="password" />
    </FormControl>
  </FormRow>
  <FormRow>
    <FormLabel />
    <FormControl>
      <input type="submit" value="Sign in" />
    </FormControl>
  </FormRow>
</Form>;
```
