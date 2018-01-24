Top aligned labels

```js
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
</Form>
```

Left aligned labels

```js
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
</Form>
```

Right aligned labels

```js
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
</Form>
```

By default spacing is equal to 4px. To change it
pass prop spacing to Form

```js
<Form labelWidth="80px" labelAlign="right" spacing={10}>
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
</Form>
```
