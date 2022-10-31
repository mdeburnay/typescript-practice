import React from "react";

/**
 * We can use generics in React too, either when passing props to a component
 * or when setting types for state.
 */
interface Props {
  name: string;
}

/**
 * With the below interface, each value is going to have different values in it,
 * and so we want to pass in a generic.
 */
interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

/**
 * Now, in the below form component, we can pass in a generic type, and then
 * use that type in the values prop.
 */

const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values);
};

const App: React.FC<Props> = ({ name }): JSX.Element => {
  const [fullName, setFullName] = React.useState<{ fullName: string | null }>({
    fullName: "",
  });

  /**
   * Below we can see that we have overridden the types by passing in the interface
   * next to the Form component.
   */

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <Form<{ lastName: string | null }> values={{ lastName: "" }}>
        {(values) => <div>{values.lastName}</div>}
      </Form>
    </div>
  );
};

export default App;
